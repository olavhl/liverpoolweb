import { IPlayer } from "../interfaces/IPlayers";

export type PlayerContextType = {
  players: IPlayer[];
  error: boolean;
  addPlayer: (newPlayer: IPlayer, image: File) => void;
  deletePlayer: (deletedPlayer: IPlayer) => void;
  updatePlayer: (updatedPlayer: IPlayer) => void;
};
