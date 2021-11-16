import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";

export function RadioPositionButtons(props: { selectRadioButton: (position: string) => void }) {
    const handleToggleButton = (position: string) => {
        props.selectRadioButton(position)
    }

    return <ToggleButtonGroup type={"radio"} name={"Toggle-buttons"}>
        <ToggleButton onClick={() => handleToggleButton("Goalkeeper")} value={"Goalkeeper"}>Goalkeeper</ToggleButton>
        <ToggleButton onClick={() => handleToggleButton("Defender")} value={"Defender"}>Defender</ToggleButton>
        <ToggleButton onClick={() => handleToggleButton("Midfielder")} value={"Midfielder"}>Midfielder</ToggleButton>
        <ToggleButton onClick={() => handleToggleButton("Attacker")} value={"Attacker"}>Attacker </ToggleButton>
    </ToggleButtonGroup>;
}