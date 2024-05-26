import {createIndex, shuffle } from "./shuffleArray.js";
import { createMenu, timer } from "./menu.js";

let firstCard = null;
let secondCard = null;

export function createGameBoard(index) {
  const shuffledCards = shuffle(createIndex(index));
  const gameBoard = document.getElementById('gameBoard');
  shuffledCards.forEach(card => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.textContent = card;
    div.addEventListener('click', () => {
      handleCardClick(div);
    });
    gameBoard.appendChild(div);
  });
}

function winGame() {
  const gameBoard = document.getElementById('gameBoard');
  let cards = gameBoard.querySelectorAll(".card");
  let countCard = gameBoard.childElementCount;
  let count = 0
  for (let i = 0; i < countCard; i++) {
      if (cards[i].style.backgroundColor == "white") {
          count++;
      }
      if (count === countCard) {
          alert("Поздравляем, вы выйграли");
          document.querySelector("#gameBoard").innerHTML = '';
          clearTimeout(timer);
          document.getElementById('timer').innerHTML = '';
          createMenu();
          break;
      }
  }
}

export function changePosition(amount) {
  const element = document.getElementById('gameBoard');
  if (amount  * 2 % 3 == 0 && amount  * 2 < 10) {
    element.style.gridTemplateColumns = 'repeat(3, 0fr)';
  }
  else if (amount * 2 % 4 == 0 && amount  * 2 < 20) {
    element.style.gridTemplateColumns = 'repeat(4, 0fr)';
  }
  else if (amount * 2 % 5 == 0 && amount  * 2 < 30) {
    element.style.gridTemplateColumns = 'repeat(5, 0fr)';
  }
  else if (amount * 2 % 6 == 0) {
    element.style.gridTemplateColumns = 'repeat(6, 0fr)';
  }
  else {
    element.style.gridTemplateColumns = 'repeat(7, 0fr)';
  }
}

function handleCardClick(card) {
  if (!firstCard) {
    firstCard = card;
    card.style.backgroundColor = 'white';
  } else if (!secondCard) {
    secondCard = card;
    card.style.backgroundColor = 'white';
    if (firstCard.textContent === secondCard.textContent) {
      firstCard.removeEventListener('click', handleCardClick);
      secondCard.removeEventListener('click', handleCardClick);
      firstCard = null;
      secondCard = null;
      winGame();
    } else {
      setTimeout(() => {
        firstCard.style.backgroundColor = '#fb0505';
        secondCard.style.backgroundColor = '#fb0505';
        firstCard = null;
        secondCard = null;
      }, 1000);
    }
  }
}