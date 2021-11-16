import {FC, useContext, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {PlayerContext} from "../../context/PlayerContext";
import {IPlayer} from "../../interfaces/IPlayers";
import {PlayerContextType} from "../../types/PlayerContextType";
import PlayerItem from "./PlayerItem";
import {PlayerModal} from "./PlayerModal";

const PlayerList: FC = () => {
  const { players, deletePlayer, updatePlayer } = useContext(PlayerContext) as PlayerContextType;
  const [showModal, setShowModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<IPlayer>({
    firstname: "",
    lastname: "",
    age: 0,
    country: "",
    position: "",
    image: "",
  });
  const [updatedPlayer, setUpdatedPlayer] = useState<IPlayer>({
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

  const onChanged = (player: IPlayer) => {
    setUpdatedPlayer(player)
  }

  const onSaveChanges = () => {
    updatePlayer(updatedPlayer);
    handleCloseModal();
  }

  const displayModal = (player: IPlayer) => {
    return (
      <PlayerModal show={showModal} onHide={handleCloseModal} player={player} handleDelete={removePlayer} onUpdatePlayer={onChanged} onSaveChanges={onSaveChanges}/>
    );
  };

  const displayPlayerFromPosition = (position: String) => {
    return players.map((player:IPlayer, key) => {
      if (player.position.toLocaleLowerCase() === position.toLocaleLowerCase()) {
        return (
            <Col key={key} md="6" lg="4" xl="3">
              <PlayerItem player={player} handleClick={handleClick} />
            </Col>
        )
      }
    })
  }

  return (
    <>
      <Row>{displayPlayerFromPosition("Goalkeeper")}</Row>
      <hr/>
      <Row>{displayPlayerFromPosition("Defender")}</Row>
      <hr/>
      <Row>{displayPlayerFromPosition("Midfielder")}</Row>
      <hr/>
      <Row>{displayPlayerFromPosition("Attacker")}</Row>
      <hr/>
      <Row>{displayPlayerFromPosition("")}</Row>
      {showModal && displayModal(selectedPlayer)}
    </>
  );
};

export default PlayerList;
