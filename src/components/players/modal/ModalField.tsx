import {Form} from "react-bootstrap";
import React from "react";
import {ModalFieldProps} from "../../../types/PropsType";

export function ModalField(props: ModalFieldProps) {
    let newPlaceholder: string;

    if (typeof props.placeHolder === 'number') {
        newPlaceholder = String(props.placeHolder)
    } else {
        newPlaceholder = props.placeHolder
    }

    return <Form.Group>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
            name={props.name}
            type={props.type}
            onChange={props.onChange}
            placeholder={newPlaceholder}
        />
    </Form.Group>;
}