console.log("starting script.js");
const container = document.createElement("div");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "800px";
container.style.height = "800px";

container.style.borderStyle = "solid";
container.style.borderWidth = "5px"

document.body.appendChild(container);

for (let i = 0; i < 64; i++) {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.style.width = "12.5%";
    tile.style.height =  "12.5%";
    // use value of i to determine color - when even, odd black
    // If its the start of a new row (after 8 tiles), we want to add 1 and shift from even => odd or odd => even
    // Tracking rows - Math.floor(i/8) will increment when a new row has started
    if ((i + Math.floor(i / 8)) % 2 === 0) {
        tile.style.background = "red";
    } else {
        tile.style.background = "black";
    }
    container.append(tile);
}

