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
  it("should render the correct amount of incomplete tasks", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);

    const pElement = screen.getByText(/5 tasks left/i);
    expect(pElement).toBeInTheDocument();
  });
});

describe("Footer", () => {
  it("should render 'task' when the number of icomplete tasks is one", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toBeInTheDocument();
  });
});

describe("Footer", () => {
  it("p element should be truth when the number of incomplete tasks is one", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toBeTruthy();
  });
});

describe("Footer", () => {
  it("'task' should be visible when the number of incomplete tasks in one", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toBeVisible();
  });
});

describe("Footer", () => {
  it("should contain p tag with correct text", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toContainHTML("p");
  });
});

describe("Footer", () => {
  it("should render correct text content", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).toHaveTextContent("1 task left");
  });
});

describe("Footer", () => {
  it("should render correct text content", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const pElement = screen.getByText(/1 task left/i);
    expect(pElement).not.toBeFalsy();
  });
});

describe("Footer", () => {
  it("should render correct text content", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);

    const pElement = screen.getByText(/1 task left/i);
    expect(pElement.textContent).toBe("1 task left");
  });
});
