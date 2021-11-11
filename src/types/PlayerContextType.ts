import { IPlayer } from "../interfaces/IPlayers";

export type PlayerContextType = {
  players: IPlayer[];
  addPlayer: (newPlayer: IPlayer, image: File) => void;
  deletePlayer: (deletedPlayer: IPlayer) => void;
};
