import React from 'react';
import './LibGDXGame.css';

function LibGDXGame() {
    return (
      <div className="frame-container">
        <iframe width="100%" height="100%" src="/game.html" title="Game" />
      </div>
    );
  };

export default LibGDXGame;