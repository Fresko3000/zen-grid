// --- CONFIGURAZIONE ---
const gridContainer = document.getElementById('grid-container');

const colorPalette = [
    '#e74c3c', // Rosso
    '#e67e22', // Arancione
    '#f1c40f', // Giallo
    '#2ecc71', // Verde
    '#3498db', // Blu
    '#9b59b6'  // Viola
];

let squares = [];

/**
 * Funzione per scegliere un colore casuale dalla palette
 */
function getRandomColor() {
    return colorPalette[Math.floor(Math.random() * colorPalette.length)];
}

/**
 * Funzione per creare la griglia e colorarla immediatamente
 */
function createAndColorGrid() {
    gridContainer.innerHTML = '';
    squares = [];

    const squareSize = 100;
    const squareBorderSize = 1;
    const totalSquareSize = squareSize + (squareBorderSize * 2);

    const columns = Math.ceil(window.innerWidth / totalSquareSize);
    const rows = Math.ceil(window.innerHeight / totalSquareSize);
    const totalSquares = columns * rows;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');
        square.style.backgroundColor = getRandomColor();
        square.style.opacity = '1';
        
        gridContainer.appendChild(square);
        squares.push(square);
    }
}

/**
 * Anima un singolo quadratino casuale
 */
function animateRandomSquare() {
    if (squares.length === 0) return;

    const randomIndex = Math.floor(Math.random() * squares.length);
    const squareToAnimate = squares[randomIndex];

    squareToAnimate.style.opacity = '0';

    // *** MODIFICA QUI ***
    // Il timeout ora corrisponde alla nuova durata della transizione CSS (1.2s = 1200ms)
    setTimeout(() => {
        squareToAnimate.style.backgroundColor = getRandomColor();
        squareToAnimate.style.opacity = '1';
    }, 1200); 
}

// --- ESECUZIONE ---

createAndColorGrid();

// *** MODIFICA QUI ***
// Rallentiamo il ritmo generale: un nuovo quadrato si animerà ogni 400ms (invece di 100ms)
setInterval(animateRandomSquare, 400);

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(createAndColorGrid, 500);
});