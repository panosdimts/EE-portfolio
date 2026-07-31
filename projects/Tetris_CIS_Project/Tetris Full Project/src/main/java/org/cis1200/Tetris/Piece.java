package org.cis1200.Tetris;

public abstract class Piece {
    /**
     * The Piece class defines the common structure and behavior of Tetris pieces
     * (Tetrominoes).
     *
     * Each piece has:
     * - A 2D shape array representing its blocks
     * - A position (row and column) on the game board
     * - An integer ID for color/identity purposes
     *
     * This abstract class provides methods to get/set shape and position, move the
     * piece,
     * and defines an abstract rotate() method to be implemented by concrete
     * subclasses.
     *
     * It serves as the superclass for all specific Tetromino types in the game.
     */
    private int[][] shape;
    private int row, col;
    private int id;

    public Piece(int[][] shape, int id) {
        this.shape = shape;
        this.id = id;
        this.row = 0;
        this.col = GameBoard.getCols() / 2 - shape[0].length / 2;
    }

    public int[][] getShape() {
        return shape;
    }

    public void setShape(int[][] shape) {
        this.shape = shape;
    }

    public int getId() {
        return id;
    }

    public int getRow() {
        return row;
    }

    public int getCol() {
        return col;
    }

    public void setPosition(int row, int col) {
        this.row = row;
        this.col = col;
    }

    public void move(int drow, int dcol) {
        this.row += drow;
        this.col += dcol;
    }

    public abstract void rotate();
}
