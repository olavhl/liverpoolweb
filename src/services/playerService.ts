import axios from "axios";
import { IPlayer } from "../interfaces/IPlayers";

export const playerService = (function () {
  const urlToLiverpoolStatsController = "https://localhost:5001/liverpoolStats";

  const getAllPlayers = async () => {
    const result = await axios.get<IPlayer[]>(urlToLiverpoolStatsController);

    return result["data"];
  };

  const postNewPlayer = async (newPlayer: IPlayer) => {
    const result = await axios.post(urlToLiverpoolStatsController, newPlayer);
    return result.data as IPlayer;
  };

  return {
    getAllPlayers,
    postNewPlayer,
  };
})();
