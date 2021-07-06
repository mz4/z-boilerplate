import React from "react";
import { render } from "@testing-library/react";
import Menu from "../Menu";

const propertiesV1 = {
  isMenuOpen: false
}

const propertiesV2 = {
  isMenuOpen: true
}

describe('Menu', () => {
  it('should match snapshot', () => {
    const { container } = render(<Menu {...propertiesV1} />);
    expect(container).toMatchSnapshot();
  });
  it('should have menu close', () => {
    const { queryByText } = render(<Menu {...propertiesV1} />);
    expect(queryByText('Home')).not.toBeInTheDocument();
    expect(queryByText('About')).not.toBeInTheDocument();
    expect(queryByText('Contact')).not.toBeInTheDocument();
  });
});

describe('Menu', () => {
  it('should match snapshot', () => {
    const { container } = render(<Menu {...propertiesV2} />);
    expect(container).toMatchSnapshot();
  });
  it('should have menu open', () => {
    const { queryByText } = render(<Menu {...propertiesV2} />);
    expect(queryByText('Home')).toBeInTheDocument();
    expect(queryByText('About')).toBeInTheDocument();
    expect(queryByText('Contact')).toBeInTheDocument();
  });
});
