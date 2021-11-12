import {IPlayer} from "../../interfaces/IPlayers";
import {Form} from "react-bootstrap";

export function ModalForm(props: { player: IPlayer }) {


    return <Form className="modal-text-container">
        <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
                name={"firstname"}
                type={"text"}
                value={props.player.firstname}
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
                name={"lastname"}
                type={"text"}
                value={props.player.lastname}
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control
                name={"age"}
                type={"text"}
                value={props.player.age}
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>Country</Form.Label>
            <Form.Control
                name={"country"}
                type={"text"}
                value={props.player.country}
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>Position</Form.Label>
            <Form.Control
                name={"position"}
                type={"text"}
                value={props.player.position}
            />
        </Form.Group>
    </Form>;
}