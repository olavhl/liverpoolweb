import axios from "axios";
import { IPlayer } from "../interfaces/IPlayers";

export const playerService = (function () {
  const urlToLiverpoolStatsController = "https://localhost:5001/liverpoolStats";

  const getAllPlayers = async () => {
    const result = await axios.get<IPlayer[]>(urlToLiverpoolStatsController);

    return result["data"];
  };

  return {
    getAllPlayers,
  };
})();
