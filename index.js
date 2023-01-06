function findNodeProps(row, col) {
    let values = {
        top: row - 1 < 0 ? null : [row - 1, col],
        left: col - 1 < 0 ? null : [row, col - 1],
        right: col + 1 > 7 ? null : [row, col + 1],
        bottom: row + 1 > 7 ? null : [row + 1, col]
    }
    return values;
}

class Node {
    constructor(a, b) {
        this.value = [a, b];
        let siblings = findNodeProps(a, b);
        this.top = siblings.top;
        this.left = siblings.left;
        this.right = siblings.right;
        this.bottom = siblings.bottom;
    }
}

const GameBoard  = {
    constructor(gridSize) {
        this.arr = [];
        for(let i = 0; i < gridSize; i++) {
            for(let j = 0; j < gridSize; j++) {
                this.arr[i, j] = new Node(i, j);
            }
        }
    }
}