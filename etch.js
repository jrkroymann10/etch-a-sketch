const container = document.querySelector('.container');
let totalDivs;
let gridDiv = [];

function makeGrid() {
    let numCol = prompt('How may squares would you like in each column and row?');
    container.style.cssText = `grid-template-columns: repeat(${numCol}, 1fr)`;
    totalDivs = numCol * numCol;

    function makeDivs(x) {
        for (let i = 0; i < x; i++) {
            gridDiv[i] = document.createElement('div');
            gridDiv[i].classList.add('gridItem');
            container.appendChild(gridDiv[i]);
        }
    }
    makeDivs(totalDivs);
    return totalDivs;
}
makeGrid();

let red, green, blue;

function changeColor(target) {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    
}

function resetGrid() {
    window.location.reload();
}

resetButton = document.querySelector('.reset');
resetButton.addEventListener("click", resetGrid);

container.addEventListener("mouseover", function (e) {
    changeColor(e.target);
});





