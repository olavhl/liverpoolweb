import "bootstrap/dist/css/bootstrap.min.css";
import { PlayerProvider } from "./context/PlayerContext";
import Routing from "./routing/Routing";
import "./style.css";

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
