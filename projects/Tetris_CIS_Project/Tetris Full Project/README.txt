=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=
CIS 1200 Game Project README
PennKey: panosdim
=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=:=

===================
=: Core Concepts :=
===================

- List the four core concepts, the features they implement, and why each feature
  is an appropriate use of the concept. Incorporate the feedback you got after
  submitting your proposal.

  1. File I/O
  Feature: Save and load game state (SaveManager.java)

  Uses Java's BufferedReader and BufferedWriter to persist game state including board, pieces, scores,
  and difficulty. This is an appropriate use because saving and restoring structured data requires systematic
  file reading and writing.

  2. 2D Arrays
  Feature: Game board representation

  The entire game board is implemented using a 2D array where each cell stores a piece ID or wall indicator.
  (-1 represents wall, 0 represents empty space, 1-7 represents each one of the pieces, ids used for coloring)
  It allows for direct, indexed access and manipulation of game elements in a grid structure.

  3.Complex Game Logic and Collections
  Feature: Undo functionality

  Undo functionality uses a stack (Deque) of game snapshots to manage previous board states and pieces.
  This makes appropriate use of Collections, because it requires managing a history of moves
  and restoring previous states efficiently, which is a non-trivial interactive game mechanic.

  Other complex game logic (like collision handling, scoring, countdowns, and difficulty management) was implemented
  without needing Collections, but still involves layered, interactive control across various game states.

  4. Inheritance and Subtyping
  Feature: Use of an abstract superclass (Piece) extended by Tetromino

  The implementation establishes a clear class hierarchy, where shared behavior is defined in the abstract class
  Piece, and specific piece logic is implemented in Tetromino. This supports polymorphism and a clean, extensible
  architecture, adhering to object-oriented principles of code reuse and substitution.

===============================
=: File Structure Screenshot :=
===============================
- Include a screenshot of your project's file structure. This should include
  all of the files in your project, and the folders they are in. You can
  upload this screenshot in your homework submission to gradescope, named 
  "file_structure.png".

=========================
=: Your Implementation :=
=========================

- Provide an overview of each of the classes in your code, and what their
  function is in the overall game.

  1. GamePanel.java: Handles rendering the game grid, scores, overlays, next piece previw, basically the GUI handler of
  my implementation. Is responsible for the showing the text for the main menu, the scores, etc...
  2. InputHandler.java: The class basically explains itself, it is responsible for managing all keyboard input, mapping
  keys to game actions like move, rotate, save, pause etc...
  3. SaveManager.java: Again, the class name spoils the fun! It is basically responsible for the FILE I/O handling of
  my game. It Saves and Loads the game (reads from and writes to an external file called autosave.txt.) In the file I
  keep track of the difficulty of the game chosen (YOU CAN'T USE UNDO IN NORMAL), the top scores, the current and next
  piece for when the player wants to re-load, the board-layout etc...
  4. ScoreManager.java: Now I wonder what this does. It tracks current and top scores, adds scores for pieces placed and
  rows cleared, and saves the score in the topScores list if it's within the top 10.
  5. Piece.java : an Abstract class that defines the shared behavior of all game pieces, such as movement and position
  tracking. It is extended by piece types like Tetromino (basically the Inheritance and Subtyping Requirement)
  6. Tetromino.java: A concrete class representing each falling piece, such as I, O, T and L shapes. Inherits shared
  behavior from the Piece class and implements piece-specific logic like rotation and duplication.
  7. Factory.java: Well, the naming is a bit weird, but basically this generates new tetrominos, either randomly or
  specifically.
  8. Frame.java: Initializes the game GUI with Swing, attaches the GamePanel and InputHandler, handles application
  lifecycle.
  9: GameBoard.java: Maintains the game grid, detects full rows, and handles board clearing and cell updates.
  10: TetrisGame.java: Core game controller. Contains the main logic for piece placement, state transitions, undo
  functionality, and timers. Also responsible for initiating the loading of top scores at game start.

- Were there any significant stumbling blocks while you were implementing your
  game (related to your design, or otherwise)?
  Well, implementing undo was a lot more challenging than I thought. A lot more, jesus. For the longest time I had a
  problem where undo would just make the piece currently falling disappear. It was a NIGHTMARE to debug. And for what?
  The undo functionality is not even part of the original Tetris, I just did it as a "fun" thing and made an entire mode
  just to implement it and not ruin the original design. Having to consistently restore a piece and then the board state
  previously so that if a row was removed upon placing the piece and then undoing would bring that row back was also
  terrible.

  Other than that, I kind of struggled with File I/O, specifically how I would handle the exceptions and how I would
  save the board (since it's all a 2D grid). The writing wasn't even the bad part, the reading was, because I had to
  keep track where the reader was and I lost it sometimes, so I ended up having an entire wall torn off and sometimes
  pieces getting stuck on the wall lol.
  wasn't as hard.

  GamePanel was also a difficult one to implement, since I was relying mostly on the SWING and AWT manuals to find
  commands and make everything work together. The switch / case command was fun to use and definitely helped a lot with
  handling.

  The one class I kept refining and changing the most was TetrisGame, since it handles all of the operations.
  In it, the 2 most difficult things I did was the popup, I figured it out myself and it took some time.
  The other was the states, but since I had worked with states Like Menu and Paused before it


- Evaluate your design. Is there a good separation of functionality? How well is
  private state encapsulated? What would you refactor, if given the chance?

  My design I'd say has a good separation of functionality. The core Game logic is in TetrisGame.java, the UI in
  GamePanel.java, input in InputHandler. The state is well-encapsulated with accessors, the use of the Piece.java
  superclass and the extension by Tetromino.java adds clarity, modularity and supports a rather polymorphic design. If
  refactoring, I guess I would modularize GamePanel into smaller components. I would also have to add the concept of
  levels so that it gets significantly faster and harder as time goes on and the score is increases.

========================
=: External Resources :=
========================

- Cite any external resources (images, tutorials, etc.) that you may have used 
  while implementing your game.

  I didn't really use any outside resources, although I could've. I tried to challenge myself with this project to test
  my knowledge in java. I also wanted to test my ability in handling Game Design. So, I didn't use external resources.
