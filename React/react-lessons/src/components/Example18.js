"use client";

//Example 18: using conditional rendering with components

function LoggedInView(){
  return <h1>Welcome Back! ex18</h1>;
}

function LoggedOutView(){
  return <h1>Please log in ex18.</h1>
}

export default function Greeting({ isLoggedIn}){
  return isLoggedIn ? <LoggedInView/> : <LoggedOutView/>;
}