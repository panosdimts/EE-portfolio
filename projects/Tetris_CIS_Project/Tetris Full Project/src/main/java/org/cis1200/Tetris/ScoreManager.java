package org.cis1200.Tetris;

import java.util.*;

public class ScoreManager {
    private int currentScore = 0;
    private List<Integer> topScores;

    public ScoreManager() {
        topScores = new ArrayList<>();
    }

    public void resetCurrentScore() {
        currentScore = 0;
    }

    public int getCurrentScore() {
        return currentScore;
    }

    public int getHighScore() {
        return topScores.isEmpty() ? 0 : topScores.get(0);
    }

    public List<Integer> getTopScores() {
        return new ArrayList<>(topScores);
    }

    public void piecePlaced() {
        currentScore += 10;
    }

    public void rowsCleared(int rows) {
        if (rows == 0) {
            return;
        }

        currentScore += 100 * rows;
        if (rows == 4) {
            currentScore += 1000;
        }
    }

    public void saveScoreIfTop() {
        topScores.add(currentScore);
        topScores.sort(Collections.reverseOrder());

        if (topScores.size() > 10) {
            topScores = topScores.subList(0, 10);
        }
    }

    public void setCurrentScore(int score) {
        this.currentScore = score;
    }

    public void setTopScores(List<Integer> scores) {
        this.topScores = new ArrayList<>(scores);
        this.topScores.sort(Collections.reverseOrder());
        if (topScores.size() > 10) {
            this.topScores = topScores.subList(0, 10);
        }
    }
}
