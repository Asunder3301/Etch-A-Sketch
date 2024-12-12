const container = document.querySelector('.container');
const button = document.querySelector('.button');
const defaultGrid = 16;

function createGrid(n) {
    container.replaceChildren();
    for (i = 0; i < n; i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add("gridRow");
        for (j = 0; j < n; j++) {
            let gridPixel = document.createElement('div');
            gridPixel.classList.add('gridPixel');
            gridPixel.addEventListener('mouseover', event => {mouseover(event)})
            gridRow.appendChild(gridPixel);
        }
        container.appendChild(gridRow);
    }    
}

function mouseover(e) {
    if (e.buttons == 1) {
        e.target.style.backgroundColor = 'white';
        return;
    }
    e.target.style.backgroundColor = 'black';
}

button.addEventListener('click', () => {
    let choice = prompt('Change Grid Size To:');
    let parsed = parseInt(choice, 10);
    if (!isNaN(parsed) && parsed > 0 && parsed <= 100) {
        createGrid(parsed);
    }
})


createGrid(defaultGrid);