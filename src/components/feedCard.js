import imageUrl from '../assets/guitar_performance.jpg'
const FeedCard = (props) => {
  return (
    <div class="card">
      <div className="container">
        <img className='feedCardImage' src={imageUrl} />
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
};

export default FeedCard;
