import {useLocalStorage} from './hooks/useLocalStorage';
import StudySession from './components/StudySession';
import './App.css';
import {useState} from 'react';
import DeckBuilder from './components/DeckBuilder';

const emptyDeck = {
  id: "deck-1",
  title: "STUDY WITH FLASHCARDS",
  cards: [],
}
/*
const defaultDeck = {
  id: "deck-1",
  title: "React Fundamentals",
  cards: [
    { id: "c1", front: "What is JSX?", back: "A syntax extension for JavaScript that looks like HTML." },
    { id: "c2", front: "What is a Hook?", back: "Functions that let you 'hook into' React state and lifecycle features." },
    { id: "c3", front: "Purpose of useEffect?", back: "To perform side effects in function components like data fetching." }
  ]
};
*/
export default function App() {
  const [decks, setDecks] = useLocalStorage('default-decks', [emptyDeck]);
  const [mode, setMode] = useState ('build');

  const addCard = (newCard) => {
    const updatedDecks = [...decks];
    const cardWithId = { id: Date.now().toString(), ...newCard };
    updatedDecks[0].cards.push(cardWithId);
    setDecks(updatedDecks);
  };

  const removeCard = (cardId) => {
    const updatedDecks = [...decks];
    updatedDecks[0].cards = updatedDecks[0].cards.filter(card => card.id !== cardId);
    setDecks(updatedDecks);
  };

  const clearDeck = () => {
    const updateDecks = [...decks];
    updateDecks [0].cards = [];
    setDecks(updateDecks);
  }
 
  return (
    <div className="app-wrapper">
      <h1 className="app-title">{decks[0].title}</h1>
      
      <div className = "build-deck" >
        <button 
          className="btn"
          onClick={() => setMode('build')}
        >
          Build Deck
        </button>
        
        <button 
          className="btn btn-restart" 
          onClick={() => setMode('study')} 
          disabled={decks[0].cards.length === 0}
          style={{ opacity: decks[0].cards.length === 0 ? 0.5 : 1 }}
        >
          Study Mode
        </button>
      </div>

      {mode === 'build' ? (
        <DeckBuilder 
          deck={decks[0]} 
          onAddCard={addCard} 
          onRemoveCard={removeCard} 
          onClearDeck={clearDeck} 
        />
      ) : (
        <StudySession deck={decks[0]} />
      )}
    </div>
  );
}