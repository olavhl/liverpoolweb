import React, { useEffect, useState } from "react";
import PlayerList from "../components/shared/players/PlayerList";
import { PlayerProvider } from "../context/PlayerContext";
import { IPlayer } from "../interfaces/IPlayers";
import { playerService } from "../services/playerService";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <PlayerList />
    </div>
  );

  // const [players, setPlayers] = useState<IPlayer[]>([
  //   { id: "jup", firstname: "Ola", lastname: "Nordmann" },
  // ]);

  // useEffect(() => {
  //   getPlayers();
  // }, []);

  // const getPlayers = async () => {
  //   const result = await playerService.getAllPlayers();
  //   setPlayers(result);
  // };

  // const createPlayerList = () => {
  //   return players.map((player: IPlayer, key: number) => {
  //     return (
  //       <h4 key={key}>
  //         {player.firstname} {player.lastname}
  //       </h4>
  //     );
  //   });
  // };

  // return (
  //   <div>
  //     <h1>Liverpool jup</h1>
  //     {createPlayerList()}
  //   </div>
  // );
};

export default Home;
