import {ITeamSelection} from "../interfaces/ITeamSelection";

export type TeamSelectionContextType = {
    teamSelections: ITeamSelection[];
    addTeamSelection: (newTeamSelection: ITeamSelection) => void;
    getTeamSelectionById: (id: string) => ITeamSelection;
}