import React from "react";
import Hemalatha from "./Hemalatha";
function App()
{
  var mymarks=[90,80,70,60,50]
  return(
  <div>
    <h1><center>Welcome to React Project</center></h1>
    <p align="justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro praesentium, ipsum alias quos velit illo dolore, dolor, quas aliquid iure odit. Esse illum, iure laboriosam illo dolores aliquam magnam distinctio!

    </p>
    <br></br>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus harum fugit facilis dignissimos aut, ratione, rerum expedita neque voluptatum iure dolores est qui, commodi mollitia fugiat sunt id sequi veniam?

    </p><br></br>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, laudantium non accusamus deleniti similique praesentium maxime placeat molestiae earum, autem soluta culpa ratione quo unde sapiente voluptate neque, fuga quisquam.

    </p><br></br>
    <Hemalatha name="Hemalatha" age="21" marks={mymarks}/>
    
  </div>
)
}
export default App