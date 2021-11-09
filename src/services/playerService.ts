import axios from "axios";
import { IPlayer } from "../interfaces/IPlayers";

export const playerService = (function () {
  const urlToLiverpoolStatsController = "https://localhost:5001/liverpoolStats";
  const urlToImageUploadController =
    "https://localhost:5001/imageUpload/SaveImage";

  const getAllPlayers = async () => {
    const result = await axios.get<IPlayer[]>(urlToLiverpoolStatsController);

    return result["data"];
  };

  const postNewPlayer = (newPlayer: IPlayer, image: File) => {
    axios.post(urlToLiverpoolStatsController, newPlayer);
    axios({
      url: urlToImageUploadController,
      method: "POST",
      data: image,
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  return {
    getAllPlayers,
    postNewPlayer,
  };
})();
