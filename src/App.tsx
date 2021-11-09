import "bootstrap/dist/css/bootstrap.min.css";
import { PlayerProvider } from "./context/PlayerContext";
import Routing from "./routing/Routing";

function App() {
  return (
    <div>
      <PlayerProvider>
        <Routing />
      </PlayerProvider>
    </div>
  );
}

export default App;
