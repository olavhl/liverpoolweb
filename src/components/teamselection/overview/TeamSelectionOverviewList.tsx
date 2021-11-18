import {TeamSelectionOverviewListProps} from "../../../types/PropsType";
import {ITeamSelection} from "../../../interfaces/ITeamSelection";
import {TeamSelectionOverviewItem} from "./TeamSelectionOverviewItem";
import {ListGroup} from "react-bootstrap";
import React from "react";

export function TeamSelectionOverviewList({teamSelections}: TeamSelectionOverviewListProps) {
    const createdTeamSelectionsList = (teamSelections: ITeamSelection[]) => {
        return teamSelections.map((teamSelection: ITeamSelection, key) => {
            return <>
                <TeamSelectionOverviewItem key={key} teamSelection={teamSelection} eventKey={key}/>
            </>
        })
    }

    return <ListGroup>
        {createdTeamSelectionsList(teamSelections)}
    </ListGroup>;
}