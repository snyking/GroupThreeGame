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



// import React from 'react';
// import LibGDXGame from './LibGDXGame';

// function App() {
//   return (
//     <div>
//       {/* Other components */}
//       <LibGDXGame />
//       {/* Other components */}
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import LibGDXGame from './LibGDXGame';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/game">Play Game</Link>
//               </li>
//             </ul>
//           </nav>
//         </header>

//         <Routes>
//           <Route exact path="/">
//             {/* Your homepage components */}
//           </Route>
//           <Route path="/game" component={LibGDXGame} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
