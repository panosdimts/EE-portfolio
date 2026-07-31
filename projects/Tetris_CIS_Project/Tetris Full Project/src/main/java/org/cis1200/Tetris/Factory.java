package org.cis1200.Tetris;

import java.util.*;

public class Factory {

    /**
     * The Factory class is responsible for generating Tetromino objects (subclasses
     * of Piece)
     * at random. It does not require any inputs or constructors.
     *
     * Each Tetromino type is defined by a separate method, and the method
     * {@code createRandomTetromino()} selects and returns one at random.
     *
     * The selection is based on a randomly generated integer that is used to
     * index into a list of available Tetromino creation methods.
     */

    public static final Random RAND = new Random();

    public static Tetromino createI() {
        return new Tetromino(new int[][] { { 1, 1, 1, 1 } }, 1);
    }

    public static Tetromino createO() {
        return new Tetromino(new int[][] { { 2, 2 }, { 2, 2 } }, 2);
    }

    public static Tetromino createT() {
        return new Tetromino(new int[][] { { 0, 3, 0 }, { 3, 3, 3 } }, 3);
    }

    public static Tetromino createS() {
        return new Tetromino(new int[][] { { 0, 4, 4 }, { 4, 4, 0 } }, 4);
    }

    public static Tetromino createZ() {
        return new Tetromino(new int[][] { { 5, 5, 0 }, { 0, 5, 5 } }, 5);
    }

    public static Tetromino createJ() {
        return new Tetromino(new int[][] { { 6, 0, 0 }, { 6, 6, 6 } }, 6);
    }

    public static Tetromino createL() {
        return new Tetromino(new int[][] { { 0, 0, 7 }, { 7, 7, 7 } }, 7);
    }

    public static Tetromino createRandomTetromino() {
        Tetromino[] pieces = { createI(), createO(), createT(), createS(), createZ(), createJ(),
            createL() };
        return pieces[RAND.nextInt(pieces.length)];
    }
}
