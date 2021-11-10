import { FC } from "react";
import { Card } from "react-bootstrap";
import { IPlayer } from "../../interfaces/IPlayers";

const PlayerItem: FC<IPlayer> = (player: IPlayer) => {
  return (
    <Card>
      <Card.Body>
        <Card.Img
          src={`https://localhost:5001/images/${player.image}`}
          alt={player.firstname}
          variant="top"
        />
        <Card.Title>
          {player.firstname} {player.lastname}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default PlayerItem;
