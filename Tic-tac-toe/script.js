let gameover = false;
let gamesCompleted = 0;
let X;
let O;
RESET_IMAGES();
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");
let boxes = [b1, b2, b3, b4, b5, b6, b7, b8, b9];

let A = X.cloneNode(true);
A.symbol = "x";
let B = O.cloneNode(true);
B.symbol = "o";
let C = X.cloneNode(true);
C.symbol = "x";
let D = O.cloneNode(true);
D.symbol = "o";
let E = X.cloneNode(true);
E.symbol = "x";
let F = O.cloneNode(true);
F.symbol = "o";
let G = X.cloneNode(true);
G.symbol = "x";
let H = O.cloneNode(true);
H.symbol = "o";
let I = X.cloneNode(true);
I.symbol = "x";
let symbols = [A, B, C, D, E, F, G, H, I];
let index = 0;

function RESET_IMAGES(){
    X = new Image(80, 80);
    O = new Image(80, 80);
    X.src = "images/x.jpg";
    O.src = "images/o.png";
}

function clickBox(e){
    if(gameover === true){
        return;
    }
    e.appendChild(symbols[index]);
    index++;
    e.defVeryUniqueBooleanVariableThatHasNeverBeenUsedBefore = false;
    e.style.cursor = "default";
    checkWinOrLose();
}

function checkWinOrLose(){
    if(b1.children.length === 1){
        b1.hasATTTBox = true;
    }
    if(b2.children.length === 1){
        b2.hasATTTBox = true;
    }
    if(b3.children.length === 1){
        b3.hasATTTBox = true;
    }
    if(b4.children.length === 1){
        b4.hasATTTBox = true;
    }
    if(b5.children.length === 1){
        b5.hasATTTBox = true;
    }
    if(b6.children.length === 1){
        b6.hasATTTBox = true;
    }
    if(b7.children.length === 1){
        b7.hasATTTBox = true;
    }
    if(b8.children.length === 1){
        b8.hasATTTBox = true;
    }
    if(b9.children.length === 1){
        b9.hasATTTBox = true;
    }

    try{
        if( b1.hasATTTBox &&
            b2.hasATTTBox &&
            b3.hasATTTBox &&
            b1.children[0].symbol === b2.children[0].symbol &&
            b2.children[0].symbol === b3.children[0].symbol &&
            b3.children[0].symbol === b1.children[0].symbol
        ){
            PlayerWon(b1.children[0].symbol);
        }
        if( b4.hasATTTBox &&
            b5.hasATTTBox &&
            b6.hasATTTBox &&
            b4.children[0].symbol === b5.children[0].symbol &&
            b5.children[0].symbol === b6.children[0].symbol &&
            b6.children[0].symbol === b4.children[0].symbol
        ){
            PlayerWon(b4.children[0].symbol);
        }
        if( b7.hasATTTBox &&
            b8.hasATTTBox &&
            b9.hasATTTBox &&
            b7.children[0].symbol === b8.children[0].symbol &&
            b8.children[0].symbol === b9.children[0].symbol &&
            b9.children[0].symbol === b7.children[0].symbol
        ){
            PlayerWon(b7.children[0].symbol);
        }
        if( b1.hasATTTBox &&
            b4.hasATTTBox &&
            b7.hasATTTBox &&
            b1.children[0].symbol === b4.children[0].symbol &&
            b4.children[0].symbol === b7.children[0].symbol &&
            b7.children[0].symbol === b1.children[0].symbol
        ){
            PlayerWon(b7.children[0].symbol);
        }
        if( b2.hasATTTBox &&
            b5.hasATTTBox &&
            b8.hasATTTBox &&
            b2.children[0].symbol === b5.children[0].symbol &&
            b5.children[0].symbol === b8.children[0].symbol &&
            b8.children[0].symbol === b2.children[0].symbol
        ){
            PlayerWon(b2.children[0].symbol);
        }
        if( b3.hasATTTBox &&
            b6.hasATTTBox &&
            b9.hasATTTBox &&
            b3.children[0].symbol === b6.children[0].symbol &&
            b6.children[0].symbol === b9.children[0].symbol &&
            b9.children[0].symbol === b3.children[0].symbol
        ){
            PlayerWon(b3.children[0].symbol);
        }
        if( b1.hasATTTBox &&
            b5.hasATTTBox &&
            b9.hasATTTBox &&
            b1.children[0].symbol === b5.children[0].symbol &&
            b5.children[0].symbol === b9.children[0].symbol &&
            b9.children[0].symbol === b1.children[0].symbol
        ){
            PlayerWon(b9.children[0].symbol);
        }
        if( b3.hasATTTBox &&
            b5.hasATTTBox &&
            b7.hasATTTBox &&
            b3.children[0].symbol === b5.children[0].symbol &&
            b5.children[0].symbol === b7.children[0].symbol &&
            b7.children[0].symbol === b3.children[0].symbol
        ){
            PlayerWon(b7.children[0].symbol);
        }
        if( b1.hasATTTBox &&
            b2.hasATTTBox &&
            b3.hasATTTBox &&
            b4.hasATTTBox &&
            b5.hasATTTBox &&
            b6.hasATTTBox &&
            b7.hasATTTBox &&
            b8.hasATTTBox &&
            b9.hasATTTBox &&
            gameover === false
        ){
            Draw();
        }
    }
    catch(e){
        console.log(e);
    }
}

function PlayerWon(whoWon){
    if(whoWon === "x"){
        alert("X");
    }else if(whoWon === "o"){
        alert("O");
    }
    gameover = true;
}

function Draw(){
    alert("Draw!");
}

boxes.forEach((e) => {
    e.defVeryUniqueBooleanVariableThatHasNeverBeenUsedBefore = true;
    e.addEventListener("click", () => {
        if(e.defVeryUniqueBooleanVariableThatHasNeverBeenUsedBefore){
            clickBox(e);
        }
    });
})

document.getElementById("resetBtn").addEventListener("click", () => {
    symbols[0].remove();
    symbols[1].remove();
    symbols[2].remove();
    symbols[3].remove();
    symbols[4].remove();
    symbols[5].remove();
    symbols[6].remove();
    symbols[7].remove();
    symbols[8].remove();
    b1.defVeryUniqueBooleanVariableThatHasNeverBeenUsedBefore = true;
    b2.defVeryUniqueBooleanVariableThatHasNeverBeenUsedBefore = true;
    b3.defVeryUniqueBooleanVariableThatHasNeverBeenUsedBefore = true;
    b4.defVeryUniqueBooleanVariableThatHasNeverBeenUsedBefore = true;
    b5.defVeryUniqueBooleanVariableThatHasNeverBeenUsedBefore = true;
    b6.defVeryUniqueBooleanVariableThatHasNeverBeenUsedBefore = true;
    b7.defVeryUniqueBooleanVariableThatHasNeverBeenUsedBefore = true;
    b8.defVeryUniqueBooleanVariableThatHasNeverBeenUsedBefore = true;
    b9.defVeryUniqueBooleanVariableThatHasNeverBeenUsedBefore = true;
    index = 0;
    gameover = false;
    gamesCompleted++;
    console.log("Games completed -> " + gamesCompleted);
})