import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Boxes from "../Boxes";

describe('Boxes', () => {
  it('should render component', () => {
    const {container} = render(<Boxes />);
    expect(container).toMatchSnapshot();
  });
  it('should render component', () => {
    const { queryByText, getByTestId } = render(<Boxes />);
    expect(queryByText('Home')).not.toBeInTheDocument();
    expect(queryByText('About')).not.toBeInTheDocument();
    expect(queryByText('Contact')).not.toBeInTheDocument();
    fireEvent.click(getByTestId("openMenuButton"));
    expect(queryByText('Home')).toBeInTheDocument();
    expect(queryByText('About')).toBeInTheDocument();
    expect(queryByText('Contact')).toBeInTheDocument();
  });
  it('should find multiple elements', () => {
    const { queryAllByText } = render(<Boxes />);
    const ciao = queryAllByText('Ciao');
    expect(ciao.length).toBe(2);
  });
});
