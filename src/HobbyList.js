import React from "react";
import "./HobbyList.css";

function HobbyList({hobbies}) {
  
  const list = hobbies.map((hobby, index) => <li key={index}>{hobby}</li>);
  if (list.length > 0) {
    return(
      <body>
        <h4>Hobbies</h4>// You must use this heading for this component
        <ul>{list}</ul>
      </body> 
    ); 
  } else {
    return null;
  }
}

export default HobbyList;
