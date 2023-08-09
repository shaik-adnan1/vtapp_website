import "./home.route.css";

import { Link } from "react-router-dom";
import EventCard from "../../components/eventCard.component.jsx";

import heroLogo from "../../assets/home/logo.png";
import secDecor from "../../assets/common/decor.png";

import eventImg1 from "../../assets/home/event1.png";
import merch1 from '../../assets/home/merch1.png'
import merch2 from '../../assets/home/merch2.png'
import MerchCard from "../../components/merch.component";

const eventData = 
  {
    event_name: "VTAPP Designathon 2K22",
    event_disc: `Workshop on User Interface and User Experience (UI/UX) & Design
            models'`,
    event_keywords: "CSI Chapter",
    event_fee: 1.4
  };




const Home = () => {
  return (
    <>
      <div className='home_section'>
        <div className='section hero_content'>
          <div className='home_hero'>
            <img className='hero_img' src={heroLogo} alt='Vtapp Logo' />
            <div className='hero_info'>
              <h1>International Tech Fest</h1>
              <h3>December 10 & 11</h3>
            </div>
          </div>
        </div>
        <div className='home_about section'>
          <img src={secDecor} alt='' className='section_decor section_decor1' />
          <img src={secDecor} alt='' className='section_decor section_decor2' />
          <h1 className='about_heading section_heading'>
            About <span className='heading_span'>VTAPP</span>
          </h1>
          <p className='about_sec_content'>
            Welcome to VTAPP 2022! VIT AP University’s annual technical fest is
            back with a bang! Join us in celebrating innovation, knowledge,
            technology, and diversity through a multitude of events which will
            give students a platform to showcase their learning and demonstrate
            their technical skills. This year’s theme is “The Matrix”. Much like
            how the body, the mind and the brain sync together to reflect power,
            individuality, and humanity in the matrix, at VTAPP, infrastructural
            facilities, students and ideas will come together to create magic.
            <br />
            Embark on an experiential journey as we discover our potential and
            infinite opportunities in engineering. With over 70+ events,
            workshops, activity stalls and tech shows as well as a prize pool of
            upto 20 lakh rupees, VTAPP is all set to become one of the biggest
            confluence of students in the region.
            <br />
            <br /> Mark your calendars and pack your bags to join us as we
            celebrate technology!
          </p>
          <div className='about_content_details'>
            <p className='about_event_timing'>When: 10-11 December 2022</p>
            <p className='about_event_venue'>
              Where: VIT-AP University, Amaravati, Andhra Pradesh
            </p>
          </div>
        </div>
        <div className='section home_event'>
          <img src={secDecor} alt='' className='section_decor section_decor1' />
          <img src={secDecor} alt='' className='section_decor section_decor2' />
          <h1 className='event_heading section_heading'>Events</h1>
          <div className='event_cards'>
            <EventCard img={eventImg1} />
            <EventCard img={eventImg1} />
          </div>
          <div className='explore_event_btn'>
            <Link to='/events' className='cta_btn link explore_btn'>
              Explore events
            </Link>
          </div>
        </div>
        <div className='section home_merch'>
          <img src={secDecor} alt='' className='section_decor section_decor1' />
          <img src={secDecor} alt='' className='section_decor section_decor2' />
          <h1 className='event_heading section_heading'>
            <span className='heading_span'>Merch</span>
          </h1>
          <div className='event_cards'>
            <MerchCard img={merch1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
