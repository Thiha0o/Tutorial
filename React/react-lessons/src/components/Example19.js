"use client";

//Example 19: Short-circuiting with || (Fallback Rendering)
export default function Username({ name }) {

  return (
    //If name is null or undefined, "Guset" will be displayed.
    <p>Hello, {name || "Guest from ex19"}!</p>
  );
}