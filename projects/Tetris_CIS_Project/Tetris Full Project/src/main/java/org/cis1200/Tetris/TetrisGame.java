package org.cis1200.Tetris;

import javax.swing.Timer;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.*;

public class TetrisGame {
    /**
     * The TetrisGame class manages the full game logic and state transitions
     * for the Tetris application.
     *
     * Responsibilities include:
     * - Managing the current game board, active and next tetrominoes
     * - Handling user actions like move, rotate, drop, and undo
     * - Tracking game states such as MENU, PLAYING, PAUSED, COUNTDOWN, GAME_OVER
     * - Managing scores, high scores, and difficulty settings
     * - Handling timed actions (piece dropping, countdown, temporary messages)
     * - Supporting save/load functionality and easy-mode undo
     *
     * Internally, it uses:
     * - Timers to control piece falling and countdown behavior
     * - A history stack to enable undoing the last move (in easy mode)
     * - ScoreManager to maintain current and top scores
     *
     * This class acts as the "Model" in a typical MVC structure, interacting with
     * UI classes like GamePanel and InputHandler to drive the Tetris gameplay.
     */

    private static final int DROP_INTERVAL = 500;

    private final GameBoard board;
    private Tetromino curr;
    private Tetromino next;

    private Timer gameTimer;
    private Timer countdownTimer;

    private final ScoreManager scoreManager = new ScoreManager();

    private boolean showSaveMessage = false;
    private Timer saveMessageTimer;

    private boolean showDiffMessage = false;
    private String diffMessage = "";
    private Timer diffTimer;

    public enum GameState {
        MENU, COUNTDOWN, PLAYING, PAUSED, GAME_OVER, VIEWING_SCORES
    }

    public enum Difficulty {
        NORMAL, EASY
    }

    private Difficulty difficulty = Difficulty.NORMAL;

    private GameState state = GameState.MENU;
    private int countdown = 5;

    private static class GameSnapshot {
        /**
         * The GameSnapshot class captures a snapshot of the game state at a specific
         * moment.
         *
         * It stores:
         * - A copy of the game board grid
         * - The current active Tetromino
         * - The next upcoming Tetromino
         * - The current score
         *
         * Snapshots are used to implement features like undo functionality
         * by restoring a previous game state when needed.
         */

        final int[][] grid;
        final Tetromino curr, next;
        final int score;

        GameSnapshot(int[][] g, Tetromino c, Tetromino n, int s) {
            grid = g;
            curr = c;
            next = n;
            score = s;
        }
    }

    private final Deque<GameSnapshot> history = new ArrayDeque<>();

    public TetrisGame() {
        board = new GameBoard();
        curr = Factory.createRandomTetromino();
        next = Factory.createRandomTetromino();
        scoreManager.setTopScores(SaveManager.loadTopScoresOnly());
        startGameTimer();
    }

    private void startGameTimer() {
        gameTimer = new Timer(DROP_INTERVAL, e -> {
            if (state == GameState.PLAYING) {
                gameStep();
            }
        });
        gameTimer.start();
    }

    private void gameStep() {
        Tetromino moved = new Tetromino(curr);
        moved.move(1, 0);
        if (canMove(moved)) {
            curr.move(1, 0);
        } else {
            placePiece();
            if (!canMove(curr)) {
                scoreManager.saveScoreIfTop();
                setState(GameState.GAME_OVER);
            }
        }
    }

    public void moveCurrPiece(int dx, int dy) {
        Tetromino moved = new Tetromino(curr);
        moved.move(dx, dy);
        if (canMove(moved)) {
            curr.move(dx, dy);
        }
    }

    public void rotateCurrPiece() {
        Tetromino rotated = new Tetromino(curr);
        rotated.rotate();
        if (canMove(rotated)) {
            curr.rotate();
        }
    }

    private boolean canMove(Tetromino piece) {
        int[][] shape = piece.getShape();
        int row = piece.getRow();
        int col = piece.getCol();

        for (int i = 0; i < shape.length; i++) {
            for (int j = 0; j < shape[0].length; j++) {
                if (shape[i][j] != 0) {
                    int boardRow = row + i;
                    int boardCol = col + j;
                    if (!board.inBounds(boardRow, boardCol) || !board.isEmpty(boardRow, boardCol)) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    public void dropPiece() {
        while (true) {

            Tetromino moved = new Tetromino(curr);
            moved.move(1, 0);
            if (canMove(moved)) {
                curr.move(1, 0);
            } else {
                break;
            }
        }
        placePiece();
    }

    public void placePiece() {
        history.push(
                new GameSnapshot(
                        copyGrid(board.getGrid()),
                        new Tetromino(curr),
                        new Tetromino(next),
                        scoreManager.getCurrentScore()
                )
        );

        placeTetromino(curr);
        scoreManager.piecePlaced();
        int cleared = board.clearFullRows();
        if (cleared > 0) {
            scoreManager.rowsCleared(cleared);
        }

        curr = next;
        next = Factory.createRandomTetromino();
    }

    private void placeTetromino(Tetromino t) {
        int[][] shape = t.getShape();
        int row = t.getRow();
        int col = t.getCol();
        int id = t.getId();

        for (int i = 0; i < shape.length; i++) {
            for (int j = 0; j < shape[0].length; j++) {
                if (shape[i][j] != 0) {
                    board.setCell(row + i, col + j, id);
                }
            }
        }
    }

    public void toggleRestart() {
        board.clearBoard();
        curr = Factory.createRandomTetromino();
        next = Factory.createRandomTetromino();
        scoreManager.resetCurrentScore();
        history.clear();
        setState(GameState.MENU);
    }

    public void startCountdown() {
        setState(GameState.COUNTDOWN);
        countdown = 5;

        countdownTimer = new Timer(1000, new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                countdown--;
                if (countdown <= 0) {
                    countdownTimer.stop();
                    setState(GameState.PLAYING);
                }
            }
        });
        countdownTimer.start();
    }

    public void setLoadedState(Tetromino curr, Tetromino next, int score, List<Integer> topScores) {
        this.curr = curr;
        this.next = next;
        scoreManager.setCurrentScore(score);
        scoreManager.setTopScores(topScores);
    }

    public void resetGame() {
        board.clearBoard();
        scoreManager.resetCurrentScore();
        curr = Factory.createRandomTetromino();
        next = Factory.createRandomTetromino();
        history.clear();
    }

    public void showSaveMessage() {
        showSaveMessage = true;
        if (saveMessageTimer != null) {
            saveMessageTimer.stop();
        }
        saveMessageTimer = new Timer(1500, e -> showSaveMessage = false);
        saveMessageTimer.setRepeats(false);
        saveMessageTimer.start();
    }

    private void showDifficultyPopup(String msg) {
        diffMessage = msg;
        showDiffMessage = true;
        if (diffTimer != null) {
            diffTimer.stop();
        }
        diffTimer = new Timer(1500, e -> showDiffMessage = false);
        diffTimer.setRepeats(false);
        diffTimer.start();
    }

    private int[][] copyGrid(int[][] src) {
        int[][] dst = new int[src.length][src[0].length];
        for (int i = 0; i < src.length; i++) {
            System.arraycopy(src[i], 0, dst[i], 0, src[i].length);
        }
        return dst;
    }

    public void undoLastMove() {
        if (difficulty != Difficulty.EASY || history.isEmpty()) {
            return;
        }

        GameSnapshot snap = history.pop();

        int[][] g = board.getGrid();
        for (int i = 0; i < g.length; i++) {
            System.arraycopy(snap.grid[i], 0, g[i], 0, g[i].length);
        }

        scoreManager.setCurrentScore(snap.score);

        this.curr = new Tetromino(snap.curr);
        this.curr.setPosition(0, GameBoard.getCols() / 2 - curr.getShape()[0].length / 2);

        this.next = new Tetromino(snap.next);
    }

    public void setDifficulty(Difficulty d) {
        difficulty = d;
        showDifficultyPopup("Difficulty: " + (d == Difficulty.EASY ? "EASY" : "NORMAL"));
    }

    public void setState(GameState newState) {
        this.state = newState;
        if (newState != GameState.COUNTDOWN && countdownTimer != null) {
            countdownTimer.stop();
        }
    }

    public boolean shouldShowSaveMessage() {
        return showSaveMessage;
    }

    public boolean shouldShowDifficultyMessage() {
        return showDiffMessage;
    }

    public String getDifficultyMessage() {
        return diffMessage;
    }

    public int getCountdown() {
        return countdown;
    }

    public GameBoard getBoard() {
        return board;
    }

    public Tetromino getCurr() {
        return curr;
    }

    public Tetromino getNextPiece() {
        return next;
    }

    public GameState getState() {
        return state;
    }

    public int getCurrentScore() {
        return scoreManager.getCurrentScore();
    }

    public int getHighScore() {
        return scoreManager.getHighScore();
    }

    public List<Integer> getTopScores() {
        return scoreManager.getTopScores();
    }

    public Difficulty getDifficulty() {
        return difficulty;
    }

}