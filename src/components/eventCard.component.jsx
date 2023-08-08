const eventCard = () => {
    return (
      <div className='car'>
        <img src='' alt='' className='event_img' />
        <h3 className='event_name'>Event 1</h3>
        <p className='event_description'>
          Workshop on User Interface and User Experience (UI/UX) & Design models
        </p>
        <div className="event_keywords">
            <Link to='' className="link_btn">CSI Chapter</Link>
            <Link to='' className="link_btn">Workshop</Link>
        </div>
        <h3 className="event_fee">
            Entry Fee - $1.4
        </h3>
        <Link className="cta_btn">Register Now</Link>
      </div>
    );
}

export default eventCard;