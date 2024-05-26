import { createGameBoard, changePosition } from "./eventsCard.js";


export let time;
export let timer;

export function createMenu() {
    let menu = document.createElement("div");
    menu.classList.add("menu");
    let h1 = document.createElement("h1");
    h1.classList.add("h1");
    h1.textContent = " ИГРА НАЙДИ ПАРУ";
    let inputTime = document.createElement("input");
    inputRules(inputTime, 30);
    let inputQuantityCard = document.createElement("input");
    inputTime.classList.add("inputTime");
    let inputText0 = document.createElement("input");
    inputText0.classList.add("textInput0");
    inputTime.addEventListener("change", function() {
        document.querySelector('.textInput0').value = this.value; 
    });
    inputQuantityCard.placeholder = "Введите количество пар карт";
    inputQuantityCard.classList.add("inputQuantityCard");
    inputRules(inputQuantityCard, 1, 15);
    let inputText = document.createElement("input");
    inputText.classList.add("textInput");
    inputQuantityCard.addEventListener("change", function() {
        document.querySelector('.textInput').value = this.value; 
    });
    menu.append(h1, inputTime,inputText0, inputQuantityCard, inputText, createButton());
    document.body.append(menu);
}

function inputRules(input, min, max) {
    input.value = min;
    input.addEventListener('input', function() {
        if (parseInt(input.value) < min) {
            input.value = min;
        }
    });
    input.type = "range";
    input.setAttribute("min", min);
    input.setAttribute("max", max);
}



function createButton() {
    let button = document.createElement("button");
    button.classList.add("startGame");
    button.textContent = "Начать игру";
    button.addEventListener("click", function() {
        let card = Number(document.querySelector(".inputQuantityCard").value);
        time = Number(document.querySelector(".inputTime").value);
        document.querySelector(".menu").remove();
        countdown();
        changePosition(card);
        createGameBoard(card);
    });
    return button;
}

function countdown(){
    document.getElementById('timer').innerHTML = time;
    time--;
    if (time < 0){
        clearTimeout(timer);
        alert("Игра окончена, вы не успели(");
        document.querySelector("#gameBoard").innerHTML = '';
        createMenu();
    }
    else {
        timer = setTimeout(countdown, 1000);
    }
}

createMenu();
