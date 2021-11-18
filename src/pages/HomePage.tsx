import {useContext, useEffect, useState} from "react";
import {PlayerContext} from "../context/PlayerContext";
import {PlayerContextType} from "../types/PlayerContextType";
import PlayerItem from "../components/players/list/PlayerItem";
import {IPlayer} from "../interfaces/IPlayers";

const Home = () => {
    const {players} = useContext(PlayerContext) as PlayerContextType;
    const [randomPlayer, setRandomPlayer] = useState<IPlayer>()

    useEffect(() => {
        generateRandomPlayer()
    }, [players])

    const generateRandomPlayer = () => {
        const num = Math.floor(Math.random() * players.length);
        let playersCopy = [...players];
        setRandomPlayer(playersCopy[num])
    }

  return (
    <div>
      <h1>Get a random player</h1>
        {randomPlayer &&
        <div className={"random-player"}>
            <PlayerItem player={randomPlayer}/>
        </div>
        }
    </div>
  );
};

export default Home;
