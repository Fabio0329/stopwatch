import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Stopwatch.css";

export const Stopwatch = () => {
  return (
    <Container className="stopwatch_contatiner">
      <Row className="stopwatch_row">
        <Col className="stopwatch_col">
          <h1>00:00:00</h1>
          <div>
            <Button>test</Button>
            <Button>test</Button>
            <Button>test</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
