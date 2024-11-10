const container = document.querySelector("#container");
const sizeBtn = document.querySelector("#sizeBtn");

function genRandomRGB() {
    let randomRGB = "";
    for (let i = 0; i < 3; i++) {
        randomRGB = randomRGB + Math.floor(Math.random() * 225);;

        if (i < 2) {
            randomRGB = randomRGB + ", ";
        }
    }

    return "rgb(" + randomRGB + ")";
}

function drawGrid(width = 16) {
    container.innerHTML = "";
    for (let i = 0; i < width ** 2; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        const containerWidth = container.offsetWidth;
        const cellSize = Math.floor(containerWidth / width * 100) / 100;
        cell.style.width = cellSize + "px";
        cell.style.height = cellSize + "px";
        cell.textContent = Math.floor(i / width);
        container.appendChild(cell);
    }
}


container.addEventListener('mouseover', (event) => {

    const div = event.target;
    console.log(genRandomRGB());
    div.style.backgroundColor = genRandomRGB();
})

sizeBtn.addEventListener('click', () => {
    let wantedSize = Number(prompt("Please enter your preferred grid width(Max 50):", "16"));
    while (wantedSize > 50 | wantedSize == null) {
        wantedSize = Number(prompt("Please enter a value less than 50:", "16"))
    }
    drawGrid(wantedSize);
})

window.addEventListener('load', () => {
    drawGrid();
})