const container = document.querySelector(".container");

for (let x = 1; x <= 16; x++) {
    for (let y = 1; y <= 16; y++) {
        const div = document.createElement("div");
        div.classList.add("cell");
        div.textContent = y;
        container.appendChild(div);
        const width = div.offsetWidth;
        div.style.height = width + "px";
    }
}

container.addEventListener('mouseover', (event) => {
    const div = event.target;
    div.classList.add("hovered");
})