import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("Footer", () => {
  test("should render the correct amount of incomplete tasks", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);

    const pElement = screen.getByText(/5 tasks left/i);
    expect(pElement).toBeInTheDocument();
  });

  test("should render 'task' when the number of icomplete tasks is one", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toBeInTheDocument();
  });

  test("p element should be truth when the number of incomplete tasks is one", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toBeTruthy();
  });

  test("'task' should be visible when the number of incomplete tasks in one", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toBeVisible();
  });

  test("should contain p tag with correct text", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toContainHTML("p");
  });

  test("should render correct text content", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toHaveTextContent("1 task left");
  });

  test("should render correct text content", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).not.toBeFalsy();
  });

  test("should render correct text content", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const pElement = screen.getByText(/1 task left/i);
    expect(pElement.textContent).toBe("1 task left");
  });
});
