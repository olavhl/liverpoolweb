import { createContext, FC, useEffect, useState } from "react";
import { IPlayer } from "../interfaces/IPlayers";
import { playerService } from "../services/playerService";
import { PlayerContextType } from "../types/PlayerContextType";

export const PlayerContext = createContext<PlayerContextType | null>(null);

export const PlayerProvider: FC = ({ children }) => {
  const [error, setError] = useState(true)
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

  useEffect(() => {
    checkError()
  }, [players])

  const checkError = () => {
    let playerCopy = [...players];
    if (playerCopy[0].id !== "jup") {
      setError(false)
    }
  }

  const getPlayers = async () => {
    const result = await playerService.getAllPlayers();
    setPlayers(result);
  };

  const addPlayer = async (newPlayer: IPlayer, image: File) => {
    playerService.postNewPlayer(newPlayer, image);
    setPlayers([...players, newPlayer]);
  };

  const updatePlayer = (updatedPlayer: IPlayer) => {
    playerService.updatePlayer(updatedPlayer);
    let updatedList = players.map(player => {
      if (player.id === updatedPlayer.id) {
        player = updatedPlayer
      }
      return player
    })
    setPlayers(updatedList)
  }

  const deletePlayer = (deletedPlayer: IPlayer) => {
    playerService.deletePlayer(deletedPlayer);
    setPlayers(players.filter((player) => player.id !== deletedPlayer.id));
  };

  return (
    <>
      <PlayerContext.Provider value={{ players, addPlayer, deletePlayer, updatePlayer, error }}>
        {children}
      </PlayerContext.Provider>
    </>
  );
};
