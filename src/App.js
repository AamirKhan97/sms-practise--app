import { useState } from 'react';
import Home from './components/content/Home';
import Navbar from './components/navbar/Navbar';
import logo from './logo.svg';
import './App.css';

function App() {

  let [mode, setMode] = useState("light");
  let [clicked, setClicked] = useState(false)

  let changeMode = () => {
    if(mode === "light"){
      setMode("dark")
      setClicked(true)
      document.body.style.backgroundColor = "DimGrey"
      document.body.style.color = "white"
     
    }
    else{
      setMode("light")
      setClicked(false)
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
     
    }
  }

  return (
    <div className="App">
      <Navbar mode={mode} clicked={clicked} changeMode={changeMode}/>
      <Home mode={mode} clicked={clicked}/>

    </div>
  );
}

export default App;
