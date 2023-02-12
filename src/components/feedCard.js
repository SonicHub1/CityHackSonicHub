import Card from 'react-bootstrap/Card';
import imageUrl from '../assets/guitar_performance.jpg';
import Button from 'react-bootstrap/Button';
import '../styles/FeedCard.css'
function FeedCard() {
  return (
    <Card style={{ width: '25rem', backgroundColor: '#1e1d1d' }}>
      <Card.Body>
        <Card.Title style={{color: 'white'}}>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Img variant="top" src= {imageUrl}/>
        <Card.Text style={{color: 'white'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant='primary'>Message</Button>
      </Card.Body>
    </Card>
  );
}

export default FeedCard;