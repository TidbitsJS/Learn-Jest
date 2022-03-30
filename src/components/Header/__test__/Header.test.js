import { render, screen } from "@testing-library/react";
import Header from "../Header";

// @@@ with getByTexts
it("should render same text passed into title prop", () => {
  render(<Header title="todo" />);
  const h1Element = screen.getByText(/todo/i);
  expect(h1Element).toBeInTheDocument();
});

/*

    // @@@ with getByRole
    it("should render same text passed into title prop", () => {
        render(<Header title="todo" />);
        const h1Element = screen.getByRole("heading", { name: /todo/i });
        expect(h1Element).toBeInTheDocument();
    });

*/

/*
  
    // @@@ with getByTitles
    it("should render same text passed into title prop", () => {
        render(<Header title="todo" />);
        const h1Element = screen.getByTitle("Header");
        expect(h1Element).toBeInTheDocument();
    });

*/

/*

    // @@@ with getByTestId
    it("should render same text passed into title prop", () => {
        render(<Header title="todo" />);
        const h2Element = screen.getByTestId("header-2");
        expect(h2Element).toBeInTheDocument();
    });

*/

/*

    // @@@ with findByText
    it("should render same text passed into title prop", async () => {
        render(<Header title="todo" />);
        const h1Element = await screen.findByText(/todo/i);
        expect(h1Element).toBeInTheDocument();
    });

*/

/*

    // @@@ with QUERYBY
    it("should render same text passed into title prop", () => {
        render(<Header title="todo" />);
        const h1Element = screen.queryByText(/dogs/i);
        expect(h1Element).not.toBeInTheDocument();
    });

*/

/*

    @@@ with GETALLBYTEXT
    it("should render same text passed into title prop", () => {
        render(<Header title="todo" />);
        const h1Elements = screen.getAllByAltText(/todo/i);
        expect(h1Elements.length).toBe(1);
    });

*/
