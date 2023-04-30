import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

import Wrapper from '../assets/wrappers/SmallSideBar';
import Logo from './Logo';

const SmallSidebar = () => {
  return (
    <Wrapper>
      <div className='sidebar-container show-sidebar'>
        <div className='content'>
          <button className='close-btn'>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className='nav-links'>
            nav
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
