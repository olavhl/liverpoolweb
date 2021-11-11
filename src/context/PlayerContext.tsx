import { createContext, FC, useEffect, useState } from "react";
import { IPlayer } from "../interfaces/IPlayers";
import { playerService } from "../services/playerService";
import { PlayerContextType } from "../types/PlayerContextType";

export const PlayerContext = createContext<PlayerContextType | null>(null);

export const PlayerProvider: FC = ({ children }) => {
  const [players, setPlayers] = useState<IPlayer[]>([
    {
      id: "jup",
      firstname: "Ola",
      lastname: "Nordmann",
      age: 22,
      country: "Norway",
      position: "Striker",
      image: "",
    },
  ]);

  useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = async () => {
    const result = await playerService.getAllPlayers();
    setPlayers(result);
  };

  const addPlayer = async (newPlayer: IPlayer, image: File) => {
    playerService.postNewPlayer(newPlayer, image);
    setPlayers([...players, newPlayer]);
  };

  const deletePlayer = (deletedPlayer: IPlayer) => {
    playerService.deletePlayer(deletedPlayer);
    setPlayers(players.filter((player) => player.id !== deletedPlayer.id));
  };

  return (
    <>
      <PlayerContext.Provider value={{ players, addPlayer, deletePlayer }}>
        {children}
      </PlayerContext.Provider>
    </>
  );
};
