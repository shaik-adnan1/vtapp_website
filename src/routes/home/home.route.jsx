import "./home.route.css";

import heroLogo from "../../assets/home/logo.png";

import secDecor from '../../assets/common/decor.png'

const Home = () => {
  return (
    <>
      <div className='section home_section'>
        <div className='hero_content'>
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
          <h1 className='about_section section_heading'>
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
      </div>
    </>
  );
};

export default Home;
