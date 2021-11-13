import {IPlayer} from "../interfaces/IPlayers";

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