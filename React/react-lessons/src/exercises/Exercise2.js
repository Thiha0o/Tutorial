"use client";

import React from "react";

export default function Person() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <h1 style={{ borderBottomStyle: "solid", padding: "3px" }}>
          I am Functional Component
        </h1>
      </div>
      <p style={{ fontSize: "39px" }}>|</p>
      <div>
        <h1 style={{ borderBottomStyle: "solid", padding: "3px" }}>
          And Exercise 2
        </h1>
      </div>
    </div>
  );
}
