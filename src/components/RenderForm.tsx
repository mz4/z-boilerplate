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
}

const RenderForm: React.FC<IProps> = ({ players, setPlayer }) => {
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

  const formStyles: CSSProperties = {
    backgroundColor: "#f2f2f2",
    display: "block",
    margin: "1rem",
    padding: "1rem",
    width: "30%"
  };

  const containerStyles: CSSProperties = {
    padding: "1rem",
    textAlign: "left",
    fontSize: "14px",
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
    if(!input.name || !input.age) return

    setPlayer([
        ...players,
        {
          id: players.length + 1,
          name: input.name,
          role: input.role,
          age: parseInt(input.age),
          active: true
        }
    ]);

    setInput({
      id: "",
      name: "",
      role: "",
      age: "",
      active: "",
    });
}

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
    </div>
  );
};

export default RenderForm;
