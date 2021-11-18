import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {TeamSelectionContext} from "../context/TeamSelectionContext";
import {TeamSelectionContextType} from "../types/TeamSelectionContextType";
import {ITeamSelection} from "../interfaces/ITeamSelection";
import TeamSelectionField from "../components/teamselection/TeamSelectionField";

const TeamSelectionDetails = () => {
    const {id} = useParams();
    const { getTeamSelectionById } = useContext(TeamSelectionContext) as TeamSelectionContextType;
    const [teamSelection, setTeamSelection] = useState<ITeamSelection>();

    useEffect(() => {
        getTeamSelectionFromContext()
    }, [])

    const getTeamSelectionFromContext = () => {
        if (id) {
            const teamSelectionFromContext = getTeamSelectionById(id);
            setTeamSelection(teamSelectionFromContext);
        }
    }


    return <>
        <h1>Old Team</h1>
        <div className={"team-selection-page"}>
        {teamSelection && <TeamSelectionField goalkeeper={teamSelection?.goalkeeper} defenders={teamSelection?.defenders}
                             midfielders={teamSelection?.midfielders} attackers={teamSelection?.attackers}/>}
        </div>
    </>
}

export default TeamSelectionDetails;