"use client";

function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}

//Example7: Passing Props in React
export default function Parent() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}
