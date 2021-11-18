import React, {useContext, useEffect, useState} from "react";
import TeamSelectionField from "../components/teamselection/TeamSelectionField";
import {PlayerContext} from "../context/PlayerContext";
import {PlayerContextType} from "../types/PlayerContextType";
import {Button} from "react-bootstrap";
import {IPlayer} from "../interfaces/IPlayers";
import {TeamSelectionContext} from "../context/TeamSelectionContext";
import {TeamSelectionContextType} from "../types/TeamSelectionContextType";
import {ITeamSelection} from "../interfaces/ITeamSelection";
import {TeamSelectionList} from "../components/teamselection/list/TeamSelectionList";
import {ErrorView} from "../components/ErrorView";

const TeamSelectionPage = () => {
    const { players, error } = useContext(PlayerContext) as PlayerContextType;
    const { addTeamSelection, teamError } = useContext(TeamSelectionContext) as TeamSelectionContextType;
    const [isNotReadyToSend, setIsNotReadyToSend] = useState(true)

    const initialPlayer = {
        firstname: "",
        lastname: "",
        age: 0,
        country: "",
        position: "",
        image: "",
    };

    const [goalkeeper, setGoalkeeper] = useState<IPlayer>(initialPlayer)
    const [defenders, setDefenders] = useState<IPlayer[]>([initialPlayer, initialPlayer, initialPlayer, initialPlayer])
    const [midfielders, setMidfielders] = useState<IPlayer[]>([initialPlayer, initialPlayer, initialPlayer])
    const [attackers, setAttackers] = useState<IPlayer[]>([initialPlayer, initialPlayer, initialPlayer])


    const hasGoalkeeperEmptySpot = (player: IPlayer) => {
        return player.firstname === "";
    }

    useEffect(() => {
        if (!hasGoalkeeperEmptySpot(goalkeeper) && !hasArrayEmptySpots(defenders) && !hasArrayEmptySpots(midfielders) && !hasArrayEmptySpots(attackers)) {
            setIsNotReadyToSend(false)
        }
    }, [goalkeeper, defenders, midfielders, attackers])

    if (error || teamError) {
        return <ErrorView />
    }


    const handleClickedPlayer = (player: IPlayer) => {
        let position = player.position;

        if (position === "Goalkeeper") {
            setGoalkeeper(player)
        } else if (position === "Defender") {
            setDefenders(addPlayerToArray(player, defenders))
        } else if (position === "Midfielder") {
            setMidfielders(addPlayerToArray(player, midfielders))
        } else if (position === "Attacker") {
            setAttackers(addPlayerToArray(player, attackers))
        }
    }

    // Function checking the if the player is already selected
    const checkForAlreadyInArray = (player: IPlayer, players: IPlayer[]) => {
        let alreadySelected = false;
        for (let i = 0; i < players.length; i++) {
            if (player.id === players[i].id) {
                alreadySelected = true
            }
        }
        return alreadySelected
    }

    // Mapping
    // the array and adding a player if there is an open spot
    const addPlayerToArray = (player: IPlayer, players: IPlayer[]) => {
        let alreadySelected = checkForAlreadyInArray(player, players);
        let playersCopy = [...players];
        if (!alreadySelected) {
            players.map((p: IPlayer, index) => {
                if (p.firstname === "") {
                    playersCopy = [...players]
                    playersCopy[index] = player
                    return playersCopy
                }
                return playersCopy
            })
        }
        return playersCopy
    }

    const hasArrayEmptySpots = (players: IPlayer[]) => {
        let playersCopy = [...players]
        for (let i = 0; i < players.length; i++) {
            if (playersCopy[i].firstname === "") {
                return true
            }
        }
        return false;
    }


    const postNewTeamSelection = () => {
        let newTeamSelection: ITeamSelection = {
            goalkeeper: goalkeeper,
            defenders: defenders,
            midfielders: midfielders,
            attackers: attackers
        };
        addTeamSelection(newTeamSelection);
        // Reloading page to empty players as well as Reload data from DB
        window.location.reload()
    }

  return (
    <div>
        <h1>Team Selection</h1>
        <p>Select the players you want for your team and send in!</p>
        <div className={"team-selection-page"}>
            <TeamSelectionField goalkeeper={goalkeeper} defenders={defenders} midfielders={midfielders}
                                attackers={attackers}/>

            <TeamSelectionList players={players} handleClickedPlayer={handleClickedPlayer}
                isGoalkeeperEmpty={hasGoalkeeperEmptySpot(goalkeeper)}
                               isDefenderEmpty={hasArrayEmptySpots(defenders)}
                               isMidfielderEmpty={hasArrayEmptySpots(midfielders)}
                               isAttackerEmpty={hasArrayEmptySpots(attackers)}/>

            <Button onClick={postNewTeamSelection} disabled={isNotReadyToSend}>Save Team</Button>

        </div>
    </div>
  );
};

export default TeamSelectionPage;
