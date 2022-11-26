import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("should have children", () => {
    const { debug } = render(<App />);
  });
  it("should match snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  it("should getByText Add Player", () => {
    render(<App />);
    expect(screen.getByText("Add Player")).toBeInTheDocument();
  });
  it("should get addPlayer getTestById", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("addPlayer")).toHaveTextContent("Add Player");
  });
  it("should find boxes to be in the document", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("boxes")).toBeInTheDocument();
  });
});
