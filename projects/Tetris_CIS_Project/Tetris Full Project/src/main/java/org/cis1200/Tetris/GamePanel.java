package org.cis1200.Tetris;

import javax.swing.*;
import java.awt.*;
import java.util.List;

public class GamePanel extends JPanel {
    /**
     * The GamePanel class is the main rendering component for the Tetris game.
     * It extends JPanel and is responsible for visually displaying the game state,
     * including the board, current tetromino, next tetromino, score, and overlays
     * (such as pause screen, menus, and messages).
     *
     * Key Features:
     * - Dynamically paints the game board and tetrominoes
     * - Displays overlays for menu, pause, game over, countdown, and high scores
     * - Shows temporary messages (e.g., game saved, difficulty mode)
     * - Scales visuals based on a fixed tile size
     *
     * This panel is updated approximately 60 times per second and interacts
     * closely with the TetrisGame model for state-based rendering.
     */
    private static final int TILESIZE = 30;
    private final TetrisGame game;

    public GamePanel(TetrisGame game) {
        // initialize the gmae and set the preffered size of our Board in pixels.
        this.game = game;
        setPreferredSize(
                new Dimension(GameBoard.getCols() * TILESIZE, GameBoard.getRows() * TILESIZE)
        );
        setBackground(Color.BLACK);
        setFocusable(true);
        requestFocusInWindow();
    }

    /**
     * Renders all visual elements of the game.
     * * This method is automatically called by the Swing framework whenever
     * * the panel needs to be repainted (e.g., on updates or window changes).
     * *
     * * It draws:
     * * - The game board and its contents
     * * - The current and next tetromino pieces (if the game is playing)
     * - The score display
     * - Overlays for menu, pause, and game over screens
     * - Temporary messages (e.g., save confirmation, difficulty mode)
     *
     * @param g the Graphics context used for rendering
     */
    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g); // Clear and prepare the panel for painting

        drawBoard(g); // Draw the game grid with all placed blocks and walls

        // If the game is actively being played, draw the moving pieces
        if (game.getState() == TetrisGame.GameState.PLAYING) {
            drawCurrentPiece(g); // Draw the currently falling tetromino
            drawNextPiece(g); // Show the next upcoming tetromino
        }

        drawScores(g); // Display current and high scores

        // If the game is not in the "playing" state, show an overlay (menu, pause,
        // etc.)
        if (game.getState() != TetrisGame.GameState.PLAYING) {
            drawOverlay(g);
        }

        // Show "Game Saved!" message at the bottom of the screen if recently saved
        if (game.shouldShowSaveMessage()) {
            g.setColor(new Color(0, 0, 0, 180)); // Semi-transparent black background
            g.fillRect(0, getHeight() - 50, getWidth(), 40);
            g.setColor(Color.WHITE);
            g.setFont(new Font("Arial", Font.BOLD, 20));
            String msg = "Game Saved!";
            int x = (getWidth() - g.getFontMetrics().stringWidth(msg)) / 2;
            g.drawString(msg, x, getHeight() - 25);
        }

        // Show difficulty change message (e.g., "Easy Mode") above the save message
        if (game.shouldShowDifficultyMessage()) {
            g.setColor(new Color(0, 0, 0, 180)); // Semi-transparent background
            g.fillRect(0, getHeight() - 90, getWidth(), 40);
            g.setColor(Color.WHITE);
            g.setFont(new Font("Arial", Font.BOLD, 20));
            String msg = game.getDifficultyMessage();
            int x = (getWidth() - g.getFontMetrics().stringWidth(msg)) / 2;
            g.drawString(msg, x, getHeight() - 65);
        }
    }

    private void drawBoard(Graphics g) {
        int[][] grid = game.getBoard().getGrid();
        for (int row = 0; row < GameBoard.getRows(); row++) {
            for (int col = 0; col < GameBoard.getCols(); col++) {
                int val = grid[row][col];
                if (val != 0) {
                    // get color of square we want to draw
                    g.setColor(val == -1 ? Color.DARK_GRAY : getColor(val));
                    // draw it
                    g.fillRect(col * TILESIZE, row * TILESIZE, TILESIZE, TILESIZE);
                    // set to black to make an outline
                    g.setColor(Color.BLACK);
                    // draw the outline
                    g.drawRect(col * TILESIZE, row * TILESIZE, TILESIZE, TILESIZE);
                }
            }
        }
    }

    private void drawCurrentPiece(Graphics g) {
        // get the current piece and its components.
        Tetromino t = game.getCurr();
        int[][] shape = t.getShape();
        int row0 = t.getRow();
        int col0 = t.getCol();
        int id = t.getId();

        g.setColor(getColor(id));
        for (int row = 0; row < shape.length; row++) {
            for (int col = 0; col < shape[0].length; col++) {
                if (shape[row][col] != 0) {
                    int x = (col0 + col) * TILESIZE;
                    int y = (row0 + row) * TILESIZE;
                    g.fillRect(x, y, TILESIZE, TILESIZE);
                    g.setColor(Color.DARK_GRAY);
                    g.drawRect(x, y, TILESIZE, TILESIZE);
                    g.setColor(getColor(id));
                }
            }
        }
    }

    private void drawNextPiece(Graphics g) {
        Tetromino next = game.getNextPiece();
        int[][] shape = next.getShape();
        int id = next.getId();

        int boxSize = TILESIZE;
        int previewX = (GameBoard.getCols() - 4) * TILESIZE + 20;
        int previewY = (GameBoard.getRows() / 2 - 2) * TILESIZE;

        g.setColor(Color.WHITE);
        g.setFont(new Font("Arial", Font.BOLD, 16));
        g.drawString("Next:", previewX, previewY - 10);

        g.setColor(getColor(id));
        for (int row = 0; row < shape.length; row++) {
            for (int col = 0; col < shape[0].length; col++) {
                if (shape[row][col] != 0) {
                    int x = previewX + col * boxSize;
                    int y = previewY + row * boxSize;
                    g.fillRect(x, y, boxSize, boxSize);
                    g.setColor(Color.BLACK);
                    g.drawRect(x, y, boxSize, boxSize);
                    g.setColor(getColor(id));
                }
            }
        }
    }

    private void drawOverlay(Graphics g) {
        g.setColor(new Color(0, 0, 0, 180));
        g.fillRect(0, 0, getWidth(), getHeight());

        g.setFont(new Font("Arial", Font.BOLD, 18));
        FontMetrics smallFont = g.getFontMetrics();
        int y = 60;

        if (game.getState() == TetrisGame.GameState.COUNTDOWN) {
            String[] controlLines = {
                "Controls:",
                "← → ↓ : Move piece",
                "↑ : Rotate piece",
                "Space : Drop instantly",
                "P : Pause/Resume",
                "Z: Undo A Piece in EASY MODE!!!"
            };

            g.setColor(Color.WHITE);
            for (String line : controlLines) {
                int x = (getWidth() - smallFont.stringWidth(line)) / 2;
                g.drawString(line, x, y);
                y += smallFont.getHeight() + 2;
            }

            g.setFont(new Font("Arial", Font.BOLD, 48));
            String countdownMsg = "Starting in " + game.getCountdown() + "...";
            FontMetrics bigFont = g.getFontMetrics();
            int x = (getWidth() - bigFont.stringWidth(countdownMsg)) / 2;
            int centerY = getHeight() / 2;
            g.drawString(countdownMsg, x, centerY);
        } else if (game.getState() == TetrisGame.GameState.VIEWING_SCORES) {
            drawHighScoresOverlay(g);
        } else {
            drawMenuOrPausedOverlay(g);
        }
    }

    private void drawHighScoresOverlay(Graphics g) {
        g.setColor(Color.WHITE);
        g.setFont(new Font("Arial", Font.BOLD, 28));
        String title = "Top 10 High Scores";
        int titleX = (getWidth() - g.getFontMetrics().stringWidth(title)) / 2;
        g.drawString(title, titleX, 80);

        g.setFont(new Font("Arial", Font.PLAIN, 20));
        List<Integer> scores = game.getTopScores();
        int scoreY = 120;
        for (int i = 0; i < scores.size(); i++) {
            String line = (i + 1) + ". " + scores.get(i);
            int x = (getWidth() - g.getFontMetrics().stringWidth(line)) / 2;
            g.drawString(line, x, scoreY);
            scoreY += 28;
        }

        g.setFont(new Font("Arial", Font.ITALIC, 16));
        String hint = "Press ESC to return";
        int hintX = (getWidth() - g.getFontMetrics().stringWidth(hint)) / 2;
        g.drawString(hint, hintX, getHeight() - 40);
    }

    private void drawMenuOrPausedOverlay(Graphics g) {
        g.setColor(Color.WHITE);
        g.setFont(new Font("Arial", Font.BOLD, 36));
        FontMetrics fm = g.getFontMetrics();

        String[] lines = switch (game.getState()) {
            case MENU -> new String[] {
                "WELCOME",
                "\n",
                "Press ENTER to Start",
                "Press H for High Scores",
                "\n",
                "Press L to load saved game",
                "Press S while in game to save",
                "\n",
                "1: Normal Mode",
                "2: Easy Mode"
            };
            case PAUSED -> new String[] {
                "Paused",
                "Press P to Resume",
                "Press ESC to Quit to Menu"
            };
            case GAME_OVER -> new String[] {
                "Game Over",
                "Press R to Restart"
            };
            default -> new String[] {};
        };

        int totalHeight = lines.length * fm.getHeight();
        int startY = (getHeight() - totalHeight) / 2;

        for (String line : lines) {
            int x = (getWidth() - fm.stringWidth(line)) / 2;
            g.drawString(line, x, startY);
            startY += fm.getHeight();
        }
    }

    private void drawScores(Graphics g) {
        g.setFont(new Font("Arial", Font.BOLD, 16));
        g.setColor(Color.WHITE);

        String high = "High Score: " + game.getHighScore();
        String current = "Score: " + game.getCurrentScore();

        g.drawString(high, 10, 20);
        FontMetrics fm = g.getFontMetrics();
        g.drawString(current, getWidth() - fm.stringWidth(current) - 10, 20);
    }

    private Color getColor(int id) {
        return switch (id) {
            case 1 -> Color.CYAN;
            case 2 -> Color.GREEN;
            case 3 -> Color.MAGENTA;
            case 4 -> Color.RED;
            case 5 -> Color.BLUE;
            case 6 -> Color.ORANGE;
            case 7 -> Color.PINK;
            default -> Color.GRAY;
        };
    }
}