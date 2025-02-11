const newGrid = document.createElement("button");
newGrid.textContent = "Reset grid"; 
document.body.appendChild(newGrid);
newGrid.classList.add("reset");

newGrid.addEventListener("click", () => {
    let size = prompt("Choose dimensions for your new grid (max 100)");

    size = parseInt(size);

    if (isNaN(size) || size < 1 || size  > 100) {
        alert("Please choose a valid size between 1 and 100!");
        return;
    }

    resetGrid(size);

});

function resetGrid(size) {
    container.innerHTML = "";

    for (let i = 0; i < size * size; i++) {
        const grid = document.createElement("div");
        grid.classList.add("square");
        container.appendChild(grid);
    
        grid.addEventListener("mouseover", () => 
            {grid.style.backgroundColor = "black";}
        );    
    };

    document.querySelectorAll(".square").forEach(square => {
        square.style.width = `${320 / size}px`;
        square.style.height = `${320 / size}px`;
    }) 
    
}

const container = document.getElementById("container");

for (let i = 0; i < 16 * 16; i++) {
    const grid = document.createElement("div");
    grid.classList.add("square");
    container.appendChild(grid);

    grid.addEventListener("mouseover", () => 
        {grid.style.backgroundColor = "black";}
    );    
};

let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

grid.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

