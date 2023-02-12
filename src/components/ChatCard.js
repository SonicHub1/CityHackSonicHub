import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ChatCard = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Guitarist nearby</Card.Title>
        <Card.Text>
          Hi, when would you like to meet up so we can jam!
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ChatCard