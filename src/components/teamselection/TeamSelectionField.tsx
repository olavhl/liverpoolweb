import footballField from "../../assets/images/footballfield.png";
import React from "react";

export function TeamSelectionField() {
    return ( <div className={"football-field"}>
            <img src={footballField} alt="Football Field"/>
            <div className="field-players-grid">
                    <div className="field-attackers">
                            <div>Hei</div>
                            <div>Hei</div>
                            <div>Hei</div>
                    </div>
                    <div className="field-midfielders">
                            <div>Hei</div>
                            <div>Hei</div>
                            <div>Hei</div>
                    </div>
                    <div className="field-defenders">
                            <div>Hei</div>
                            <div>Hei</div>
                            <div>Hei</div>
                            <div>Hei</div>
                    </div>
                    <div className="field-goalkeeper">
                        <div>Hei</div>
                    </div>
            </div>
    </div>
    );
}