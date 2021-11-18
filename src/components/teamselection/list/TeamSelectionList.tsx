import {TeamSelectionListProps} from "../../../types/PropsType";
import {IPlayer} from "../../../interfaces/IPlayers";
import {ListGroup} from "react-bootstrap";
import React from "react";
import {TeamSelectionItem} from "./TeamSelectionItem";

export function TeamSelectionList({players, handleClickedPlayer, isGoalkeeperEmpty, isDefenderEmpty, isMidfielderEmpty, isAttackerEmpty}: TeamSelectionListProps) {
    const displayPlayers = (position: string) => {
        return players.map((player: IPlayer, key) => {
            if (player.position.toLocaleLowerCase() === position.toLocaleLowerCase()) {
                return (
                    <TeamSelectionItem key={key} onClick={() => handleClickedPlayer(player)} player={player}/>
                )
            } else {
                return ""
            }
        })
    }

    return <ListGroup className={"team-selection-list"}>
        <ListGroup.Item>
            <ListGroup.Item disabled>Goalkeepers</ListGroup.Item>
            {isGoalkeeperEmpty && displayPlayers("goalkeeper")}
            <ListGroup.Item disabled>Defenders</ListGroup.Item>
            {isDefenderEmpty && displayPlayers("defender")}
            <ListGroup.Item disabled>Midfielders</ListGroup.Item>
            {isMidfielderEmpty && displayPlayers("midfielder")}
            <ListGroup.Item disabled>Attackers</ListGroup.Item>
            {isAttackerEmpty && displayPlayers("attacker")}
        </ListGroup.Item>
    </ListGroup>;
}