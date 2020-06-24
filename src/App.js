import React from "react";

import SearchMovie from "./components/searchMovie";

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <h1>React Movie Search</h1>
        <SearchMovie />
      </header>
    </div>
  );
}

export default App;
