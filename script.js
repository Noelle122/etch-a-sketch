function createGrid(dimensions=16){
    let container=document.querySelector(".container");
    if(container.childElementCount>1)
        clearGrid(container);
    for(let i=0; i<dimensions; i++){
        let squareContainer=document.createElement("div");
        squareContainer.classList.add("squareContainer");
        container.appendChild(squareContainer);

        for(let j=0; j<dimensions; j++){
            let square=document.createElement("div");
            square.classList.add("square");
            squareContainer.appendChild(square);
            square.addEventListener("mouseenter", function(){
                square.style.backgroundColor="blue";
            });
        }
    }
}

function clearGrid(container){
    while(container.firstChild)
        container.removeChild(container.firstChild);
}

createGrid();
let btnContainer=document.querySelector(".btnContainer");
let btn=document.createElement("button");
btn.textContent="Set Grid";
btnContainer.appendChild(btn);
btn.addEventListener("click", function(){
    let dimensions=prompt("Please enter square grid dimensions");
    while(dimensions>100){
        dimensions=prompt("Please enter dimensions less than 100x100");
    }
    createGrid(dimensions);

});
