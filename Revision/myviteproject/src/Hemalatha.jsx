import React from "react";
function Hemalatha(Props){
    return(
        <div>
            <h1>Welcome to function userdefine component</h1>
            <h1>Welcome to function userdefine component</h1>
            <h1>Welcome to function userdefine component</h1>
            <h1>Welcome to function userdefine component</h1>
            <h1>Welcome to function userdefine component</h1>
            <h2>Candidate Name: {Props.name}</h2>
            <h2>Candidate Age : {Props.age}</h2>
            <center>
            <table border="3"><tr><th>Subjects</th><th>marks</th></tr>
            {Props.marks.map((item,index)=><tr><td>Subject : {index+1}</td><td>{item}</td></tr>)}
            </table>
            </center>

        </div>
    )
}
export default Hemalatha