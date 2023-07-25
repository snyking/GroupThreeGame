import React, { useState } from 'react';
import LibGDXGame from './LibGDXGame';
import './App.css';
import Login from './Login';
import Footer from './Footer';
import TypingBanner from './TypingBanner';


function App() {
  const [showGame, setShowGame] = useState(false);
  const [isLoggingIn,  setIsLoggingIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  const handlePlayGame = () => {
    setShowGame(true);
  };

  const handleLoginClick = () => {
    setIsLoggingIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowGame(false); 
  };

  return (
    <div className="app-container">
      {!showGame && !isLoggingIn && <TypingBanner />}
      <div className="buttons-container">
        {!showGame && (
          <button className="nolog-button" onClick={handlePlayGame}>
            PLAY GAME
          </button>
        )}
        {!showGame && !isLoggingIn && (
          <button className="log-button" onClick={handleLoginClick}>
            LOGIN / REGISTER 
          </button>
        )}
        {!showGame && isLoggingIn && <Login setIsLoggingIn={setIsLoggingIn} />}
        {showGame && <LibGDXGame />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
