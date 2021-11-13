import {Form} from "react-bootstrap";
import {ModalProps} from "../../types/PropsType";
import {ChangeEvent, useState} from "react";
import {IPlayer} from "../../interfaces/IPlayers";

export function ModalForm(props: ModalProps) {
    const [updatedPlayer, setUpdatedPlayer] = useState<IPlayer>(props.player);

    const handleUpdate = (event: ChangeEvent<HTMLInputElement>) => {
        let { name } = event.target;

        if (event.target.value !== "") {

            switch (name) {
                case "firstname":
                    setUpdatedPlayer({...updatedPlayer, firstname: event.target.value});
                    break;
                case "lastname":
                    setUpdatedPlayer({...updatedPlayer, lastname: event.target.value});
                    break;
                case "age":
                    setUpdatedPlayer({...updatedPlayer, age: parseInt(event.target.value)});
                    break;
                case "country":
                    setUpdatedPlayer({...updatedPlayer, country: event.target.value});
                    break;
                case "position":
                    setUpdatedPlayer({...updatedPlayer, position: event.target.value});
                    break;
            }
            props.onUpdatePlayer(updatedPlayer)
        }


    }

    return <Form className="modal-text-container">
        <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
                name={"firstname"}
                type={"text"}
                onChange={handleUpdate}
                placeholder={props.player.firstname}
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
                name={"lastname"}
                type={"text"}
                onChange={handleUpdate}
                placeholder={props.player.lastname}
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control
                name={"age"}
                type={"text"}
                onChange={handleUpdate}
                placeholder={String(props.player.age)}
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>Country</Form.Label>
            <Form.Control
                name={"country"}
                type={"text"}
                onChange={handleUpdate}
                placeholder={props.player.country}
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>Position</Form.Label>
            <Form.Control
                name={"position"}
                type={"text"}
                onChange={handleUpdate}
                placeholder={props.player.position}
            />
        </Form.Group>
    </Form>;
}