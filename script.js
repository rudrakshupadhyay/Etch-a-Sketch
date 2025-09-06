function createbox(number_square){
    workspace.innerHTML = ""; // clear old boxes before creating new ones
    let boxSize = 500/number_square;
    for(let i = 1;i <= number_square*number_square; i++){
        let box = document.createElement("div");
        box.style.width = boxSize + "px";
        box.style.height = boxSize + "px";
        box.style.border = "1px solid gray";
        box.style.boxSizing = "border-box";
        box.classList.add("colour_change");
        workspace.appendChild(box);
    }
}
function hover(){
    let div_element = document.querySelectorAll(".colour_change");
    div_element.forEach(div => {
        div.addEventListener("mouseover",() => {
            let r = Math.floor(Math.random()*255 - 1);
            let g = Math.floor(Math.random()*255 - 1);
            let b = Math.floor(Math.random()*255 - 1);
            div.style.backgroundColor = `rgb(${r},${g},${b})`;
        },{once: true});
    });
}
function input(){
    let number_square = prompt("Enter n in n*n grid maximum value 100");
    if (number_square === null || number_square.trim() === "" || number_square > 100) {
        number_square = Math.floor(Math.random()*100);
    }
    return number_square;
}

let number_square = input();
let heading = document.querySelector(".top");
let content = document.createElement("div");
content.textContent  = `Squares per side: ${number_square}`;
heading.appendChild(content);
let workspace = document.querySelector(".workspace");
createbox(number_square);

let reset = document.querySelector(".setSquare");
reset.addEventListener("click",() => {
    let newNumber = input();
    content.textContent  = `Squares per side: ${newNumber}`;
    createbox(newNumber);
    hover();
});
hover();


