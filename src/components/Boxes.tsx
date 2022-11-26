import React, { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import "./Boxes.scss";

function useOnClickOutside(ref: any, handler: any) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

const Boxes = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const openMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useOnClickOutside(menuRef, () => {
    setMenuOpen(false);
  });

  return (
    <>
      <div className="Box" data-testid="boxes">
        <div className="Dropdown" ref={menuRef}>
          <button
            onClick={openMenu}
            className="dropbtn"
            data-testid="openMenuButton"
          >
            Menu
          </button>
          <Menu isMenuOpen={isMenuOpen} />
        </div>
        <div className="Text">Ciao</div>
      </div>
      <div className="Box">
        <div className="Text">Ciao</div>
      </div>
    </>
  );
};

export default Boxes;
