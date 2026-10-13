import {useLocalStorage} from './hooks/useLocalStorage';
import StudySession from './components/StudySession';
import './App.css';

const defaultDeck = {
  id: "deck-1",
  title: "React Fundamentals",
  cards: [
    { id: "c1", front: "What is JSX?", back: "A syntax extension for JavaScript that looks like HTML." },
    { id: "c2", front: "What is a Hook?", back: "Functions that let you 'hook into' React state and lifecycle features." },
    { id: "c3", front: "Purpose of useEffect?", back: "To perform side effects in function components like data fetching." }
  ]
};

export default function App() {
  
}