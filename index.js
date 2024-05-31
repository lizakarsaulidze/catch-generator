let submitBtn = document.getElementById("submit-button");
let userInput = document.getElementById("user-input");
let canvas = document.getElementById("canvas");
let reloadButton = document.getElementById("reload-button");
let text = "";

const textGenerator = () => {
    let generateText = "";
    for (let i = 0; i < 3; i++) {
        generateText += String.fromCharCode(randomNumber(65, 90)); 
        generateText += String.fromCharCode(randomNumber(97, 122)); 
        generateText += String.fromCharCode(randomNumber(48, 57)); 
    }
    return generateText;
}

const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

function drawStringOnCanvas(text) {
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const textColor = ["rgb(0, 0, 0)", "rgb(130, 130, 130)"];

    const letterSpace = 150 / text.length;
    for(let i = 0; i < text.length; i++){
        const xInitialSpace = 25;
        ctx.font = "20px Roboto Mono";
        ctx.fillStyle = textColor[randomNumber(0,1)];
        ctx.fillText(
            text[i],
            xInitialSpace + i * letterSpace,
            randomNumber(25,40),100
        );
    }
}

const triggerFunction = () =>{
    userInput.value = "";
    text = textGenerator();
    console.log(text)
    text = [...text].sort(() => Math.random() - 0.5).join("");
    drawStringOnCanvas(text);
}

reloadButton.addEventListener("click",triggerFunction);

window.onload = () => triggerFunction();

submitBtn.addEventListener("click", () =>{

    if(userInput.value === text){
        alert("Succsess")
    }else{
        alert("Inccorect");
        triggerFunction()
    }
})

