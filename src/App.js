import React, { useState } from "react";
import List from "./List";
import "./App.css";

export const Context = React.createContext([]);

function App() {
  const [heights, setHeights] = useState([]);

  const addHeight = val => {
    setHeights([...heights, val]);
  };

  return (
    <Context.Provider
      value={{
        heights
      }}
    >
      <div className="App">
        <List
          tasks={[...Array(10).keys()].map(val => `Task ${val}`)}
          addHeight={addHeight}
        />
      </div>
    </Context.Provider>
  );
}

export default App;
