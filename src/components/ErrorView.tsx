import {Alert} from "react-bootstrap";

export function ErrorView() {
    return (
        <Alert variant={"danger"}  className={"error-view"}>
            Something went wrong..
            Have you remembered to run the server?
        </Alert>
    )
}