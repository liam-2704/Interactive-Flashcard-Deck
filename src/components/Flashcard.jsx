import { useState, useEffect } from 'react';
import './Flashcard.css';

export default function Flashcard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setIsFlipped(false);
  }, [card]);

  return (
    <div className="card-container" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <h2>{card.front}</h2>
        </div>
        <div className="card-back">
          <p>{card.back}</p>
        </div>
      </div>
    </div>
  );
}