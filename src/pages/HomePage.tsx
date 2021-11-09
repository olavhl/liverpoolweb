import PlayerList from "../components/players/PlayerList";

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
