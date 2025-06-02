"use client"

import React from "react";

//Example5 : Event in Class Component

export default class Person extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
        name: "Mg Kyaw Min",
        email: "mkm@gmail.com",
        phoneNo: "09878787817",
      };
      this.onChangePhoneNo = this.onChangePhoneNo.bind(this);
    }

      onChangeEmail(changedEmail) {
        this.setState({email: changedEmail});
      }

      onChangePhoneNo(event) {
        this.setState({phoneNo: event.target.value});
      }

      onClickButton(){
        alert ("Button 1 clicked!");
      }

      onClickButton2(){
        alert("Button 2 cliceked");
      }

     render(){
        return (
          <div>
            <h1>Event in Class Component</h1>
            <input value={this.state.name}
            placeholder="Enter name"
            onChange={(event)=> {
              this.setState ({ name: event.target.value})
            }}/>

            <input 
              value={this.state.email}
              placeholder="Enter Email"
              onChange={(event)  => this.onChangeEmail(event)}  
            />

            <input
              value={this.state.phoneNo}
              placeholder="Enter Phone No."
              onChange={this.onChangePhoneNo}
            />

            <button onClick={this.onClickButton}>Button 1</button>
            <button onClick={() => this.onClickButton2()}>Button2</button>
          </div>
        );
      }
  }

