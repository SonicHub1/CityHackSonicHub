import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pianoman from "../assets/paino_player.jpg";

const ChatCard = () => {
  return (
    <Card class = "mb-3" >
      <Card.Body>
        <Row fluid>
          <Col className="col-1 center-block">
            <Card.Img variant="left" src={pianoman} style={{width: '7rem'}}></Card.Img>
          </Col>
          <Col>
            <Card.Title>Pianist nearby</Card.Title>
            <Card.Text>
              Hi, when would you like to meet up so we can jam!
            </Card.Text>
            <Button variant="primary">Reply</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ChatCard;
