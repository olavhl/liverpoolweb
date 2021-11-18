import {ITeamSelection} from "../interfaces/ITeamSelection";

export type TeamSelectionContextType = {
    teamSelections: ITeamSelection[];
    teamError: boolean;
    addTeamSelection: (newTeamSelection: ITeamSelection) => void;
    getTeamSelectionById: (id: string) => ITeamSelection;
}