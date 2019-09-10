import React from "react";
import List from "./List";
import "./App.css";

function App() {
  return (
    <div className="App">
      <List tasks={[...Array(10).keys()].map(val => `Task ${val}`)} />
    </div>
  );
}

export default App;
