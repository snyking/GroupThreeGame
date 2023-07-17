import React, { useState } from 'react';
import LibGDXGame from './LibGDXGame';
import './App.css';
import Login from './Login';



function App() {
  const [showGame, setShowGame] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  const handlePlayGame = () => {
    setShowGame(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  


  return (
    <div className="app-container">
      {/* <header className="header">
          <h1 className="title">Welcome to the Game</h1>
        </header> */}
      <main
        className="main-content"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/landing-background5.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {!showGame && (
          <button className="nolog-button" onClick={handlePlayGame}>
            Play Without Login
          </button>
        )}
        {!showGame && !isLoggedIn && (
          <button className="log-button" onClick={handleLogin}>
            Play Logged In
          </button>
        )}
        {!showGame && isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn} />}
        {showGame && <LibGDXGame />}
      </main>
      <footer className="footer">
        <p>&copy; 2023 Your Game Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


