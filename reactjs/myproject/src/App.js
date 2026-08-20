
import React from 'react'

function App() {
  var arr=[11,22,33,44,55,66,77,88,99];
  var small=0;
  return (
    <div>
      <h1>Array Demo</h1>
      {arr.map((item)=>item)}
      <br></br>
      {arr.map((item)=><>{item}</>)}
      {arr.map((item)=><><br></br>{item}</>)}
      <ol type='A'>
        {arr.map((v)=><li>{v}</li>)}
      </ol>
    <div style={{display:"none"}}>
      <h1>small number of array</h1>
      {arr.map((v)=><>{ small>v &&<>{small=v}</>}</>)}

    </div>
    <h1>small Number:{small}</h1>


    </div>
    
  )
}
export default App

/*import React from "react";
function App(){
  var arr=[11,22,33,44,55,66,77];
  return(
    <div>
      <h1>Array demo</h1>
      <h2>Array value index:0:{arr[0]}</h2>
      <h2>Array value index:1:{arr[1]}</h2>
      <h2>Array value index:2:{arr[2]}</h2>
      <h2>Array value index:3:{arr[3]}</h2>
      <h2>Array value index:4:{arr[4]}</h2>
      <h2>Array value index:5:{arr[5]}</h2>
      <h2>Array value index:6:{arr[6]}</h2>
          </div>
  )
}
export default App
/*import React from "react";
function App(){
  var avg=45;
  var res="pass";
  return(
    <div>
      <h1>Grade system in nested if</h1>
      <h2>{(res==="pass" && ((avg>=85 && "Outstanding")||
            (avg>=75 && "Excellent")||
            (avg>=65 && "Very good")||
            (avg>=55 && "good")||
            "fair"))||"no grade"
            }</h2>
      
          </div>
  )
}
export default App;
/*import React from 'react'

 function App() { 
  var avg=44;
  
 return (
    <div>
      <h1>Grade system</h1>
      <h2> {(avg>=85 && "Outstanding")||
      (avg>=75 && "Excellent")||
      (avg>=65 && "Very good")||
      (avg>=55 && "Good")||
      ("Fair") }
      </h2>
    </div>
  )
}
export default App;
/*import React from 'react'

 function App() { 
  var n=5;
  return (
    <div>
      <h1>3.if else if statement or else if ladder</h1>
      <h2>{n} is {(n>0 && "+ve")||(n<0 && "-ve")||"zero"}</h2>
    </div>
  )
}
export default App;
/*import React from "react";
function App(){
  var n=2015;
  return(
    <div>
      <h1>Find the given number is leap or not leap</h1>
      <h2>Number:{n}</h2>
      <h2>{(n%4===0 && "Leap") ||"Not leap"} year</h2>
    </div>
  )
}
export default App;
/*import React from "react";
function App(){
  var n=4;
  return(
    <div>
      <h1>Find the given number is even or odd</h1>
      <h2>Number:{n}</h2>
      <h2>{(n%2===0 && "EVEN") ||"ODD"} Number</h2>
    </div>
  )
}
export default App;
/*import React from "react";
function App(){
  var num1=55;
  var num2=99;
  return(
    <div>
      <h1>Greatest among two numbers</h1>
      <h2>Number One:{num1}</h2>
      <h2>Number Two:{num2}</h2>
      <h2>{(num1 > num2 && `${num1} is Greatest`) || `${num2} is Greatest`}</h2>
    </div>
  )
}
export default App;
/*import React from 'react'

 function App() { 
  var mark=35;
  return (
    <div>
      <h1>mark :{mark}</h1>
      <h2>2.If else statement Result:</h2>
      <h2>{(mark>34 && "PASS") ||"FAIL"}</h2>
    </div>
  )
}
export default App

/*import React from 'react'

 function App() {
  var mark=89;
  return (

    <div>
      <h1>mark :{mark}</h1>
      <h2>1.Simple if Statement result:</h2>
      <h2>{mark>34 && "PASS"}</h2>
      <h2>{mark<34 && "FAIL"}</h2>
    </div>
  )
 }
 export default App;*/
/*import './App.css'
import React from 'react'
import myimage from './images/Hemalatha.png'
function App() {
  return (
    <div align='center'>
      <img src={myimage} width="90%" alt="not found"></img>
      
    </div>
  )
}
export default App;

/*var App=()=>{
  var a=10
  var b=20
  var c=30
  return(
    <>
      <h1>Addition of two numbers</h1>
      <h2>A value:{a}</h2>
      <h2>B value:{b}</h2>
      <h2>C value:{c}</h2>
      <h2>total value:{a+b+c}</h2>
    </>
  )
}
export default App;
/*import React from "react";
class App extends React.Component
{
  render()
  {
    return(
      <>
      <h1>Welcome to class components </h1>
      <h2>Welcome to class components</h2>
      <h1>Welcome to class components</h1>
      </>
    )
  }
}
export default App;
/*function App()
{ 
  return(
    <>
    <h1>Welcome to react js</h1>
    <h2>Welcome to reactjs</h2>
    <h3>Welcome to reactjs</h3>
    </>
    
    
  )
}
export default App;
/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
