import { Col, Container, Row } from "react-bootstrap";
import ChatCard from "../components/ChatCard";
import NotifCarousell from "../components/NotifCarousell";

const Chat = () => {
  return (
    <Container fluid>
      <Row>
        <h1>Chat Page</h1>
        <ChatCard styles={{margin: 20}}></ChatCard>
        <ChatCard className="chatboxes"></ChatCard>
        <ChatCard className="chatboxes"></ChatCard>
        <ChatCard className="chatboxes"></ChatCard>

      </Row>
    </Container>
  );
};

export default Chat;
