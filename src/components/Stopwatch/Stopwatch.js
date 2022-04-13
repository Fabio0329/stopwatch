import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Stopwatch.css";

export const Stopwatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const startTimer = () => {
    if (!isActive) {
      setIsActive(true);
      const newIntervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  const pauseTimer = () => {
    if (isActive) {
      setIsActive(false);
      clearInterval(intervalId);
    }
  };

  const resetTime = () => {
    clearInterval(intervalId);
    setIsActive(false);
    setCount(0);
    setIntervalId(0);
  };

  return (
    <Container className="stopwatch_contatiner">
      <Row className="stopwatch_row">
        <Col className="stopwatch_col">
          <h1>{`00:00:${count}`}</h1>
          <div>
            <Button onClick={startTimer}>Start</Button>
            <Button onClick={pauseTimer}>Pause</Button>
            <Button onClick={resetTime}>Reset</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
