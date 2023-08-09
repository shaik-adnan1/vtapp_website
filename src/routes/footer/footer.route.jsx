import { Link } from "react-router-dom";
import "./footer.route.css";

import uniLogo from '../../assets/home/uni_logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <img src={uniLogo} alt='' className='uni_img' />
      <div className='contacts'>
        <h2 className='footer_head'>Contact</h2>
        <Link to='/' className='qr'>
          QR Scan
        </Link>
        <br />
        <p className='contact_phn'>
          Phone: <span className='active_span'>850-123-5021</span>
        </p>
        <p className='contact_Email'>
          Email: <span className='active_span'>vtapp.convenor@vitap.ac.in</span>
        </p>
        <p className='contact_Address'>
          Address:{" "}
          <span className='active_span'>VIT-AP University, Amaravati</span>
        </p>
      </div>
      <div className='social'>
        <div className='social_links'>
          <h2 className='footer_head'>Social</h2>
          <Link to='/' className='footer_icon'>
            <ion-icon name='logo-instagram'></ion-icon>
          </Link>
          <Link to='/' className='footer_icon'>
            <ion-icon name='logo-facebook'></ion-icon>
          </Link>
          <Link to='/' className='footer_icon'>
            <ion-icon name='logo-youtube'></ion-icon>
          </Link>
          <Link to='/' className='footer_icon'>
            <ion-icon name='logo-github'></ion-icon>
          </Link>
        </div>
        <p className='social_extra'>
          Check out our social media handles for more information & latest
          updates
        </p>
      </div>
    </div>
  );
};

export default Footer;
