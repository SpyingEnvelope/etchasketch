let containerSelector = document.querySelector('.etchcontainer');

for (let i = 0; i < 144; i++) {
    let divCreator = document.createElement('div');
    divCreator.classList.add(`white`);
    divCreator.setAttribute('id', `div${i}`);
    divCreator.addEventListener('mousemove', (e) => {
        addBlackClass(e);
    });
    containerSelector.appendChild(divCreator);
}

let clearSelector = document.querySelector('.reset');
let newBoard = document.querySelector('.set');

clearSelector.addEventListener('click', resetBoard);
newBoard.addEventListener('click', newBoardFunction);


function addBlackClass(event) {
    let idSelector = document.querySelector(`#${event.target.id}`);
    event.preventDefault();
    idSelector.setAttribute('class', 'black');
}

function resetBoard(event) {
    let blackSelector = document.querySelectorAll('.black');
    for (i = 0; i < blackSelector.length; i++) {
        blackSelector[i].setAttribute('class', 'white');
    }
}

function newBoardFunction(e) {
    let columns = prompt('How many columns do you want? (Note: Max you can have is 64)');
    if (columns > 64 || columns < 1 || columns == null || columns == undefined || columns == !columns) {
        alert('Please choose a number between 1 and 64');
        newBoardFunction();
        return;
    }
    console.log(columns);
    let rows = prompt('How many rows do you want? (Note: Max you can have is 64)');
    if (rows > 64 || rows == null || rows < 1 || rows == undefined || rows == !rows) {
        alert('Please choose a number between 1 and 64');
        newBoardFunction();
        return;
    }
    let totalGrid = columns * rows;
    let etcDivsSelector = containerSelector.children;
    let etcDivsSelectorArray = Array.from(etcDivsSelector);
    for (let i = 0; i < etcDivsSelectorArray.length; i++) {
        etcDivsSelectorArray[i].parentNode.removeChild(etcDivsSelectorArray[i]);
    }

    containerSelector.style.cssText = `grid-template-columns: repeat(${columns}, 1fr); grid-template-rows: repeat(${rows}, 1fr);`;
    for (let i = 0; i < totalGrid; i++) {
        let divCreator = document.createElement('div');
        divCreator.classList.add(`white`);
        divCreator.setAttribute('id', `div${i}`);
        divCreator.addEventListener('mousemove', (e) => {
            addBlackClass(e);
        });
        containerSelector.appendChild(divCreator);
    }
}