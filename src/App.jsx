import { useState } from "react";
import data from "./data";
import Card from "./card";
import "./App.css";

function App() {
  const [cards, setCards] = useState(data);

  return (
    <>
      <header className="header">RICK AND MORTY MEMORY GAME</header>
      <main className="main__container">
        <ul className="list">
          {cards.map((card) => {
            return cards && <Card {...card} key={card.id} />;
          })}
        </ul>
      </main>
    </>
  );
}

export default App;
