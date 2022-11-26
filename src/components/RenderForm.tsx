import React, { CSSProperties, useState } from "react";

interface IProps {
  players: {
    id: number;
    name: string;
    role: string;
    age: number;
    active: boolean;
  }[];
  setPlayer: (player: any) => void;
  closeModal: () => void;
}

const RenderForm: React.FC<IProps> = ({ players, setPlayer, closeModal }) => {
  const [input, setInput] = useState({
    id: "",
    name: "",
    role: "",
    age: "",
    active: "",
  });

  const inputStyles: CSSProperties = {
    margin: "1rem",
    height: "24px",
    width: "300px",
    position: "relative",
    bottom: "0.1rem",
    fontSize: "18px",
  };

  const formStyles: CSSProperties = {};

  const containerStyles: CSSProperties = {
    padding: "1rem",
    textAlign: "left",
    fontSize: "14px",
    backgroundColor: "#f2f2f2",
    display: "block",
    margin: "1rem",
    zIndex: 1,
    position: "fixed",
    top: "40px",
    left: "30%",
    width: "630px",
    height: "290px",
    border: "5px solid #ccc",
  };

  const submitButtonStyle: CSSProperties = {
    fontSize: "14px",
    margin: "1rem",
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!input.name || !input.age) return;

    setPlayer([
      ...players,
      {
        id: players.length + 1,
        name: input.name,
        role: input.role,
        age: parseInt(input.age),
        active: true,
      },
    ]);

    setInput({
      id: "",
      name: "",
      role: "",
      age: "",
      active: "",
    });
  };

  return (
    <div style={containerStyles}>
      <label>Input Form:</label>
      <form style={formStyles}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            value={input.name}
            placeholder="Name"
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="text"
            onChange={handleChange}
            name="role"
            value={input.role}
            placeholder="Role"
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            onChange={handleChange}
            name="age"
            value={input.age}
            placeholder="Age"
          />
        </div>
        <input style={submitButtonStyle} onClick={handleSubmit} type="submit" />
      </form>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default RenderForm;
