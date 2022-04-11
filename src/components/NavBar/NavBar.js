import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export const NavBar = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>Stopwatch App</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
