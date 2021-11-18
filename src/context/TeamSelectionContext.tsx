import {createContext, FC, useEffect, useState} from "react";
import {TeamSelectionContextType} from "../types/TeamSelectionContextType";
import {ITeamSelection} from "../interfaces/ITeamSelection";
import {teamSelectionService} from "../services/teamSelectionService";
import {IPlayer} from "../interfaces/IPlayers";

export const TeamSelectionContext = createContext<TeamSelectionContextType | null>(null);

export const TeamSelectionProvider: FC = ({children}) => {
    const initialPlayer: IPlayer = {
            id: "jup",
            firstname: "Ola",
            lastname: "Nordmann",
            age: 22,
            country: "Norway",
            position: "Striker",
            image: "",
        };
    const initialState = {
        id: "jup",
        goalkeeper: initialPlayer,
        defenders: [initialPlayer],
        midfielders: [initialPlayer],
        attackers: [initialPlayer]
    }
    const [teamError, setTeamError] = useState(true)
    const [teamSelections, setTeamSelections] = useState<ITeamSelection[]>([initialState])

    useEffect(() => {
        getTeamSelection()
    }, [])

    useEffect(() => {
        checkError()
    }, [teamSelections])

    const checkError = () => {
        let teamSelectionCopy = [...teamSelections];
        if (teamSelectionCopy[0].id !== "jup") {
            setTeamError(false)
        }
    }

    const getTeamSelection = async () => {
        const result = await teamSelectionService.getAllTeamSelections();
        setTeamSelections(result)
    }

    const getTeamSelectionById = (id: string) => {
        return teamSelections.find( teamSelection => teamSelection.id === id) as ITeamSelection;
    }

    const addTeamSelection = async (newTeamSelection: ITeamSelection) => {
        teamSelectionService.postNewTeamSelection(newTeamSelection);
        setTeamSelections([...teamSelections, newTeamSelection]);
    }

    return (
        <>
            <TeamSelectionContext.Provider value={{teamSelections, teamError, addTeamSelection, getTeamSelectionById}}>
                {children}
            </TeamSelectionContext.Provider>
        </>
    )
}