import Card from 'react-bootstrap/Card';
import imageUrl from '../assets/guitar_performance.jpg';
import Button from 'react-bootstrap/Button';
import '../styles/FeedCard.css'
function FeedCard(props) {
  const name = props.name
  const time = props.time
  const imagePath = props.imagePath
  const text = props.text
  return (
    <Card className='col mb-3'style={{ width: '25rem', backgroundColor: '#1e1d1d' }}>
      <Card.Body>
        <Card.Title style={{color: 'white'}}>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{time}</Card.Subtitle>
        <Card.Img variant="top" src= {imageUrl}/>
        <Card.Text style={{color: 'white'}}>
          {text}
        </Card.Text>
        <Button variant='primary'>Message</Button>
      </Card.Body>
    </Card>
  ); 
}

export default FeedCard;