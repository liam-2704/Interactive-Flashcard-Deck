Interactive Flashcard Deck 🧠

- A front-end React application designed for creating and studying custom flashcards. This project was built in the process of praticing React state management, custom hooks, and CSS 3D animations.
<br/>
<br/>
✨ Features

  - Deck Builder Mode: Easily add new cards with custom questions and answers, or remove individual cards you no longer need.

- Study Session Mode: Focus on learning one card at a time with a clean UI and progress tracking.

- 3D Flip Animations: Smooth, realistic card flipping utilizing CSS preserve-3d and backface-visibility.
  
- Local Storage Persistence: All custom cards are saved directly to the browser's localStorage via a custom React hook. You never lose your deck when refreshing or closing the tab.

-  Self-Scoring System: Track your performance with "Need Review" and "Got It" buttons.
<br/>
<br/>



🛠️ Tech Stack

  - Frontend Framework: React (initialized via Vite for rapid development)

  - Styling: CSS (Responsive, with flexbox layouts and CSS transitions)

  - Data Storage: Browser localStorage (No backend database required)
<br/>
<br/>

Follow these instructions to run the project locally on your machine.
<br/>

- Prerequisites

    - Make sure you have Node.js installed on your computer.
<br/>

- Installation

  1. Clone this repository

     
         https://github.com/liam-2704/Interactive-Flashcard-Deck.git

  2. Navigate into the project directory, install the dependencies and run

         cd Interactive-Flashcard-Deck

         npm install

         npm run dev

   3. Click on the port Vite provides you in the terminal
<br/>
<br/>
📖 How to Use


  - Build Your Deck: When the app loads, you will start in Build Mode. Type a question in the "Question" input and the answer in the "Answer" input, then click "Add Card".

  - Manage Cards: Review your list of added cards below the form. Click "Remove" on any specific card to delete it, or click "Clear Deck" to delete all cards.

  - Start Studying: Once you have added your cards, click the Study Mode button at the top.

  - Test Your Knowledge: Click on the flashcard to flip it over and reveal the answer. Click "Got It" if you remembered correctly, or "Need Review" if you didn't. At the end of the deck, you'll see your total score!
