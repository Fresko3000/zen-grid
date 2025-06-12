// Selezioniamo il nostro contenitore dal file HTML
const gridContainer = document.getElementById('grid-container');

// Calcoliamo quanti quadrati servono per riempire lo schermo.
// Prendiamo la larghezza e l'altezza totali e le dividiamo per la dimensione del quadrato (50px + 1px di bordo per lato)
// Math.ceil arrotonda per eccesso per non avere buchi
const columns = Math.ceil(window.innerWidth / 51);
const rows = Math.ceil(window.innerHeight / 51);
const totalSquares = columns * rows;


// Creiamo un ciclo che si ripete per il numero totale di quadrati calcolato
for (let i = 0; i < totalSquares; i++) {
    // 1. Crea un nuovo elemento div
    const square = document.createElement('div');

    // 2. Aggiungi la classe CSS 'grid-item' a questo div
    square.classList.add('grid-item');
    
    // 3. Aggiungi il quadrato appena creato dentro al nostro grid-container
    gridContainer.appendChild(square);
}