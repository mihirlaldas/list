import React, { useState } from 'react';
import List from '../../list/src/components/List';
import TestHook from '../../list/src/components/TestHook';
import './App.css';

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
    </div>
  );
}

export default App;
