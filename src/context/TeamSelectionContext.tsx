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
        goalkeepers: initialPlayer,
        defenders: [initialPlayer],
        midfielders: [initialPlayer],
        attackers: [initialPlayer]
    }

    const [teamSelections, setTeamSelections] = useState<ITeamSelection[]>([initialState])

    useEffect(() => {
        getTeamSelection()
    }, [])

    const getTeamSelection = async () => {
        const result = await teamSelectionService.getAllTeamSelections();
        setTeamSelections(result)
    }

    return (
        <>
            <TeamSelectionContext.Provider value={{teamSelections}}>
                {children}
            </TeamSelectionContext.Provider>
        </>
    )
}