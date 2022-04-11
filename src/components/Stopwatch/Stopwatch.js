import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Stopwatch.css";

export const Stopwatch = () => {
  return (
    <Container className="stopwatch_contatiner">
      <Row className="stopwatch_row">
        <Col className="stopwatch_col">
          <p>00:00:00</p>
        </Col>
      </Row>
    </Container>
  );
};
