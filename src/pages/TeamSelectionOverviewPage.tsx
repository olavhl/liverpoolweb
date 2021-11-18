import React, {useContext} from "react";
import {TeamSelectionContext} from "../context/TeamSelectionContext";
import {TeamSelectionContextType} from "../types/TeamSelectionContextType";
import {TeamSelectionOverviewList} from "../components/teamselection/overview/TeamSelectionOverviewList";

const TeamSelectionOverviewPage = () => {
    const {teamSelections} = useContext(TeamSelectionContext) as TeamSelectionContextType;
    console.log(teamSelections)

    return <>
        <h1>All created Team Selections</h1>
        <p>Click on one of the created teams</p>
        <TeamSelectionOverviewList teamSelections={teamSelections}/>
    </>
}

export default TeamSelectionOverviewPage;