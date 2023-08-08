import './navigation.route.css';

import {Link, Outlet} from 'react-router-dom';
import { Fragment } from 'react';

import logo from '../../assets/home/logo.png'

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation_cont'>
          <Link to='/' className='logo'>
            <img src={logo} alt='' className='logo_img' />
          </Link>

          <div className='nav_links'>
            <Link className='nav_link active_link' to='/'>
              Home
            </Link>
            <Link className='nav_link' to='/About'>
              About
            </Link>
            <Link className='nav_link' to='/Events'>
              Events
            </Link>
            <Link className='nav_link' to='/Schedule'>
              Schedule
            </Link>
            <Link className='nav_link' to='/Team'>
              Team
            </Link>
            <Link className='nav_link' to='/Sponsors'>
              Sponsors
            </Link>
            <Link className='nav_link cta_btn' to='/Tickets'>Grab Tickets</Link>
          </div>
        </div>
        {/* <Outlet /> */}
      </Fragment>
    );
}

export default Navigation; 

