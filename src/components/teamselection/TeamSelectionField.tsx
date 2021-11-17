import footballField from "../../assets/images/footballfield.png";
import addPlayer from '../../assets/images/addplayer.png';
import React from "react";

export function TeamSelectionField() {
    return ( <div className={"football-field"}>
            <img src={footballField} alt="Football Field"/>
            <div className="field-players-grid">
                    <div className="field-attackers">
                            <div>
                                    <img className={"add-player-button"} src={addPlayer} alt="Add player"/>
                            </div>
                            <div>
                                    <img className={"add-player-button"} src={addPlayer} alt="Add player"/>
                            </div>
                            <div>
                                    <img className={"add-player-button"} src={addPlayer} alt="Add player"/>
                            </div>
                    </div>
                    <div className="field-midfielders">
                            <div>
                                    <img className={"add-player-button"} src={addPlayer} alt="Add player"/>
                            </div>
                            <div>
                                    <img className={"add-player-button"} src={addPlayer} alt="Add player"/>
                            </div>
                            <div>
                                    <img className={"add-player-button"} src={addPlayer} alt="Add player"/>
                            </div>
                    </div>
                    <div className="field-defenders">
                            <div>
                                    <img className={"add-player-button"} src={addPlayer} alt="Add player"/>
                            </div>
                            <div>
                                    <img className={"add-player-button"} src={addPlayer} alt="Add player"/>
                            </div>
                            <div>
                                    <img className={"add-player-button"} src={addPlayer} alt="Add player"/>
                            </div>
                            <div>
                                    <img className={"add-player-button"} src={addPlayer} alt="Add player"/>
                            </div>
                    </div>
                    <div className="field-goalkeeper">
                            <div>
                                    <img className={"add-player-button"} src={addPlayer} alt="Add player"/>
                            </div>
                    </div>
            </div>
    </div>
    );
}