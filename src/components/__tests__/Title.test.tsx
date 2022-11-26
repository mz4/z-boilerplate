import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Title from "../Title";

const propertiesV1 = {
  players: [
    {
      id: 1,
      name: "Lebron James",
      role: "Shooting Guard",
      age: 36,
      active: true,
    },
  ],
  deletePlayer: jest.fn(),
};

describe("Title", () => {
  it("should match the snapshot", () => {
    const { container } = render(<Title {...propertiesV1} />);
    expect(container).toMatchSnapshot();
  });
  it("should find queries by text", () => {
    const { queryByText } = render(<Title {...propertiesV1} />);
    expect(queryByText("This is a title")).toBeInTheDocument();
    expect(queryByText("Increase Number")).toBeInTheDocument();
    expect(queryByText("Id")).toBeInTheDocument();
    expect(queryByText("Name")).toBeInTheDocument();
    expect(queryByText("Role")).toBeInTheDocument();
    expect(queryByText("Age")).toBeInTheDocument();
    expect(queryByText("Active")).toBeInTheDocument();
    expect(queryByText("Action")).toBeInTheDocument();
  });
  it("should call delete player", () => {
    const { getByTestId } = render(<Title {...propertiesV1} />);
    fireEvent.click(getByTestId("deleteplayer"));
    expect(propertiesV1.deletePlayer).toHaveBeenCalled();
  });
});
