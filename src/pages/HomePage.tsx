import {useContext, useState} from "react";
import {PlayerContext} from "../context/PlayerContext";
import {PlayerContextType} from "../types/PlayerContextType";
import {IPlayer} from "../interfaces/IPlayers";
import {Button} from "react-bootstrap";
import {RandomPlayer} from "../components/players/RandomPlayer";
import {ErrorView} from "../components/ErrorView";

const Home = () => {
    const {players, error} = useContext(PlayerContext) as PlayerContextType;
    const [randomPlayer, setRandomPlayer] = useState<IPlayer>()
    const [faded, setFaded] = useState(false)

    if (error) {
        return <ErrorView />
    }

    // Creating variables to be able to use animations
    const fade = faded ? 'fade' : '';
    const classes = `random-player ${fade}`

    const generateRandomPlayer = () => {
        const num = Math.floor(Math.random() * players.length);
        let playersCopy = [...players];
        setRandomPlayer(playersCopy[num])
        setFaded(true)
    }

  return (
    <div className={"home-container"}>
        <h1>Get a random player</h1>
        <Button className={"random-player-btn"} onClick={generateRandomPlayer}>Show Random Player</Button>
        <RandomPlayer randomPlayer={randomPlayer} className={classes}/>

    </div>
  );
};

export default Home;
