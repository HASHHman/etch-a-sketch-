const container = document.querySelector("#container");
const sizeBtn = document.querySelector("#sizeBtn");

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
    div.classList.add("hovered");
})

sizeBtn.addEventListener('click', () => {
    const wantedSize = Number(prompt("Please enter your preferred grid width:", "16"));
    drawGrid(wantedSize);
})

window.addEventListener('load', () => {
    drawGrid();
})