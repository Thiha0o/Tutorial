"use client";

// Example 17: Using switch Statements in Rendering

export default function StatusMessage({ status}){
  switch (status) {
    case "success":
      return <h1>Operation Successful!</h1>;
    case "error":
      return <h1>Something went wrong</h1>;
    
    default:
      return <h1>Waiting for action... in Example 17</h1>
  }
}