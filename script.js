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
    if (event.target.className == 'white') {
        idSelector.setAttribute('class', 'grayten');
    }
    else if (event.target.className == 'grayten') {
        idSelector.setAttribute('class', 'graytwenty');
    }
    else if (event.target.className == 'graytwenty') {
        idSelector.setAttribute('class', 'graythirty');
    }
    else if (event.target.className == 'graythirty') {
        idSelector.setAttribute('class', 'grayfourty');
    }
    else if (event.target.className == 'grayfourty') {
        idSelector.setAttribute('class', 'grayfifty');
    }
    else if (event.target.className == 'grayfifty') {
        idSelector.setAttribute('class', 'graysixty');
    }
    else if (event.target.className == 'graysixty') {
        idSelector.setAttribute('class', 'grayseventy');
    }
    else if (event.target.className == 'grayseventy') {
        idSelector.setAttribute('class', 'grayeighty');
    }
    else if (event.target.className == 'grayeighty') {
        idSelector.setAttribute('class', 'black');
    }
}

function resetBoard(event) {
    let blackSelector = document.querySelectorAll('.black, .grayten, .graytwenty, .graythirty, .grayfourty, .grayfifty, .graysixty, .grayseventy, .grayeighty');
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