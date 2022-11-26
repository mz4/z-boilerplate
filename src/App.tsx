import React from "react";
import { useState } from "react";
import Title from "./components/Title";
import playersL from "./components/players.json";
import RenderForm from "./components/RenderForm";
import Boxes from "./components/Boxes";

interface IState {
  players: {
    id: number;
    name: string;
    role: string;
    age: number;
    active: boolean;
  }[];
}

const App: React.FC<{}> = () => {
  const [players, playersList] = useState<IState["players"]>(playersL);
  const [modal, showModal] = useState(false);

  const deletePlayer = (id: number) => {
    playersList(players.filter((p) => p.id !== id));
  };

  const closeModal = () => {
    showModal(false);
  };

  const setPlayer = (players: any) => {
    playersList(players);
  };

  const addNewPlayer = () => {
    showModal(!modal);
  };

  return (
    <>
      <Boxes />
      <Title players={players} deletePlayer={deletePlayer} />
      <button onClick={addNewPlayer} data-testid="addPlayer">
        Add Player
      </button>
      {modal ? (
        <RenderForm
          players={players}
          setPlayer={setPlayer}
          closeModal={closeModal}
        />
      ) : null}
    </>
  );
};

export default App;
