import React, {useContext} from "react";
import {TeamSelectionContext} from "../context/TeamSelectionContext";
import {TeamSelectionContextType} from "../types/TeamSelectionContextType";
import {ITeamSelection} from "../interfaces/ITeamSelection";
import {ListGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

const TeamSelectionOverviewPage = () => {
    const {teamSelections} = useContext(TeamSelectionContext) as TeamSelectionContextType;

    console.log(teamSelections)

    const createdTeamSelectionsList = (teamSelections: ITeamSelection[]) => {
        return teamSelections.map((teamSelection: ITeamSelection, key) => {
            return <>
                <Link to={`/teamselection/${teamSelection.id}`}>
                    <ListGroup.Item key={key} eventKey={key} action>{teamSelection.id}</ListGroup.Item>
                </Link>
            </>
        })
    }

    return <>
        <h1>All created Team Selections</h1>
        <p>Click on one of the created teams</p>
        <ListGroup>
            {createdTeamSelectionsList(teamSelections)}
        </ListGroup>


    </>
}

export default TeamSelectionOverviewPage;