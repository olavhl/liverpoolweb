import React, {useContext} from "react";
import {TeamSelectionContext} from "../context/TeamSelectionContext";
import {TeamSelectionContextType} from "../types/TeamSelectionContextType";
import {TeamSelectionOverviewList} from "../components/teamselection/overview/TeamSelectionOverviewList";
import {ErrorView} from "../components/ErrorView";

const TeamSelectionOverviewPage = () => {
    const {teamSelections, teamError} = useContext(TeamSelectionContext) as TeamSelectionContextType;

    if (teamError) {
        return <ErrorView />
    }
    return <>
        <h1>All created Team Selections</h1>
        <p>Click on one of the created teams</p>
        <TeamSelectionOverviewList teamSelections={teamSelections}/>
    </>
}

export default TeamSelectionOverviewPage;