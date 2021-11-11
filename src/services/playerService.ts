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
    let formData = new FormData();
    formData.append("file", image);

    axios.post(urlToLiverpoolStatsController, newPlayer);
    axios({
      url: urlToImageUploadController,
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  const deletePlayer = (player: IPlayer) => {
    const deletePlayerURL = `${urlToLiverpoolStatsController}/${player.id}`;
    axios.delete(deletePlayerURL);
  };

  return {
    getAllPlayers,
    postNewPlayer,
    deletePlayer,
  };
})();
