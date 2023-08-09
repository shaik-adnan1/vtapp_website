import { Link } from "react-router-dom";

const EventCard2 = ({ eventData }) => {
return (
    <>
    <div className="event_card_cont">
    {eventData.map((cur, i) => {
        return (
            <div className='card event_card'>
              <img src={cur.event_poster} alt='' className='event_img' />
              <div className='event_content'>
                <h3 className='event_name'>{cur.event_name}</h3>
                <p className='event_description'>
                  {cur.event_disc}
                </p>
                <div className='event_keywords'>
                  <Link to='' className='link keyword_link'>
                    CSI Chapter
                  </Link>
                  <Link to='' className='link keyword_link'>
                    Workshop
                  </Link>
                </div>
                <h3 className='event_fee'>Entry Fee - ${cur.event_fee}</h3>
                <div className='register_btn_cnt'>
                  <Link className='link cta_btn '>Register Now</Link>
                </div>
              </div>
            </div>

        );
      })}

    </div>
    
    </>

)
};

export default EventCard2;
