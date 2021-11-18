import {IPlayer} from "./IPlayers";

export interface ITeamSelection {
    id?: string;
    goalkeeper: IPlayer;
    defenders: IPlayer[];
    midfielders: IPlayer[];
    attackers: IPlayer[];
}