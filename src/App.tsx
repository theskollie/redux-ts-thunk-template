import React from "react";
import "./App.css";
import GetDogImages from "./components/GetDogImages";

function App() {
  return (
    <div className="container">
      <h2>Dog API</h2>
      <GetDogImages />
    </div>
  );
}

export default App;
