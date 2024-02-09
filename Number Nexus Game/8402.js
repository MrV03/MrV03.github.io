document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('grid-container');
    const scoreValue = document.getElementById('score-value');
    const gameOver = document.getElementById('game-over');
    const restartButton = document.getElementById('restart-button');
    const undoButton = document.getElementById('undo-button');
    const GRID_SIZE = 4;
    let score = 0;
    let grid = [];
    let previousGrid = [];
    let wasGameOver = false; // Track previous game over state

    // Initialize grid
    function initializeGrid() {
        for (let i = 0; i < GRID_SIZE; i++) {
            grid.push(new Array(GRID_SIZE).fill(0));
        }
        addNewTile();
        addNewTile();
        updateGrid();
    }

    // Add a new tile (2 or 4) to a random empty cell
    function addNewTile() {
        const emptyCells = [];
        for (let i = 0; i < GRID_SIZE; i++) {
            for (let j = 0; j < GRID_SIZE; j++) {
                if (grid[i][j] === 0) {
                    emptyCells.push({ row: i, col: j });
                }
            }
        }
        if (emptyCells.length > 0) {
            const { row, col } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            grid[row][col] = Math.random() < 0.9 ? 2 : 4;
        }
    }

    // Update the grid UI
    function updateGrid() {
        gridContainer.innerHTML = '';
        grid.forEach(row => {
            row.forEach(cell => {
                const tile = document.createElement('div');
                tile.classList.add('tile');
                if (cell !== 0) {
                    tile.textContent = cell;
                    tile.style.backgroundColor = getTileColor(cell);
                    tile.style.color = getTileTextColor(cell);
                }
                gridContainer.appendChild(tile);
            });
        });
        scoreValue.textContent = score;
    }

    // Get tile color based on value
    function getTileColor(value) {
        // Define your own color scheme
        // For example:
        switch (value) {
            case 2:
                return '#ccc0b3';
            case 4:
                return '#eee4da';
            // Add more cases for higher values
            default:
                return '#3c3a32';
        }
    }

    // Get tile text color based on value
    function getTileTextColor(value) {
        return value <= 4 ? '#776e65' : '#f9f6f2';
    }

    // Restart the game
    function restartGame() {
        score = 0;
        grid = [];
        previousGrid = [];
        initializeGrid();
        gameOver.classList.add('hidden');
        wasGameOver = false; // Reset previous game over state
        hideButtons();
    }

    // Check if the game is over (no empty cells or possible moves)
    function isGameOver() {
        for (let i = 0; i < GRID_SIZE; i++) {
            for (let j = 0; j < GRID_SIZE; j++) {
                if (grid[i][j] === 0) {
                    return false; // Game is not over if there is an empty cell
                }
                if (j < GRID_SIZE - 1 && grid[i][j] === grid[i][j + 1]) {
                    return false; // Game is not over if there are adjacent cells with the same value
                }
                if (i < GRID_SIZE - 1 && grid[i][j] === grid[i + 1][j]) {
                    return false; // Game is not over if there are adjacent cells with the same value
                }
            }
        }
        return true; // Game is over if there are no empty cells and no adjacent cells with the same value
    }

    // Move tiles in the specified direction
    function moveTiles(direction) {
        // Save the current grid state for undo
        previousGrid = grid.map(row => [...row]);

        let moved = false;

        // Helper function to move tiles
        function moveTile(row, col, newRow, newCol) {
            grid[newRow][newCol] = grid[row][col];
            grid[row][col] = 0;
            moved = true;
        }

        // Helper function to merge tiles
        function mergeTiles(row, col, newRow, newCol) {
            grid[newRow][newCol] *= 2;
            score += grid[newRow][newCol];
            grid[row][col] = 0;
            moved = true;
        }

        // Helper function to slide tiles
        function slideTile(row, col, newRow, newCol) {
            if (grid[newRow][newCol] === 0) {
                moveTile(row, col, newRow, newCol);
                return true;
            }
            return false;
        }

        // Iterate through each cell in the grid based on the direction
        switch (direction) {
            case 'up':
                for (let col = 0; col < GRID_SIZE; col++) {
                    for (let row = 1; row < GRID_SIZE; row++) {
                        if (grid[row][col] !== 0) {
                            let newRow = row;
                            while (newRow > 0 && slideTile(newRow, col, newRow - 1, col)) {
                                newRow--;
                            }
                            if (newRow > 0 && grid[newRow - 1][col] === grid[newRow][col]) {
                                mergeTiles(newRow, col, newRow - 1, col);
                            }
                        }
                    }
                }
                break;
            case 'down':
                for (let col = 0; col < GRID_SIZE; col++) {
                    for (let row = GRID_SIZE - 2; row >= 0; row--) {
                        if (grid[row][col] !== 0) {
                            let newRow = row;
                            while (newRow < GRID_SIZE - 1 && slideTile(newRow, col, newRow + 1, col)) {
                                newRow++;
                            }
                            if (newRow < GRID_SIZE - 1 && grid[newRow + 1][col] === grid[newRow][col]) {
                                mergeTiles(newRow, col, newRow + 1, col);
                            }
                        }
                    }
                }
                break;
            case 'left':
                for (let row = 0; row < GRID_SIZE; row++) {
                    for (let col = 1; col < GRID_SIZE; col++) {
                        if (grid[row][col] !== 0) {
                            let newCol = col;
                            while (newCol > 0 && slideTile(row, newCol, row, newCol - 1)) {
                                newCol--;
                            }
                            if (newCol > 0 && grid[row][newCol - 1] === grid[row][newCol]) {
                                mergeTiles(row, newCol, row, newCol - 1);
                            }
                        }
                    }
                }
                break;
            case 'right':
                for (let row = 0; row < GRID_SIZE; row++) {
                    for (let col = GRID_SIZE - 2; col >= 0; col--) {
                        if (grid[row][col] !== 0) {
                            let newCol = col;
                            while (newCol < GRID_SIZE - 1 && slideTile(row, newCol, row, newCol + 1)) {
                                newCol++;
                            }
                            if (newCol < GRID_SIZE - 1 && grid[row][newCol + 1] === grid[row][newCol]) {
                                mergeTiles(row, newCol, row, newCol + 1);
                            }
                        }
                    }
                }
                break;
        }

        // Update the grid if any tile has moved
        if (moved) {
            addNewTile();
            updateGrid();
            wasGameOver = isGameOver(); // Track current game over state
            if (wasGameOver) {
                gameOver.classList.remove('hidden');
            }
            showButtons();
        }
    }

    // Undo the last move
    function undoMove() {
        grid = previousGrid.map(row => [...row]);
        updateGrid();
        if (wasGameOver) {
            gameOver.classList.add('hidden');
        }
    }

    // Redo the last undone move
    function redoMove() {
        if (!isGameOver()) {
            moveTiles('redo');
        }
    }

    // Show the buttons
    function showButtons() {
        if (wasGameOver) {
            buttons.classList.remove('hidden');
        }
    }

    // Hide the buttons
    function hideButtons() {
        buttons.classList.add('hidden');
    }

    // Initialize the game
    initializeGrid();

    // Handle key press events
    document.addEventListener('keydown', (event) => {
        if (!isGameOver()) {
            switch (event.key) {
                case 'ArrowUp':
                    moveTiles('up');
                    break;
                case 'ArrowDown':
                    moveTiles('down');
                    break;
                case 'ArrowLeft':
                    moveTiles('left');
                    break;
                case 'ArrowRight':
                    moveTiles('right');
                    break;
            }
        }
    });

    // Add event listeners
    restartButton.addEventListener('click', restartGame);
    undoButton.addEventListener('click', undoMove);
    // Add redo button listener here
});
