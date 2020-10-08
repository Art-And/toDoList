import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

import '../assets/styles/components/Header.scss';
import mainLogo from '../assets/static/logo.png';
import userIcon from '../assets/static/userIcon.png';
import imgSearch from '../assets/static/imgSearch.png';

const Header = () => (
  <>
    <Navbar>
      <header className='header'>
        <Link to='/'>
          <img className='header__img' src={mainLogo} alt='mainLogo' />
        </Link>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='btn btn-light'>
            <img className='header__imgSearch' src={imgSearch} alt='imgSearch' />
          </Button>
        </Form>
        <div className='header__menu'>
          <div className='header__menu--profile'>
            <img src={userIcon} alt='options' />
            <p>Options</p>
          </div>
          <ul className='header__signup'>
            <li><Link to='/'>Graphic</Link></li>
            <li><Link to='/'>History Week</Link></li>
          </ul>
        </div>
      </header>
    </Navbar>
  </>
);

export default Header;
