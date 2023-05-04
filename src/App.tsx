import React, { useState } from 'react'
import './App.css';
import { Hello } from './components/Hello';
import { Form } from './components/Form';

function App() {
  const [serverData, setServerData] = React.useState([])

  React.useEffect(()=>{
    fetch('http://52.87.240.75:4000')
    .then(res => res.json())
    .then(data => setServerData(data))
    .catch(err => console.error(err))
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <Hello firstName='Brian 'lastName='Pinney'/>
        <Form />
        {/* @ts-ignore */}
        {serverData && serverData.map(eachDog => <p>{eachDog.name} - {eachDog.age}</p>)}
      </header>
    </div>
  );
}

export default App;
