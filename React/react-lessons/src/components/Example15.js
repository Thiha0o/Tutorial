"use client";

//Example 15: using the Ternary Operator (?:) in Rendering

export default function Greeting({isLoggedIn}) {
  return isLoggedIn ? <h1>Welcome back! to Ex15</h1> : <h1>Please Log in to Ex15.</h1>
}