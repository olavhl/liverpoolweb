import {FC, useContext, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {PlayerContext} from "../../context/PlayerContext";
import {IPlayer} from "../../interfaces/IPlayers";
import {PlayerContextType} from "../../types/PlayerContextType";
import PlayerItem from "./PlayerItem";
import {PlayerModal} from "./PlayerModal";

const PlayerList: FC = () => {
  const { players, deletePlayer } = useContext(PlayerContext) as PlayerContextType;
  const [showModal, setShowModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<IPlayer>({
    firstname: "",
    lastname: "",
    age: 0,
    country: "",
    position: "",
    image: "",
  });

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleClick = (player: IPlayer) => {
    setSelectedPlayer(player);
    handleShowModal();
  };

  const removePlayer = () => {
    if (showModal) {
      deletePlayer(selectedPlayer);
      setShowModal(false);
    }
  };

  const displayModal = (player: IPlayer) => {
    return (
      <PlayerModal show={showModal} onHide={handleCloseModal} player={player} onClick={removePlayer}/>
    );
  };

  const displayPlayers = () => {
    console.log(players);

    return players.map((player: IPlayer, key) => {
      return (
        <Col key={key} md="6" lg="4" xl="3">
          <PlayerItem player={player} handleClick={handleClick} />
        </Col>
      );
    });
  };

  return (
    <>
      <Row>{displayPlayers()}</Row>
      {showModal && displayModal(selectedPlayer)}
    </>
  );
};

export default PlayerList;
