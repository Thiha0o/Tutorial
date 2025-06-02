// "use client";

// import React, { useState } from "react";

// //Example : State in Functional Component
// export default function Person(){
//   const [name, setName] = useState("Mg Kyaw Min");
//   const [date, setDate] = useState(new Date());
//   return (
//     <div>
//       <h1>State in Functional component</h1>
//       <div>{name}</div>
//       <div>{date.toString()}</div>
//     </div>
//   );
// }

"use client";

import React, { useState} from "react";

export default function Person(){
  const [name, setName] = useState("John Wick and John Trick");
  const [date, setDate] = useState(new Date());

  return (
    <div style={{margin:"20px"}}>
      <h1>State in Functional Component & Exercise 4</h1>
      <div>{name}</div>
      <div>{date.toString()}</div>
    </div>
  )
}