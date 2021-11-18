import "bootstrap/dist/css/bootstrap.min.css";
import { PlayerProvider } from "./context/PlayerContext";
import Routing from "./routing/Routing";
import "./style.css";
import {TeamSelectionProvider} from "./context/TeamSelectionContext";

function App() {
  return (
    <div>
      <PlayerProvider>
          <TeamSelectionProvider>
            <Routing />
          </TeamSelectionProvider>
      </PlayerProvider>
    </div>
  );
}

export default App;
