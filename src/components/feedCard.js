import Card from 'react-bootstrap/Card';
import imageUrl from '../assets/guitar_performance.jpg'
function FeedCard() {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Img variant="top" src= {imageUrl}/>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  ); 
}

export default FeedCard;