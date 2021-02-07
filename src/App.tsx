import React, { useState } from 'react';
import './App.css';
import ComponentHttp from "./componentHttp";
import List from "./components/List";
import TestHook from "./components/TestHook";

function App() {
  const [name, setName] = useState("Moe")
  const changeName = () => {
    setName("Steve")
  }

  return (
      <div className="App">
        <h1>Basic list component</h1>
        <List items={["apple","orange","banana"]}/>
        <h1> Basic Hook useState </h1>
        <TestHook name={name} changeName={changeName}/>
        <br /><br /><br /><br /><br />
        <h2>Http Component</h2>
        <ComponentHttp />
      </div>
  );
}

export default App;
