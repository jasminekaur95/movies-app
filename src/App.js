import React from "react";

// Importing the CSS file
import "./App.css";

// Import the MoviesContainer
import MoviesContainer from "./components/containers/MoviesContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">React Movies App</h1>
      </header>
      <MoviesContainer />
    </div>
  );
}

export default App;
