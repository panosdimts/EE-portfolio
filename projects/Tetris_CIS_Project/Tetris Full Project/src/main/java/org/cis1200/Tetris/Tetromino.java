package org.cis1200.Tetris;

public class Tetromino extends Piece {
    /**
     * The Tetromino class represents a specific type of Piece used in Tetris.
     *
     * It extends the abstract Piece class and adds functionality for:
     * - Constructing a new tetromino from a shape and ID
     * - Copying an existing tetromino (deep copy of shape and position)
     * - Rotating the tetromino 90 degrees clockwise
     *
     * Each Tetromino instance holds its own shape matrix and position,
     * and supports duplication via the copy() method for move and undo operations.
     */

    public Tetromino(int[][] shape, int id) {
        super(shape, id);
    }

    public Tetromino(Tetromino other) {
        super(copyMatrix(other.getShape()), other.getId());
        setPosition(other.getRow(), other.getCol());
    }

    private static int[][] copyMatrix(int[][] matrix) {
        int[][] copy = new int[matrix.length][matrix[0].length];
        for (int i = 0; i < matrix.length; i++) {
            System.arraycopy(matrix[i], 0, copy[i], 0, matrix[i].length);
        }
        return copy;
    }

    @Override
    public void rotate() {
        int rows = getShape().length;
        int cols = getShape()[0].length;
        int[][] rotated = new int[cols][rows];
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                rotated[j][rows - 1 - i] = getShape()[i][j];
            }
        }
        setShape(rotated);
    }
}
