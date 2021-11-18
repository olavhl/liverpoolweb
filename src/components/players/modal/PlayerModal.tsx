import {Modal} from "react-bootstrap";
import {ModalForm} from "./ModalForm";
import Button from "@restart/ui/Button";
import {ModalProps} from "../../../types/PropsType";

export function PlayerModal(props: ModalProps) {
    return <Modal
        show={props.show}
        onHide={props.onHide}
        dialogClassName="modal-container"
    >
        <Modal.Header closeButton>
            <Modal.Title>Edit Player</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
            <img
                src={`https://localhost:5001/images/${props.player.image}`}
                alt={props.player.firstname}
                className={"player-modal-image"}
            />
            <ModalForm player={props.player} onUpdatePlayer={props.onUpdatePlayer}/>
        </Modal.Body>
        <Modal.Footer>
            <div className="modal-btn-container">
                <Button
                    className="modal-delete-btn modal-btn"
                    onClick={props.handleDelete}
                >
                    Delete Player
                </Button>

                <Button
                    className="modal-save-btn modal-btn"
                    onClick={props.onSaveChanges}
                >
                    Save Changes
                </Button>
                <Button
                    className="modal-close-btn modal-btn"
                    onClick={props.onHide}
                >
                    Close
                </Button>
            </div>
        </Modal.Footer>
    </Modal>;
}