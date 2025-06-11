"use client";

//Example 15: using the Ternary Operator (?:) in Rendering

export default function Greeting({isLoggedIn}) {
  if (isLoggedIn) return <h1>Welcome Back! from Ex14</h1>;
  if (!isLoggedIn) return <h1>Please Log in to Ex14.</h1>;
}