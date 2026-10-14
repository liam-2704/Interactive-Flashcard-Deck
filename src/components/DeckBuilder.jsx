import { useState } from 'react';
import './DeckBuilder.css';

export default function DeckBuilder({ deck, onAddCard, onRemoveCard, onClearDeck }) {
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!front.trim() || !back.trim()) return; 
    
    onAddCard({ front, back });
    setFront('');
    setBack('');
  };

  return (
    <div className="builder-container">
      <form onSubmit={handleSubmit} className="builder-form">
        <input 
          type="text" 
          placeholder="Question" 
          value={front} 
          onChange={(e) => setFront(e.target.value)} 
          className="input-field"
        />
        <input 
          type="text" 
          placeholder="Answer" 
          value={back} 
          onChange={(e) => setBack(e.target.value)} 
          className="input-field"
        />
        <button type="submit" className="btn btn-add-card">Add Card</button>
      </form>

      <div className="card-list-header">
        <h3>Cards in Deck: {deck.cards.length}</h3>
        <button onClick={onClearDeck} className="btn btn-review">Clear Deck</button>
      </div>
      
      <ul className="card-list">
        {deck.cards.map((card) => (
          <li key={card.id} className="card-list-item">
            <div className="card-content">
              <div className = "card-row">
                <span className = "card-fix">Q:</span> {card.front}
              </div>
              <div className = "card-row">
                <span className = "card-fix">A:</span> {card.back}
              </div>
            </div>
          
            <button 
              onClick={() => onRemoveCard(card.id)} 
              className="btn-remove-card"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}