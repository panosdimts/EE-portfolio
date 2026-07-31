package org.cis1200.Tetris;

import javax.swing.*;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

public class Frame implements Runnable {

    /**
     * The Frame class serves as the main entry point for launching the Tetris game.
     *
     * It initializes the game logic (TetrisGame), graphical user interface
     * (GamePanel), and input handling (InputHandler). The class sets up the main
     * application window using JFrame, configures the rendering loop using a Swing
     * Timer to repaint the game at approximately 60 frames per second, and ensures
     * the game state is saved when the window is closed.
     *
     * This class implements Runnable so that it can be run on the Event Dispatch
     * Thread via SwingUtilities.invokeLater, which is the standard way to
     * initialize
     * Swing applications.
     *
     * Usage:
     * Run the main method to start the game.
     */

    @Override
    public void run() {
        JOptionPane.showMessageDialog(
                null,
                "Welcome to Tetris!\n\n" +
                        "This is the single most addicting game of them all\n" +
                        "I spent 4 hours in Easy Mode Reaching 600k score\n" +
                        "My roomate can vouch for that, so enjoy my hell" +
                        "How to play:\n" +
                        "- ← → ↓ : Move piece\n" +
                        "- ↑ : Rotate piece\n" +
                        "- Space : Drop instantly\n" +
                        "- P : Pause/Resume\n" +
                        "- Z : Undo (Easy mode only)\n" +
                        "1 For Normal - 2 For Easy Mode\n\n" +
                        "Have fun!",
                "Instructions",
                JOptionPane.INFORMATION_MESSAGE
        );

        TetrisGame game = new TetrisGame();
        GamePanel panel = new GamePanel(game);
        InputHandler input = new InputHandler(game);

        JFrame frame = new JFrame("Tetris");
        frame.addWindowListener(new WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent e) {
                SaveManager.saveGame(game);
                System.exit(0);
            }
        });

        frame.setResizable(false);
        frame.add(panel);
        frame.pack();
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
        panel.requestFocusInWindow();
        panel.addKeyListener(input);

        Timer repaintTimer = new Timer(16, e -> panel.repaint());
        repaintTimer.start();
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(new Frame());
    }
}
