"use client";

import React from "react";

export default class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "John Doe",
      age: 23,
      email:"thihaoo311@gmail.com",
      date: new Date(),
    };
  }

  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <hr></hr>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <h1>State in Class Components & Exercise 3</h1>

          <div
            style={{
              border: "1px solid gray",
              borderWidth: "1px",
              width: "62.5%",
              height: "80px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "5px",
              marginTop: "10px",
            }}
          >
            <div>
              <label>Name:</label>
              {this.state.name}
            </div>
            <div>
              <label>Age:</label>
              {this.state.age}
            </div>
            <div>
              <label>Email:</label>
              {this.state.email}
            </div>
            <div>
              <label>Date:</label>
              {this.state.date.toString()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
