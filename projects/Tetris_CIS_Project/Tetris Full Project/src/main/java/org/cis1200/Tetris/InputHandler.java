package org.cis1200.Tetris;

import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;

public class InputHandler extends KeyAdapter {
    /**
     * The InputHandler class processes user keyboard input and maps it to game
     * actions
     * based on the current state of the Tetris game.
     *
     * It extends KeyAdapter and overrides the keyPressed method to handle key
     * events
     * during different game states: MENU, PLAYING, PAUSED, GAME_OVER, and
     * VIEWING_SCORES.
     *
     * Each key press is context-sensitive, triggering appropriate actions like
     * moving
     * or rotating tetrominoes, pausing the game, saving/loading state, and
     * navigating menus.
     *
     * This class interacts closely with the TetrisGame model to update game state,
     * control gameplay, and manage transitions between screens.
     */
    private final TetrisGame game;

    public InputHandler(TetrisGame game) {
        this.game = game;
    }

    @Override
    public void keyPressed(KeyEvent e) {
        TetrisGame.GameState state = game.getState();
        int code = e.getKeyCode();

        switch (state) {
            case MENU -> handleMenuInput(code);
            case VIEWING_SCORES -> handleScoresInput(code);
            case PLAYING -> handlePlayingInput(code);
            case PAUSED -> handlePausedInput(code);
            case GAME_OVER -> handleGameOverInput(code);
            default -> {
                // do nothing
            }
        }
    }

    private void handleMenuInput(int code) {
        switch (code) {
            case KeyEvent.VK_ENTER -> {
                game.resetGame();
                game.startCountdown();
            }
            case KeyEvent.VK_H -> game.setState(TetrisGame.GameState.VIEWING_SCORES);
            case KeyEvent.VK_L -> {
                SaveManager.loadGame(game);
                game.startCountdown();
            }
            case KeyEvent.VK_1 -> game.setDifficulty(TetrisGame.Difficulty.NORMAL);
            case KeyEvent.VK_2 -> game.setDifficulty(TetrisGame.Difficulty.EASY);
            default -> {
                // do nothing
            }
        }
    }

    private void handleScoresInput(int code) {
        if (code == KeyEvent.VK_ESCAPE) {
            game.setState(TetrisGame.GameState.MENU);
        }
    }

    private void handlePlayingInput(int code) {
        switch (code) {
            case KeyEvent.VK_LEFT -> game.moveCurrPiece(0, -1);
            case KeyEvent.VK_RIGHT -> game.moveCurrPiece(0, 1);
            case KeyEvent.VK_DOWN -> game.moveCurrPiece(1, 0);
            case KeyEvent.VK_UP -> game.rotateCurrPiece();
            case KeyEvent.VK_SPACE -> game.dropPiece();
            case KeyEvent.VK_P -> game.setState(TetrisGame.GameState.PAUSED);
            case KeyEvent.VK_S -> {
                SaveManager.saveGame(game);
                game.showSaveMessage();
                game.setState(TetrisGame.GameState.MENU);
            }
            case KeyEvent.VK_Z -> game.undoLastMove();
            default -> {
                // do nothing
            }
        }
    }

    private void handlePausedInput(int code) {
        switch (code) {
            case KeyEvent.VK_P -> game.setState(TetrisGame.GameState.PLAYING);

            case KeyEvent.VK_S, KeyEvent.VK_ESCAPE -> {
                SaveManager.saveGame(game);
                game.showSaveMessage();
                game.toggleRestart();
                game.setState(TetrisGame.GameState.MENU);
            }
            default -> {
                // do nothing
            }
        }
    }

    private void handleGameOverInput(int code) {
        if (code == KeyEvent.VK_R) {
            game.toggleRestart();
        }
    }
}