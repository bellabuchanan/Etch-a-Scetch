const container = document.getElementById('container');

// adapted from https://github.com/pablov-1995/etch-a-sketch/blob/master/main.js
function createGrid(dim, color='black') {
  
    const gridStyle = `grid-template-columns: repeat(${dim}, 1fr); grid-template-rows: repeat(${dim}, 1fr);`;
    container.setAttribute('style', gridStyle);
    
    const range_dim = Array(dim**2).fill(1);
    
    for (i of range_dim) {
      
      // Create tile
      const tile = document.createElement('div');
      
      // Add to the tile the class "grid-child"
      tile.classList.add('grid-child');
  
      // Add to the tile the class corresponding to its color
      tile.classList.add(color);
  
      // Add to the tile the event: every time the mouse goes over the tile, its color will change (in this case, to black)
      tile.addEventListener('mouseover', addColor);
  
      // Append the tile to the grid
      container.appendChild(tile);
    }
  }
  
function addColor() {
   return  "#"+((1<<24)*Math.random()|0).toString(16);
}

function color(){
    const cells=Array.from(document.querySelectorAll(".grid-child"));
    cells.forEach(g => g.addEventListener("mouseover",function(e){
        console.log("hi");
        e.target.style.background=addColor();
    }));
}

function resetGrid(){
    const cells=Array.from(document.querySelectorAll(".grid-child"));
    cells.forEach(function(e){
        console.log("hello")
        e.style.removeProperty('background')
    })
}

document.getElementById('reset').addEventListener('click', resetGrid);

function myPrompt(){
    let dim = window.prompt("How many pixels should your square grid be?");
    createGrid(dim);
    color();
}

myPrompt();
