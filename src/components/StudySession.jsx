import { useState } from 'react';
import Flashcard from './Flashcard';
import './StudySession.css';

export default function StudySession({ deck }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (!deck || deck.cards.length === 0) return <p>No cards to study!</p>;

  const handleNext = (knewIt) => {
    if (knewIt) setScore(score + 1);
    
    if (currentIndex < deck.cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div className="completion-screen">
        <h2>Session Complete! 🎉</h2>
        <p>You got {score} out of {deck.cards.length} right.</p>
        <button className="btn btn-restart" onClick={() => window.location.reload()}>
          Study Again
        </button>
      </div>
    );
  }

  return (
    <div className="study-container">
      <p className="card-counter">Card {currentIndex + 1} of {deck.cards.length}</p>
      
      <Flashcard card={deck.cards[currentIndex]} />
      
      <div className="button-group">
        <button className="btn btn-review" onClick={() => handleNext(false)}>
          Need Review
        </button>
        <button className="btn btn-got-it" onClick={() => handleNext(true)}>
          Got It
        </button>
      </div>
    </div>
  );
}