import { FC } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/HomePage";
import PlayersPage from "../pages/PlayersPage";
import TeamSelectionPage from "../pages/TeamSelectionPage";

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/teamselection" element={<TeamSelectionPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default Routing;
