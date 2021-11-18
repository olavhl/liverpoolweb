import footballField from "../../assets/images/footballfield.png";
import React, {FC} from "react";
import TeamSelectionDefaultPlayer from "./TeamSelectionDefaultPlayer";
import {IPlayer} from "../../interfaces/IPlayers";

type TeamSelectionFieldProps = {
        goalkeeper: IPlayer;
        defenders: IPlayer[];
        midfielders: IPlayer[];
        attackers: IPlayer[];

}

const TeamSelectionField : FC<TeamSelectionFieldProps> = ({goalkeeper, defenders, midfielders, attackers} : TeamSelectionFieldProps) => {

    const displayPlayersOnField = (players: IPlayer[]) => {
        return players.map((player:IPlayer, key) => {
            if (player.firstname !== "") {
                return (
                    <TeamSelectionDefaultPlayer listKey={key} image={`https://localhost:5001/images/${player.image}`} />
                )
            } else {
                return <TeamSelectionDefaultPlayer listKey={key} image={""} />
            }

        })
    }

    const displayGoalkeeper = () => {
        if (goalkeeper.firstname === "") {
            return <TeamSelectionDefaultPlayer listKey={12131313} image={""} />
        } else {
            return <TeamSelectionDefaultPlayer listKey={1231441} image={`https://localhost:5001/images/${goalkeeper.image}`}/>
        }
    }

    return (
        <div className={"football-field"}>
            <img src={footballField} alt="Football Field"/>
            <div className="field-players-grid">
                <div className="field-attackers">
                    {displayPlayersOnField(attackers)}
                </div>
                <div className="field-midfielders">
                    {displayPlayersOnField(midfielders)}

                </div>
                <div className="field-defenders">
                    {displayPlayersOnField(defenders)}
                </div>
                <div className="field-goalkeeper">
                    {displayGoalkeeper()}
                </div>
            </div>
        </div>
    );
}

export default TeamSelectionField;