import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  test("should render same text passed into title prop", () => {
    // test the component
    const { getByText } = render(<Header title="test" />);
    expect(getByText("test")).toBeInTheDocument();

    // test the component with a different prop
    const { getByText: getByText2 } = render(<Header title="test2" />);
    expect(getByText2("test2")).toBeInTheDocument();
  });

  test("should render same text passed into title prop", () => {
    render(<Header title="test" />);

    const h1Element = screen.getByRole("heading");
    expect(h1Element).toBeInTheDocument();
  });

  test("should render same text passed into title prop", () => {
    render(<Header title="todo" />);

    const h1Element = screen.getByRole("heading", { name: /todo/i });
    expect(h1Element).toBeInTheDocument();
  });

  test("should render same text passed into title prop", () => {
    render(<Header title="todo" />);

    const h1Element = screen.queryByText(/dogs/i);
    expect(h1Element).not.toBeInTheDocument;
  });

  test("should render same text passed into title prop", () => {
    render(<Header title="todo" />);

    const h1Elements = screen.getAllByText(/todo/i);
    expect(h1Elements.length).toBe(1);
  });

  test("should render same text passed into title prop", async () => {
    render(<Header title="todo" />);

    const h1Element = await screen.findByText(/todo/i);
    expect(h1Element).toBeInTheDocument();
  });
});
