function createGrid(dimensions=16){
    let container=document.querySelector(".container");
    if(container.childElementCount>1)
        clearGrid(container);
    for(let i=0; i<(dimensions*dimensions); i++){
        let square=document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}

function clearGrid(container){
    while(container.firstChild)
        container.removeChild(container.firstChild);
}

let btnContainer=document.querySelector(".btnContainer");
let btn=document.createElement("button");
btn.textContent="Set Grid";
btnContainer.appendChild(btn);
createGrid();
btn.addEventListener("click", function(){
    let dimensions=prompt("Please enter square grid dimensions");
    while(dimensions>100){
        dimensions=prompt("Please enter dimensions less than 100x100");
    }
    createGrid(dimensions);

});
