import { FC } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNavigation: FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/players">
            Players
          </Nav.Link>
          <Nav.Link as={Link} to="/teamselection">
            Team Selection
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MainNavigation;
