//ex1
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const GreetingForm = () => {
  return (
    <form>
      <label htmlFor="greeting">Greeting:</label>
      <input type="text" id="greeting" />
      <input type="submit" value="Submit" />
    </form>
  );
};

test("should show text content as Hey Mack!", () => {
  // Render the component to test
  render(<GreetingForm />);
  // Extract the textbox component
  const textbox = screen.getByRole("textbox");
  // Simulate typing 'Hey Mack!'
  userEvent.type(textbox, "Hey Mack!");
  // Assert textbox has text content 'Hey Mack!'
  expect(textbox).toHaveValue("Hey Mack!");
});
//ex2
import React from "react";
import { Thought } from "../Thought.js";
import { AddThoughtForm } from "../AddThoughtForm.js";
import { App } from "../App.js";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "regenerator-runtime/runtime";
// import userEvent here
import userEvent from "@testing-library/user-event";
test("Clicking the x button should remove a thought", async () => {
  render(<App />);

  // Since there are multiple '×' buttons, we are using the .getAllByText() method which returns an array. We are then extracting the first button from the array which belongs to the Thought with text 'This is a place for your passing thoughts.'
  const button = screen.getAllByText("×")[0];

  // TODO: Mimic clicking on the button
  userEvent.click(button);

  // We grab the thought again. It should be null after we clicked the '×' button using userEvent.
  const removedThought = screen.queryByText(
    "This is a place for your passing thoughts."
  );
  expect(removedThought).toBeNull();
});

test("Should add a new thought", () => {
  render(<App />);
  // Grab the text box and the submit button.
  const input = screen.getByRole("textbox");
  const submit = screen.getByText("Add");

  // TODO: Add testing logic to simulate user interactions here
  userEvent.type(input, "Did I forget my keys?");
  userEvent.click(submit);
  // Assert that the thought appears
  const thought = screen.getByText("Did I forget my keys?");
  expect(thought).toBeInTheDocument();
});
