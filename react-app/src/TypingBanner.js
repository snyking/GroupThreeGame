import React, { useState, useEffect } from 'react';

function TypingBanner() {
  const [text, setText] = useState("");
  const originalText = "WELCOME TO TRIVIAGPT!\nPLAY, SCORE, AND SAVE! 🚀\nLOGIN/REGISTER TO KEEP TRACK\nOF YOUR HIGH SCORES, OR SIMPLY PLAY FOR THE JOY OF IT! 🎮";

  useEffect(() => {
    let index = 0;
    const timerId = setInterval(() => {
      if (index < originalText.length) {
        setText((prevText) => prevText + originalText.charAt(index));
        index++;
      } else {
        clearInterval(timerId);
      }
    }, 50); 

    return () => {
      clearInterval(timerId); 
    };
  }, []);

  return (
      <div className="banner">
        <span>{text}</span>
      </div>
  );
}

export default TypingBanner;
