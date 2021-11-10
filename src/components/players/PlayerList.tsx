import { FC, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { PlayerContext } from "../../context/PlayerContext";
import { IPlayer } from "../../interfaces/IPlayers";
import { PlayerContextType } from "../../types/PlayerContextType";
import PlayerItem from "./PlayerItem";

const PlayerList: FC = () => {
  const { players } = useContext(PlayerContext) as PlayerContextType;

  const displayPlayers = () => {
    console.log(players);

    return players.map((player: IPlayer, key) => {
      return (
        <Col key={key} md="6" lg="4" xl="3">
          <PlayerItem {...player} />
        </Col>
      );
    });
  };

  return <Row>{displayPlayers()}</Row>;
};

export default PlayerList;
