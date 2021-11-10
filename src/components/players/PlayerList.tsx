import { FC, useContext, useState } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import { PlayerContext } from "../../context/PlayerContext";
import { IPlayer } from "../../interfaces/IPlayers";
import { PlayerContextType } from "../../types/PlayerContextType";
import PlayerItem from "./PlayerItem";

const PlayerList: FC = () => {
  const { players } = useContext(PlayerContext) as PlayerContextType;
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

  const displayModal = (player: IPlayer) => {
    console.log("OK");
    return (
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {player.firstname} {player.lastname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={`https://localhost:5001/images/${player.image}`}
            alt={player.firstname}
          />
          <div>
            <label>Name</label>
            <input
              type="text"
              value={`${player.firstname} ${player.lastname}`}
            />
            <label>Age</label>
            <input type="text" value={player.age} />
            <label>Country</label>
            <input type="text" value={player.country} />
            <label>Position</label>
            <input type="text" value={player.position} />
          </div>
        </Modal.Body>
      </Modal>
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
