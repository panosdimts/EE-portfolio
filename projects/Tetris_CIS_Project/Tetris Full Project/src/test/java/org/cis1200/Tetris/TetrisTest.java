package org.cis1200.Tetris;

import org.junit.jupiter.api.*;
import java.awt.*;
import static org.junit.jupiter.api.Assertions.*;

public class TetrisTest {
    @Test
    public void testGameBoardClearFullRows() {
        GameBoard gb = new GameBoard();
        int row = 5;

        for (int col = 0; col < GameBoard.getCols(); col++) {
            if (gb.isEmpty(row, col)) {
                gb.setCell(row, col, 7);
            }
        }
        assertTrue(gb.isFullRow(row), "Row should now be full");

        int cleared = gb.clearFullRows();
        assertEquals(1, cleared, "clearFullRows should report exactly one cleared row");
        assertFalse(gb.isFullRow(row), "After clearing, row should not be full");
    }

    @Test
    public void testScoreManagerPieceAndRowsCleared() {
        ScoreManager sm = new ScoreManager();
        assertEquals(0, sm.getCurrentScore(), "New ScoreManager should start at 0");

        sm.piecePlaced();
        assertEquals(10, sm.getCurrentScore(), "After placing one piece, score +=10");

        sm.rowsCleared(2);
        assertEquals(
                10 + 200,
                sm.getCurrentScore(),
                "Clearing 2 rows should add 2×100"
        );

        sm.rowsCleared(4);
        assertEquals(
                10 + 200 + 400 + 1000,
                sm.getCurrentScore(),
                "Clearing 4 rows should add 4×100 + 1000 bonus"
        );
    }

    @Test
    public void testTetrominoRotate() {

        int[][] shape = {
            { 1, 2 },
            { 3, 4 }
        };
        Tetromino t = new Tetromino(shape, /* id= */42);

        t.rotate();
        int[][] rotated = t.getShape();

        assertArrayEquals(new int[] { 3, 1 }, rotated[0], "First row after rotation");
        assertArrayEquals(new int[] { 4, 2 }, rotated[1], "Second row after rotation");
    }

    @Test
    public void testFactoryCreatesValidTetromino() {
        Tetromino t = Factory.createRandomTetromino();

        assertNotNull(t, "Factory should return a Tetromino object");
        int[][] shape = t.getShape();
        assertNotNull(shape, "Tetromino should have a shape");
        assertTrue(shape.length > 0 && shape[0].length > 0, "Shape must be non-empty");

        assertTrue(t.getId() >= 1 && t.getId() <= 7, "Tetromino ID should be between 1 and 7");
    }
}
