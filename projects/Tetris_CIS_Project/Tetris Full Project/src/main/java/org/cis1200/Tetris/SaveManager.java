package org.cis1200.Tetris;

import java.io.*;
import java.util.*;

public class SaveManager {
    /**
     * The SaveManager class handles saving and loading the game state for Tetris.
     *
     * This utility class provides methods to:
     * - Save the current game state (board, score, difficulty, current/next pieces)
     * to a file
     * - Load the game state back into a TetrisGame instance
     * - Persist and restore high scores
     *
     * The save format is human-readable and stores:
     * - Game state and difficulty
     * - Current score and top scores
     * - Board grid values
     * - Current and next Tetromino shapes and positions
     *
     * This class uses a fixed file ("autosave.txt") for storage and is intended
     * to support features like auto-save, resume, and persistent scoring.
     */
    private static final String SAVE_FILE = "src/main/java/org/cis1200/Tetris/autosave.txt";

    public static void saveGame(TetrisGame game) {
        TetrisGame.GameState st = game.getState();
        if (st != TetrisGame.GameState.PLAYING && st != TetrisGame.GameState.PAUSED) {
            return;
        }

        try (BufferedWriter writer = new BufferedWriter(new FileWriter(SAVE_FILE))) {
            writer.write(st.name());
            writer.newLine();
            writer.write(game.getDifficulty().name());
            writer.newLine();
            writer.write(String.valueOf(game.getCurrentScore()));
            writer.newLine();
            for (int score : game.getTopScores()) {
                writer.write(score + " ");
            }
            writer.newLine();

            int[][] grid = game.getBoard().getGrid();
            for (int[] row : grid) {
                for (int cell : row) {
                    writer.write(cell + " ");
                }
                writer.newLine();
            }

            writeTetromino(writer, game.getCurr());
            writeTetromino(writer, game.getNextPiece());

        } catch (IOException e) {
            System.err.println("Failed to save game: " + e.getMessage());
        }
    }

    public static void loadGame(TetrisGame game) {
        try (BufferedReader reader = new BufferedReader(new FileReader(SAVE_FILE))) {
            TetrisGame.GameState state = TetrisGame.GameState.valueOf(reader.readLine().trim());
            TetrisGame.Difficulty diff = TetrisGame.Difficulty.valueOf(reader.readLine().trim());
            int score = Integer.parseInt(reader.readLine().trim());

            List<Integer> topScores = new ArrayList<>();
            for (String s : reader.readLine().trim().split(" ")) {
                if (!s.isEmpty()) {
                    topScores.add(Integer.parseInt(s));
                }
            }

            int[][] grid = new int[GameBoard.getRows()][GameBoard.getCols()];
            for (int i = 0; i < GameBoard.getRows(); i++) {
                String[] parts = reader.readLine().trim().split(" ");
                for (int j = 0; j < GameBoard.getCols(); j++) {
                    grid[i][j] = Integer.parseInt(parts[j]);
                }
            }
            for (int i = 0; i < GameBoard.getRows(); i++) {
                for (int j = 0; j < GameBoard.getCols(); j++) {
                    game.getBoard().setCell(i, j, grid[i][j]);
                }
            }

            Tetromino curr = readTetromino(reader);
            Tetromino next = readTetromino(reader);

            game.setLoadedState(curr, next, score, topScores);
            game.setDifficulty(diff);
            game.setState(state);

        } catch (IOException | IllegalArgumentException e) {
            System.err.println("Failed to load game: " + e.getMessage());
        }
    }

    private static void writeTetromino(BufferedWriter writer, Tetromino t) throws IOException {
        writer.write(t.getId() + " " + t.getRow() + " " + t.getCol());
        writer.newLine();
        int[][] shape = t.getShape();
        writer.write(shape.length + " " + shape[0].length);
        writer.newLine();
        for (int[] row : shape) {
            for (int val : row) {
                writer.write(val + " ");
            }
            writer.newLine();
        }
    }

    private static Tetromino readTetromino(BufferedReader reader) throws IOException {
        String[] meta = reader.readLine().trim().split(" ");
        int id = Integer.parseInt(meta[0]);
        int row = Integer.parseInt(meta[1]);
        int col = Integer.parseInt(meta[2]);

        String[] dims = reader.readLine().trim().split(" ");
        int h = Integer.parseInt(dims[0]);
        int w = Integer.parseInt(dims[1]);
        int[][] shape = new int[h][w];
        for (int i = 0; i < h; i++) {
            String[] line = reader.readLine().trim().split(" ");
            for (int j = 0; j < w; j++) {
                shape[i][j] = Integer.parseInt(line[j]);
            }
        }

        Tetromino t = new Tetromino(shape, id);
        t.setPosition(row, col);
        return t;
    }

    public static List<Integer> loadTopScoresOnly() {
        try (BufferedReader reader = new BufferedReader(new FileReader(SAVE_FILE))) {
            reader.readLine(); // Skip game state
            reader.readLine(); // Skip difficulty
            reader.readLine(); // Skip current score

            String[] parts = reader.readLine().trim().split(" ");
            List<Integer> scores = new ArrayList<>();
            for (String part : parts) {
                if (!part.isEmpty()) {
                    scores.add(Integer.parseInt(part));
                }
            }
            return scores;
        } catch (IOException | IllegalArgumentException e) {
            System.err.println("Failed to load scores from autosave: " + e.getMessage());
            return new ArrayList<>();
        }
    }
}