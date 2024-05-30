import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';
import MainBody from './MainBody';
import Counter from './Counter';
import Slider from './slider';

function App() {

  const [visible, setVisible] = useState(true)
  const buttonText = visible ? "HIDE" : "SHOW";

  let flag = false;
  return (
    <div className="App">
      Learning React now
      <MainBody 
      name="Jalal"
      id={671} 
      intern={{
        name: 'Mushtaq',
        location: 'Tamil Nadu'
      }}
      arrayOfIds = {[56, 789, 99]}
      addNumbers = {(firstNum, secondNum) => 
        firstNum + secondNum
      }
      />
      {/* {flag ? <Heading name="Shreya"/> : <Another />} */}
      {/* <Counter startValue = {50}/>
      <Counter startValue = {70}/> */}
      {/* <Another /> */}
      {visible ? <Slider /> : ""}
      <button 
      onClick={() => {setVisible(!visible)}}>{buttonText}</button>
    </div>
  );
}

const Heading = props => {
  return(
<p>
  Hello {props.name}
</p>
  );
}



function Another(){
  return(
    <div>
      Coming from Another Component...
    </div>
  );
}

export default App;
