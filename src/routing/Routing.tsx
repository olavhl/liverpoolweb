import { FC } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNavigation from "../components/shared/MainNavigation";
import CreatePlayerPage from "../pages/CreatePlayerPage";
import Home from "../pages/HomePage";
import PlayersPage from "../pages/PlayersPage";
import TeamSelectionPage from "../pages/TeamSelectionPage";
import TeamSelectionOverviewPage from "../pages/TeamSelectionOverviewPage";
import TeamSelectionDetails from "../pages/TeamSelectionDetails";

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/createplayers" element={<CreatePlayerPage />} />
          <Route path="/teamselection" element={<TeamSelectionPage />} />
          <Route path="/teamselection/:id" element={<TeamSelectionDetails />} />
          <Route path="/teamselectionoverview" element={<TeamSelectionOverviewPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default Routing;
