import React from 'react';
import { NavLink } from 'react-router-dom';

import '../assets/styles/components/Footer.scss';

const Footer = () => (
  <>
    <footer className='footer'>
      <NavLink className='footer__a' extract to='/'>Contact</NavLink>
      <NavLink className='footer__a' extract to='/'>About</NavLink>
      <NavLink className='footer__a' extract to='/'>Privacy</NavLink>
    </footer>
  </>
);

export default Footer;
