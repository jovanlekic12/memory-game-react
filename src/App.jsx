import { useState } from "react";
import data from "./data";
import Card from "./card";
import "./App.css";

function App() {
  const [cards, setCards] = useState(data);

  function shuffleArray() {
    let shuffledArray = cards;
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
        <h1 className="current__score">Current score:0</h1>
        <h1 className="high__score">High score: 0</h1>
      </div>
      <main className="main__container">
        <ul className="list">
          {cards.map((card) => {
            return (
              cards && (
                <Card {...card} shuffleArray={shuffleArray} key={card.id} />
              )
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default App;
