import {IPlayer} from "../interfaces/IPlayers";

export  type ModalProps = {
    show: boolean;
    onHide: () => void;
    player: IPlayer;
    onClick: () => void;
}

export type PlayerProps = {
    player: IPlayer;
    handleClick: (player: IPlayer) => void;
};