const container = document.querySelector("#container");
const sizeBtn = document.querySelector("#sizeBtn");

function genRandomRGB(background) {
	let RandomRGBValues = Array.from({ length: 3 }, () =>
		Math.floor(Math.random() * 255)
	);
	let opacity = 0.1;
	if (!!background && background.includes("a")) {
		opacity = Number(background.match(/\d\.\d+/)) + 0.1;
	} else if (!!background) {
		opacity = 1;
	}
	return `rgba(${RandomRGBValues[0]} ${RandomRGBValues[1]} ${RandomRGBValues[2]} / ${opacity})`;
}

function drawGrid(width = 16) {
	container.innerHTML = "";
	for (let i = 0; i < width ** 2; i++) {
		const cell = document.createElement("div");
		cell.classList.add("cell");
		const containerWidth = container.offsetWidth;
		const cellSize = Math.floor((containerWidth / width) * 100) / 100;
		cell.style.width = cellSize + "px";
		cell.style.height = cellSize + "px";
		container.appendChild(cell);
	}
}

container.addEventListener("mouseover", (event) => {
	const div = event.target;
	div.style.background = genRandomRGB(div.style.background);
});

sizeBtn.addEventListener("click", () => {
	let wantedSize = Number(
		prompt("Please enter your preferred grid width(Max 50):", "16")
	);
	while (wantedSize > 50 || wantedSize == null) {
		wantedSize = Number(prompt("Please enter a value less than 50:", "16"));
	}
	drawGrid(wantedSize);
});

window.addEventListener("load", () => {
	drawGrid();
});
