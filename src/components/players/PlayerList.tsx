import React, { FC, useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import { IPlayer } from "../../interfaces/IPlayers";
import { PlayerContextType } from "../../types/PlayerContextType";

const PlayerList: FC = () => {
  const { players } = useContext(PlayerContext) as PlayerContextType;

  const displayPlayers = () => {
    console.log(players);

    return players.map((player: IPlayer, key) => {
      return (
        <>
          <h3 key={key}>
            {player.firstname} {player.lastname}
          </h3>
          <img
            src={`https://localhost:5001/images/${player.image}`}
            alt={player.firstname}
          />
        </>
      );
    });
  };

  return <div>{displayPlayers()}</div>;
};

export default PlayerList;
