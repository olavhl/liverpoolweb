import React, {useContext, useState} from "react";
import {TeamSelectionField} from "../components/teamselection/TeamSelectionField";
import {PlayerContext} from "../context/PlayerContext";
import {PlayerContextType} from "../types/PlayerContextType";
import {ListGroup} from "react-bootstrap";
import {IPlayer} from "../interfaces/IPlayers";


const TeamSelectionPage = () => {
    const { players } = useContext(PlayerContext) as PlayerContextType;

    const initialPlayer = {
        firstname: "",
        lastname: "",
        age: 0,
        country: "",
        position: "",
        image: "",
    };

    const [goalkeeper, setGoalkeeper] = useState<IPlayer>()
    const [defenders, setDefenders] = useState<IPlayer[]>([initialPlayer])
    const [midfielders, setMidfielders] = useState<IPlayer[]>([initialPlayer])
    const [attackers, setAttackers] = useState<IPlayer[]>([initialPlayer])



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

        if (position === "Goalkeeper" && goalkeeper !== null) {
            setGoalkeeper(player)
        } else if (position === "Defender" && defenders.length < 4) {
            let alreadySelected = false;
            for (let i = 0; i < defenders.length; i++){
                if (player.id === defenders[i].id){
                    alreadySelected = true
                }
            }
            if (!alreadySelected) {
                if (defenders[0].firstname === "") {
                    setDefenders([player])
                } else {
                    setDefenders(defenders =>  [...defenders, player])
                }
            }
        } else if (position === "Midfielder" && midfielders.length < 3) {
            let alreadySelected = false;
            for (let i = 0; i < midfielders.length; i++){
                    if (player.id === midfielders[i].id){
                        alreadySelected = true
                    }
                }
            if (!alreadySelected) {
                if (midfielders[0].firstname === "") {
                    setMidfielders([player])
                } else {
                    setMidfielders(midfielders =>  [...midfielders, player])
                }
            }
        } else if (position === "Attacker" && attackers.length < 3) {
            let alreadySelected = false;
            for (let i = 0; i < attackers.length; i++){
                if (player.id === attackers[i].id){
                    alreadySelected = true
                }
            }
            if (!alreadySelected) {
                if (attackers[0].firstname === "") {
                    setAttackers([player])
                } else {
                    setAttackers(oldAttackers =>  [...oldAttackers, player])
                }
            }
        }
    }
    console.log(goalkeeper)
    console.log(defenders)
    console.log(midfielders)
    console.log(attackers)

  return (
    <div>
        <h1>Team Selection</h1>
        <TeamSelectionField/>
        <ListGroup>
            <ListGroup.Item>
                <ListGroup.Item disabled>Goalkeepers</ListGroup.Item>
                {displayPlayers("goalkeeper")}
                <ListGroup.Item disabled>Defenders</ListGroup.Item>
                {displayPlayers("defender")}
                <ListGroup.Item disabled>Midfielders</ListGroup.Item>
                {displayPlayers("midfielder")}
                <ListGroup.Item disabled>Attackers</ListGroup.Item>
                {displayPlayers("attacker")}
            </ListGroup.Item>
        </ListGroup>
    </div>
  );
};

export default TeamSelectionPage;
