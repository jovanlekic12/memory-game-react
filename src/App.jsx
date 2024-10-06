import { useState } from "react";
import data from "./data";
import Card from "./card";
import "./App.css";

function App() {
  const [cards, setCards] = useState(data);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isOver, setIsOver] = useState(false);
  const isGameCompleted = cards.every((card) => card.isClicked);

  function restartHandler() {
    cards.forEach((card) => (card.isClicked = false));
    setIsOver(false);
    if (currentScore > highScore) {
      setHighScore(currentScore);
      setCurrentScore(0);
      return;
    } else {
      setCurrentScore(0);
    }
  }

  function clickHandler(id) {
    const currentCard = cards.find((card) => card.id === id);
    if (currentCard.isClicked) {
      setIsOver(!isOver);
      return;
    }
    const newCards = cards.map((card) => {
      setCurrentScore(currentScore + 1);
      if (card.id === id) {
        return { ...card, isClicked: !card.isClicked };
      } else {
        return card;
      }
    });
    shuffleArray(newCards);
    setCards(newCards);
  }

  function shuffleArray(array) {
    let shuffledArray = array;
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }
  return (
    <>
      <header className="header">RICK AND MORTY MEMORY GAME</header>
      <div className="counter__container">
        <h1 className="current__score">Current score:{currentScore}</h1>
        <h1 className="high__score">High score:{highScore}</h1>
      </div>
      <main className="main__container">
        <ul className="list">
          {cards.map((card) => {
            return (
              cards && (
                <Card {...card} clickHandler={clickHandler} key={card.id} />
              )
            );
          })}
        </ul>
      </main>
      <div className={isOver || isGameCompleted ? "overlay" : "hide overlay"}>
        <div className="modal">
          <h1>Game over!</h1>
          <p>Your score: {currentScore}</p>
          <button onClick={restartHandler}>Play again?</button>
        </div>
      </div>
    </>
  );
}

export default App;
