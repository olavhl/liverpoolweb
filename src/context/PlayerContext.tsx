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
    },
  ]);

  useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = async () => {
    const result = await playerService.getAllPlayers();
    setPlayers(result);
  };

  return (
    <>
      <PlayerContext.Provider value={{ players }}>
        {children}
      </PlayerContext.Provider>
    </>
  );
};
