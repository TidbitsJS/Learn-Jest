import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  test("should be able to type into input", () => {
    render(<MockTodo />);

    addTask(["Read books"]);
    const divElement = screen.getByText(/Read books/i);
    expect(divElement).toBeInTheDocument();
  });

  test("should render multiple items", () => {
    render(<MockTodo />);

    addTask(["Read books", "Write code"]);
    const divElements = screen.getAllByText(/Read books|Write code/i);
    expect(divElements.length).toBe(2);
  });

  test("task should not have complete class when initally rendered", () => {
    render(<MockTodo />);

    addTask(["Read books", "Write code", "Eat more"]);
    const divElement = screen.getByText(/Read books/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  test("task should have complete class when clicked", () => {
    render(<MockTodo />);

    addTask(["Read books", "Write code", "Eat more", "Stay grounded"]);
    const divElement = screen.getByText(/Write code/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
