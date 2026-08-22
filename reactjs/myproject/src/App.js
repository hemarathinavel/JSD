import React from 'react'

function App() {
  let dis=()=>{
    var tags=document.getElementsByTagName("input")
    var size=tags.length;
    document.getElementById("r1").innerHTML="count of textbox:"+size;
    var sum=0;
    for( var i=0;i<size;i++)
    {
      sum=sum+parseInt(tags[i].value);
    }
    document.getElementById("res").innerHTML=sum+"is total";
  }
  
  /*var a=parseInt(document.getElementById("t1").value);
    var b=parseInt(document.getElementById("t2").value);
    var c=parseInt(document.getElementById("t3").value);
    var d=parseInt(document.getElementById("t4").value);
    var e=parseInt(document.getElementById("t5").value);
    var f=parseInt(document.getElementById("t6").value);
    var g=a+b+c+d+e+f
    document.getElementById("res").innerHTML="Total:"+g;*/
return (
    <div>
      <input type='text' id='t1' placeholder='Enter number 1'></input><br></br>
      <input type='text' id='t2' placeholder='Enter number 2'></input><br></br>
      <input type='text' id='t3' placeholder='Enter number 3'></input><br></br>
      <input type='text' id='t4' placeholder='Enter number 4'></input><br></br>
      <input type='text' id='t5' placeholder='Enter number 5'></input><br></br>
      <input type='text' id='t6' placeholder='Enter number 6'></input><br></br>
      <button onClick={dis}>find total</button>
      <div id='r1'></div>
      <div id="res"></div>

    </div>
  )
}
export default App





































































/*import React from 'react'

 function App() {
  const dis=(Event)=>{
    document.getElementById("res").innerHTML="You are working currently:"+Event.target.type;
  }
  return (
    <div>
      <input type='text' onChange={dis}></input> <br></br>
      <input type='number' onChange={dis}></input> <br></br>
      <input type='password' onChange={dis}></input> <br></br>
      <input type='radio' name='g' onChange={dis}></input> Male
      <input type='radio'name='g'  onChange={dis}></input> Female <br></br>
      <input type='checkbox' onChange={dis}></input>C
      <input type='checkbox' onChange={dis}></input>C++
      <input type='checkbox' onChange={dis}></input>JAVA <br></br>
      <div id="res"></div>
      </div>
  )
}
export default App
/*import React from 'react'

 function App() {
  const dis=(Event)=>{
    document.getElementById("res").innerHTML=Event.target.id+"......typing"

  }
  return (
    <div>
    <input type="text" onChange={dis} id="textbox 1" placeholder='Textbox 1'></input>
    <br></br>  
    <input type="text" onChange={dis} id="textbox 2" placeholder='Textbox 2'></input>
    <br></br>
    <input type="text" onChange={dis} id="textbox 3" placeholder='Textbox 3'></input>
    <br></br>
    <input type="text" onChange={dis} id="textbox 4" placeholder='Textbox 4'></input>
    <br></br>
    <input type="text" onChange={dis} id="textbox 5" placeholder='Textbox 5'></input>
    <br></br>
    <div id="res"></div>
    </div>
  )
}
export default App
/*import React from "react";
function App()
{
  const dis=()=>{
    var a=parseInt(document.getElementById("t1").value);
    var b=parseInt(document.getElementById("t2").value);
    var c=a+b;
    document.getElementById("res").innerHTML="Total:"+c;
  }
  return(
    <div>
      <input type="text" id="t1" placeholder="enter no 1"></input>
      <input type="text" id="t2" placeholder="enter no 2"></input>
      <br></br>
      <input type="button" onClick={dis} value="find total"></input>
      <div id="res"></div>
    </div>      
  )
}

export default App
/*import React from "react";
function App()
{
  const dis1=()=>{
    document.getElementById("res").innerHTML="Cursor Outside textbox";
    document.getElementById("t1").style.backgroundColor="pink";

  }
  const dis2=()=>{
    document.getElementById("res").innerHTML="Cursor Inside textbox";
    document.getElementById("t1").style.backgroundColor="purple";
  }
  return(
    <div>
      <input type="text" id="t1" onBlur={dis1} onFocus={dis2} placeholder="Enter your text"></input>
      <div id="res"></div>
    </div>
  )
}
export default App
/*import React from "react";
function App()
{
  const dis=(Event)=>{
    var data=Event.target.value;
    document.getElementById("res").innerHTML=data+"..... typing"
  }
  return(
    <div>
      <h1>React Events</h1>
      <input type="text" onChange={dis} placeholder="enter text"></input>
      <br></br>
      <div id="res"></div>
    </div>
  )
  
  
}
export default App*/
/*import React from 'react'
function App() {
  return (
    <form>
      <h1>React forms:</h1>
      <input type="text" id="t1" placeholder='Enter Mark:1'></input>
      <br></br>
      <input type="text" id="t2" placeholder='Enter Mark:2'></input>
      <br></br>
      <input type="text" id="t3" placeholder='Enter Mark:3'></input>
      <br></br>
      <input type="text" id="t4" placeholder='Enter Mark:4'></input>
      <br></br>
      <input type="text" id="t5" placeholder='Enter Mark:5'></input>
      <br></br>
      <input type="password" id="pw" placeholder='Enter Password'></input>
      <br></br>
      <input type="number" id="nm" placeholder='Enter number'></input>
      <br></br>
      <label>Select Gender:</label>
      <input type="radio" id="g1" name="gen"></input>Male
      <input type="radio" id="g2" name="gen"></input>Female
      <input type="radio" id="g3" name="gen"></input>others
      <br></br>
      <label>Select Courses:</label>
      <input type="checkbox" id="c1" ></input>C
      <input type="checkbox" id="c2" ></input>C++
      <input type="checkbox" id="c3" ></input>JAVA
      <input type="checkbox" id="c4" ></input>None of these above
      <br></br>
      <label>Select color</label>
      <input  type="color" id="col"></input>
      <br></br>
      <label>Select Date:</label>
      <input  type="date" id="dat"></input>
      <br></br>
      <label>Select Time:</label>
      <input  type="time" id="ti"></input>
      <br></br>
      <label>Upload Photo:</label>
      <input  type="file" id="fi"></input>
      <br></br>
      <input type="button" value="click me"></input>
      <input type="submit" value="submit button"></input>
      <input type="reset" value="clear"></input>
      <button>clickme</button>
</form>
  )
}
export default App
/*import React from "react";
function App(props)
{
  var arr=[];
  for(var k in props.data)
  {
    arr.push(k);
  }
  return(
    <div>
      <h1>json with array handling and also check null</h1>
      <h2>Roll number:{props.data.rno}</h2>
      <h2>Name:{props.data.sname}</h2>
      <h2>mark 1:{props.data.marks[0]}</h2>
      <h2>mark 2:{props.data.marks[1]}</h2>
      <h2>mark 3:{props.data.marks[2]}</h2>
      <h3>Result:{(props.data.marks[0]>34 && props.data.marks[1]>34 && props.data.marks[2]>34)? props.data.result="PASS":props.data.result="FAIL"}</h3>
    <h1>===================================================================================================</h1>
    {arr.map((item)=><><br></br>{item}---&gt; {props.data[item]}</>)}
    <h1>===================================================================</h1>
  {arr.map((i,index)=><><br></br>{i}--- &gt; {(i==="marks" && props.data[i].map((i,index)=><><br></br>marks:{index+1}---&gt;{i}</>))||(props.data[i])}</>)}  
  </div>
  )
}
export default App
/*import React from "react";
function App(props){
  var arr=[];
  for(var k in props.data)
    {
      arr.push(k);
    }
  
  return(
    <div>
      <h1>Props using Json data</h1>
      <h2>student number:{props.data.rno}</h2>
      <h2>student name:{props.data.sname}</h2>
      <h2>student mark:{props.data.mark}</h2>
      <h2>student result:{props.data.mark>=35?"pass":"fail"}</h2>
      <h2>student eligible:{props.data.iseligible?"eligible":"not eligible"}</h2>
      <br></br>
      <h2>==============================================================================</h2>
      {arr.map((v)=><h2>{v}---&gt; {props.data[v]}</h2>)}
      <h2>==========================================================================================</h2>
  
    {arr.map((v)=><h2>{v}---&gt;{(props.data[v]===true && "Eligible")||(props.data[v]===false && "Not Eligible")||props.data[v]}</h2>)}
    </div>
  )
}
export default App




/*import React from "react";
function App(props){
  return(
    <div>
      <h1>Props  using array</h1>
      <h2>Test marks:{props.data[0]}</h2>
      <br></br>
      {props.data.map((item,index)=><><br></br>mark:{index+1}={item}</>)}
    </div>
  )
}
export default App
/*import React from "react";
function App(props){
  return(
    <div>
      <h1>props:properties</h1>
      <h2>share data from one component to another component</h2>
      <h2>Your Name:{props.data}</h2>
    </div>
  )
}
export default App

/*import React from  'react'
function App(){
    var stud={
      sno:1001,
      sname:'Hema',
      marks:{
        tamil:99,
        english:99,
        maths:99,
        science:99,
        social:99,
      },
      rank:2,
      result:"pass"
    }
    return(
      <div>
      <h1>JSON</h1>
      <h2>student number:{stud.sno}</h2>
      <h2>student  name:{stud.sname}</h2>
      <h2>student tamil mark:{stud.marks["tamil"]}</h2>
      <h2>student english mark:{stud.marks["english"]}</h2>
      <h2>student maths mark:{stud.marks["maths"]}</h2>
      <h2>student science mark:{stud.marks["science"]}</h2>
      <h2>student social mark:{stud.marks["social"]}</h2>
      <h2>student  rank:{stud.rank}</h2>
      <h2>student  result:{stud.result}</h2>
      </div>


      
    
    )
}
export default App
/*import  React from 'react'
function App(){
  var stud={
    sno:1001,
    sname:'Hemalatha',
    mark:96,
    rank:2,
    result:"pass"
  }
  return(
    <div>
      <h1>JSON</h1>
      <h2>student number:{stud.sno}</h2>
      <h2>student name:{stud.sname}</h2>
      <h2>student mark:{stud.mark}</h2>
      <h2>student rank:{stud.rank}</h2>
      <h2>student result:{stud.result}</h2>


    </div>
  )
}
export default App

/*import React from 'react'

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
