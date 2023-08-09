import './eventCard.component.css'

import { Link } from "react-router-dom";

import eventImg1 from '../assets/home/event1.png'

const EventCard = ({img}) => {
    return (
      <div className='card'>
        <img src={img} alt='' className='event_img' />
        <div className='event_content'>
          <h3 className='event_name'>VTAPP Designathon 2K22</h3>
          <p className='event_description'>
            Workshop on User Interface and User Experience (UI/UX) & Design
            models
          </p>
          <div className='event_keywords'>
            <Link to='' className='link keyword_link'>
              CSI Chapter
            </Link>
            <Link to='' className='link keyword_link'>
              Workshop
            </Link>
          </div>
          <h3 className='event_fee'>Entry Fee - $1.4</h3>
        <div className="register_btn_cnt">

          <Link className='link cta_btn '>Register Now</Link>
        </div>
        </div>
      </div>
    );
}

export default EventCard;