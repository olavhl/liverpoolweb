import React, {useContext, useEffect, useState} from "react";
import TeamSelectionField from "../components/teamselection/TeamSelectionField";
import {PlayerContext} from "../context/PlayerContext";
import {PlayerContextType} from "../types/PlayerContextType";
import {Button, ListGroup} from "react-bootstrap";
import {IPlayer} from "../interfaces/IPlayers";
import {TeamSelectionContext} from "../context/TeamSelectionContext";
import {TeamSelectionContextType} from "../types/TeamSelectionContextType";


const TeamSelectionPage = () => {
    const { players } = useContext(PlayerContext) as PlayerContextType;
    const { teamSelections } = useContext(TeamSelectionContext) as TeamSelectionContextType;
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

    console.log(teamSelections)

    useEffect(() => {
        if (!hasGoalkeeperEmptySpot(goalkeeper) && !hasArrayEmptySpots(defenders) && !hasArrayEmptySpots(midfielders) && !hasArrayEmptySpots(attackers)) {
            setIsNotReadyToSend(false)
        }
    }, [goalkeeper, defenders, midfielders, attackers])

    const displayPlayers = (position: string) => {
        return players.map((player:IPlayer, key) => {
            if (player.position.toLocaleLowerCase() === position.toLocaleLowerCase()) {
                return (
                    <ListGroup.Item onClick={() => handleClickedPlayer(player)} action key={key}>{player.firstname} {player.lastname}</ListGroup.Item>
                )
            } else {
                return ""
            }
        })
    }

    const handleClickedPlayer = (player: IPlayer) => {
        let position = player.position;

        if (position === "Goalkeeper") {
            setGoalkeeper(player)
        } else if (position === "Defender") {
            let alreadySelected = checkForAlreadyInArray(player, defenders);
            if (!alreadySelected) {
                defenders.map((defender: IPlayer, index) => {
                    if (defender.firstname === "") {
                        let defendersCopy = [...defenders]
                        defendersCopy[index] = player
                        setDefenders(defendersCopy)
                    }
                    return defenders
                })
            }
        } else if (position === "Midfielder") {
            let alreadySelected = checkForAlreadyInArray(player, midfielders)
            if (!alreadySelected) {
                midfielders.map((midfielder: IPlayer, index) => {
                    if (midfielder.firstname === "") {
                        let midfieldersCopy = [...midfielders]
                        midfieldersCopy[index] = player
                        setMidfielders(midfieldersCopy)
                    }
                    return midfielders
                })
            }
        } else if (position === "Attacker") {
            let alreadySelected = checkForAlreadyInArray(player, attackers)
            if (!alreadySelected) {
                attackers.map((attacker: IPlayer, index) => {
                    if (attacker.firstname === "") {
                        let attackersCopy = [...attackers]
                        attackersCopy[index] = player
                        setAttackers(attackersCopy)
                    }
                    return attackers
                })
            }
        }
    }

    const checkForAlreadyInArray = (player: IPlayer, players: IPlayer[]) => {
        let alreadySelected = false;
        for (let i = 0; i < players.length; i++) {
            if (player.id === players[i].id) {
                alreadySelected = true
            }
        }
        return alreadySelected
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

    const hasGoalkeeperEmptySpot = (player: IPlayer) => {
        return player.firstname === "";
    }

  return (
    <div>
        <h1>Team Selection</h1>
        <p>Select the players you want for your team and send in!</p>
        <div className={"team-selection-page"}>
            <TeamSelectionField goalkeeper={goalkeeper} defenders={defenders} midfielders={midfielders} attackers={attackers} />

            <ListGroup className={"team-selection-list"}>
                <ListGroup.Item>
                    <ListGroup.Item disabled>Goalkeepers</ListGroup.Item>
                    {hasGoalkeeperEmptySpot(goalkeeper) && displayPlayers("goalkeeper")}
                    <ListGroup.Item disabled>Defenders</ListGroup.Item>
                    {hasArrayEmptySpots(defenders) && displayPlayers("defender")}
                    <ListGroup.Item disabled>Midfielders</ListGroup.Item>
                    {hasArrayEmptySpots(midfielders) && displayPlayers("midfielder")}
                    <ListGroup.Item disabled>Attackers</ListGroup.Item>
                    {hasArrayEmptySpots(attackers) && displayPlayers("attacker")}
                </ListGroup.Item>
            </ListGroup>

            <Button disabled={isNotReadyToSend}>Send Team</Button>

        </div>
    </div>
  );
};

export default TeamSelectionPage;
