import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//var sname="Hema"
//var marks=[77,88,99,100,67];
//var stud={rno:1001,sname:"Hema",mark:34,result:"fail",iseligible:false};
var stud={
  rno:1001,
  sname:"Hema",
  marks:[99,77,88],
  result:null
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  data={stud}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
