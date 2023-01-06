Now you’re a pro with DFS and BFS. Let’s try using our search algorithms on a real problem.

For this project, you’ll need to use a data structure that’s similar (but not identical) to a binary tree. For a summary of a few different examples, reference this article.

Given that a knight can two steps forward and one step to the side in any direction:
build a function (knightMoves) that shows the shortest route from one square to another 
outputting all squares the knight will stop on along the way.

Sample input:                  
knightMoves([[3,3],[4,3])    

Sample output:
  => You made it in 3 moves!  Here's your path:
    [3,3]
    [4,5]
    [2,4]
    [4,3]

creates a game board and a knight.
Treat all possible moves the knight could make as children in a tree. 
(stay on the board)
Decide which search algorithm is best to use for this case.
Use the chosen search algorithm to find the shortest path between the starting square (or node) and the ending square.