import {IPlayer} from "../../../interfaces/IPlayers";
import {ListGroup} from "react-bootstrap";
import React from "react";

export function TeamSelectionItem(props: { onClick: () => void, player: IPlayer }) {
    return <ListGroup.Item onClick={props.onClick}
                           action>{props.player.firstname} {props.player.lastname}</ListGroup.Item>;
}