import React, { useState } from "react";
import "./Title.scss";

// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example

interface IProps {
  players: {
    id: number;
    name: string;
    role: string;
    age: number;
    active: boolean;
  }[];
  deletePlayer: (id: number) => void;
}

const Title = ({ players, deletePlayer }: IProps) => {
  const [num, setNum] = useState<number>(0);

  const changeNum = (): void => {
    setNum(num + 1);
  };

  const renderList = (): JSX.Element[] => {
    return players.map((player, index) => {
      return (
        <tr key={index}>
          <td>{player.id}</td>
          <td>{player.name}</td>
          <td>{player.role}</td>
          <td>{player.age}</td>
          <td>{player.active ? "yes" : "no"}</td>
          <td>
            <button
              data-testid="deleteplayer"
              onClick={(event: React.MouseEvent<HTMLElement>) =>
                deletePlayer(player.id)
              }
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h2>This is a title</h2>
      <button onClick={changeNum}>
        Increase Number <span>{num}</span>
      </button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Role</th>
            <th>Age</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderList()}</tbody>
      </table>
    </div>
  );
};

export default Title;
