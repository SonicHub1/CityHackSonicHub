import Carousel from "react-bootstrap/Carousel";
import pianoPlayer from "../assets/paino_player.jpg";
import slide1 from "../assets/dj_slide.jpg";
import slide2 from "../assets/dj_slide2.jpg";
import slide3 from "../assets/guitar_performance.jpg";

function NotifCarousell() {
  return (
    <Carousel className="mb-4">
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={slide1} alt="First slide" />
        <Carousel.Caption>
          <h3>Find musicians nearby</h3>
          <p>Discover new artists around you for collaboration.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={slide2} alt="Second slide" />
        <Carousel.Caption>
          <h3>Find Venues</h3>
          <p>Discover venues looking for performers.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={slide3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Find Teachers</h3>
          <p>
           Discover music teachers around you for improving skills.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default NotifCarousell;
