import React from "react";
import "./Menu.scss";

interface IProps {
  isMenuOpen: boolean;
}

const Menu = ({ isMenuOpen }: IProps) => {
  return (
    <div className="dropdown-content">
      {isMenuOpen ? (
        <>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </>
      ) : null}
    </div>
  );
};

export default Menu;
