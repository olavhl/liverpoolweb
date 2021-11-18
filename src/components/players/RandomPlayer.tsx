import {IPlayer} from "../../interfaces/IPlayers";
import PlayerItem from "./list/PlayerItem";

export function RandomPlayer(props: { randomPlayer: IPlayer | undefined, className: string }) {
    return <>
        {props.randomPlayer &&
        <div className={props.className}>
            <PlayerItem player={props.randomPlayer}/>
        </div>
        }
    </>;
}