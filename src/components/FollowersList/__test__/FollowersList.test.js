import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  beforeEach(() => {
    jest.mock("../../../__mocks__/axios");
  });

  test("should fetch and render input element", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId(`follower-item-0`);
    expect(followerDivElement).toBeInTheDocument();
  });

  test("should fetch and render input element", async () => {
    render(<MockFollowersList />);

    const followerDivElement = await screen.findByTestId(`follower-item-0`);
    screen.debug();
    expect(followerDivElement).toBeInTheDocument();
  });
});
