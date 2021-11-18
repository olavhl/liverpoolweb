import {IPlayer} from "./IPlayers";

export interface ITeamSelection {
    id?: string;
    defenders: IPlayer[];
    midfielders: IPlayer[];
    attackers: IPlayer[];
}