import {ITeamSelection} from "../../../interfaces/ITeamSelection";
import {Link} from "react-router-dom";
import {ListGroup} from "react-bootstrap";
import React from "react";

export function TeamSelectionOverviewItem(props: { teamSelection: ITeamSelection, eventKey: number }) {
    return <Link to={`/teamselection/${props.teamSelection.id}`}>
        <ListGroup.Item eventKey={props.eventKey} action>Team id: {props.teamSelection.id}</ListGroup.Item>
    </Link>;
}