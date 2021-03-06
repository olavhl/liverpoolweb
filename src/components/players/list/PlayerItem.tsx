import Button from "@restart/ui/esm/Button";
import { FC } from "react";
import { Card } from "react-bootstrap";
import { IPlayer } from "../../../interfaces/IPlayers";
import {PlayerProps} from "../../../types/PropsType";

const PlayerItem: FC<PlayerProps> = ({ player, handleClick }: PlayerProps) => {
  const clickedElement = (player: IPlayer) => {
    if (handleClick){
      handleClick(player);
    }
  };

  return (
    <Card className="cards">
      <Card.Body>
        <Card.Img
          src={`https://localhost:5001/images/${player.image}`}
          alt={player.firstname}
          variant="top"
        />
        <Card.Title className="card-title">
          {player.firstname} {player.lastname}
        </Card.Title>
        <Card.Text>
          Age: {player.age} <br />
          Country: {player.country} <br />
          Position: {player.position}
        </Card.Text>

        {handleClick && <Button
            className="card-btn"
            type="button"
            onClick={() => clickedElement(player)}
        >
          Edit Player
        </Button>}
      </Card.Body>
    </Card>
  );
};

export default PlayerItem;
