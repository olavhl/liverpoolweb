import {Form} from "react-bootstrap";
import {ModalProps} from "../../types/PropsType";
import {ChangeEvent, useEffect, useState} from "react";
import {IPlayer} from "../../interfaces/IPlayers";
import {ModalField} from "./modal/ModalField";

export function ModalForm(props: ModalProps) {
    const [updatedPlayer, setUpdatedPlayer] = useState<IPlayer>(props.player);

    useEffect(() => {
        props.onUpdatePlayer(updatedPlayer)
    }, [props, updatedPlayer])

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
        }
    }

    return <Form className="modal-text-container">
        <ModalField onChange={handleUpdate} placeHolder={props.player.firstname} name={"firstname"} label={"First Name"} type={"text"} />
        <ModalField onChange={handleUpdate} placeHolder={props.player.lastname} name={"lastname"} label={"Last Name"} type={"text"} />
        <ModalField onChange={handleUpdate} placeHolder={props.player.age} name={"age"} label={"Age"} type={"number"} />
        <ModalField onChange={handleUpdate} placeHolder={props.player.country} name={"country"} label={"Country"} type={"text"} />
        <ModalField onChange={handleUpdate} placeHolder={props.player.position} name={"position"} label={"Position"} type={"text"} />
    </Form>;
}