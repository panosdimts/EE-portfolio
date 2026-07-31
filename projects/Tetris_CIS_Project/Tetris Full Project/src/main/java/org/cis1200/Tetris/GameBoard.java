package org.cis1200.Tetris;

public class GameBoard {
    /**
     * The GameBoard class represents the Tetris game board as a 2D grid.
     *
     * It manages board initialization, cell states, wall padding, and row clearing.
     * The grid is 20 rows by 18 columns, with 4 columns of invisible "walls" on
     * each side
     * for collision and boundary handling.
     *
     * Core functionality includes:
     * - Initializing and clearing the board
     * - Checking bounds and cell states
     * - Detecting and clearing full rows
     * - Updating individual cell values
     */

    private static final int ROWS = 20;
    private static final int COLS = 18;
    private static final int WALL_THICKNESS = 4;
    private int[][] grid;

    public GameBoard() {
        grid = new int[ROWS][COLS];
        clearBoard();
    }

    public void clearBoard() {
        // iterate through the grid and clear the non-walls.
        for (int i = 0; i < ROWS; i++) {
            for (int j = 0; j < COLS; j++) {
                // If the column is a wall, set the cell to -1 (wall); otherwise, set it to 0
                // (empty)
                grid[i][j] = isWallColumn(j) ? -1 : 0;
            }
        }
    }

    // check if the piece is within bounds.
    public boolean inBounds(int row, int col) {
        return row >= 0 && row < ROWS && col >= 0 && col < COLS;
    }

    // checks to see if a cell block is empty
    public boolean isEmpty(int row, int col) {
        return inBounds(row, col) && grid[row][col] == 0;
    }

    // checks to see if a whole row is full of pieces (values in that row != 0)
    public boolean isFullRow(int row) {
        for (int col = 0; col < COLS; col++) {
            if (grid[row][col] == 0) {
                return false;
            }
        }
        return true;
    }

    /**
     * Clears a full row by shifting all rows above it down by one,
     * then resets the top row to empty (with walls intact).
     *
     * @param row the index of the row to clear
     */
    public void clearRow(int row) {
        for (int i = row; i > 0; i--) {
            for (int j = 0; j < COLS; j++) {
                grid[i][j] = isWallColumn(j) ? -1 : grid[i - 1][j];
            }
        }
        for (int j = 0; j < COLS; j++) {
            grid[0][j] = isWallColumn(j) ? -1 : 0;
        }
    }

    /**
     * Checks all rows on the board and clears any that are completely filled.
     * Each cleared row causes rows above it to shift down.
     *
     * @return the number of rows that were cleared
     *
     *         Needed for scorekeeping
     */
    public int clearFullRows() {
        int cleared = 0;
        for (int i = 0; i < ROWS; i++) {
            if (isFullRow(i)) {
                clearRow(i);
                cleared++;
            }
        }
        return cleared;
    }

    /**
     * Sets the value of a specific cell on the board, if the coordinates are valid.
     *
     * @param row   the row index
     * @param col   the column index
     * @param value the value to assign to the cell
     */
    public void setCell(int row, int col, int value) {
        if (inBounds(row, col)) {
            grid[row][col] = value;
        }
    }

    public int[][] getGrid() {
        return grid;
    }

    public static int getRows() {
        return ROWS;
    }

    public static int getCols() {
        return COLS;
    }

    private boolean isWallColumn(int col) {
        return col < WALL_THICKNESS || col >= COLS - WALL_THICKNESS;
    }
}
