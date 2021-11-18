import axios from "axios";
import {ITeamSelection} from "../interfaces/ITeamSelection";


export const teamSelectionService = (function () {
    const urlToTeamSelectionController = "https://localhost:5001/teamselection";

    const getAllTeamSelections = async () => {
        const result = await axios.get<ITeamSelection[]>(urlToTeamSelectionController);
        return result["data"];
    }

    return {
        getAllTeamSelections
    }
})();