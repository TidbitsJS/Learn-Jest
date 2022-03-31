import React from "react";
import { render } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("should display the prop", () => {
    // test the component
    const { getByText } = render(<Header title="test" />);
    expect(getByText("test")).toBeInTheDocument();

    // test the component with a different prop
    const { getByText: getByText2 } = render(<Header title="test2" />);
    expect(getByText2("test2")).toBeInTheDocument();
  });
});
