import React from "react";
import { Thought } from "../Thought.js";
import { App } from "../App.js";
// import render and screen here
import { render, screen } from "@testing-library/react";
// import jest-dom here
import "@testing-library/jest-dom";
//test 1
test("Display the Thought component", () => {
  // Pass to Thought component as thought prop
  render(<Thought thought={thought} removeThought={() => {}} />);
  const thought = { text: "learn react testing library" };
  // Add your testing logic here
  screen.debug();
});

//test 2
test("Should have header text Passing Thoughts", () => {
  render(<App />);
  // Test App header text here
  const header = screen.getByText("Passing Thoughts");
  expect(header).toHaveTextContent("Passing Thoughts");
});

test("Should have button enabled", () => {
  render(<Thought thought={{ text: "Hello" }} removeThought={() => {}} />);
  // Test status of button here
  const button = screen.getByRole("button");
  expect(button).toBeEnabled();
});
