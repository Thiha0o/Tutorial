"use client";

// Example20: Rendering a simple list
export default function SimpleList() {
  const fruits = ["Apple", "Banana", "Orange", "Mango"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>

    // <ul>
    //   {fruits.map((fruit,index) => {
    //     return <li key={index}>{fruit}</li>;
    //   })}
    // </ul>
  );
}
