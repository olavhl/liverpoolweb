import Button from "@restart/ui/esm/Button";
import { FC } from "react";
import { Card } from "react-bootstrap";
import { IPlayer } from "../../interfaces/IPlayers";

type PlayerProps = {
  player: IPlayer;
  handleClick: (player: IPlayer) => void;
};

const PlayerItem: FC<PlayerProps> = ({ player, handleClick }: PlayerProps) => {
  const clickedElement = (player: IPlayer) => {
    handleClick(player);
  };
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
        <Button type="button" onClick={() => clickedElement(player)}>
          OK
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PlayerItem;
