import {IPlayer} from "../interfaces/IPlayers";
import {ChangeEvent} from "react";
import {ITeamSelection} from "../interfaces/ITeamSelection";

export  type ModalProps = {
    show?: boolean;
    onHide?: () => void;
    player: IPlayer;
    handleDelete?: () => void;
    onUpdatePlayer: (player: IPlayer) => void;
    onSaveChanges?: () => void;
}

export type PlayerProps = {
    player: IPlayer;
    handleClick: (player: IPlayer) => void;
};

export type ModalFieldProps = {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeHolder: string | number;
    name: string;
    label: string;
    type: string;
}

export type TeamSelectionOverviewListProps = {
    teamSelections: ITeamSelection[];
}

export type TeamSelectionFieldProps = {
    goalkeeper: IPlayer;
    defenders: IPlayer[];
    midfielders: IPlayer[];
    attackers: IPlayer[];
}

export type TeamSelectionListProps = {
    isGoalkeeperEmpty: boolean;
    isDefenderEmpty: boolean;
    isMidfielderEmpty: boolean;
    isAttackerEmpty: boolean;
    players: IPlayer[];
    handleClickedPlayer: (player: IPlayer) => void;
}