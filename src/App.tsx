import React from "react";
import { useState } from "react";
import Title from "./components/Title";
import playersL from './components/players.json';
import RenderForm from "./components/RenderForm";

interface IState {
  players: {
    id: number,
    name: string;
    role: string;
    age: number;
    active: boolean;
  }[];
}

const App: React.FC<{}> = () => {
  const [players, playersList] = useState<IState["players"]>(playersL);

  const deletePlayer = (id: number) => {
    playersList(players.filter(p => p.id !== id));
  }

  const setPlayer = (players: any) => {
    playersList(players);
  }

  return (
    <>
      <Title 
        players={players} 
        deletePlayer={deletePlayer}
      />
      <RenderForm 
        players={players} 
        setPlayer={setPlayer}
      />
    </>
  );
};

export default App;