import React from 'react';
import './index.scss';
import logo from './assets/logo.svg';

export default () => (
  <nav className='navigation'>
    <a href='/' aria-label='To Homepage' className='navigation__home-link'>
      <img className='navigation__logo' alt='Pleo Logo' src={logo} />
    </a>
  </nav>
)
