import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

import main from '../assets/images/Job-Seeker4.svg';

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className='container page'>
        {/* info */}

        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>

          <p>
            Edison bulb sustainable marxism hexagon, raw denim hell of affogato
            pug four loko church-key austin. Bespoke selvage adaptogen, four
            loko everyday carry kickstarter meditation yuccie. XOXO copper mug
            pinterest, irony beard tattooed shoreditch coloring book shaman
            chia.
          </p>

          <Link to='/register' className='btn btn-hero'>Login / Register</Link>
        </div>

        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
}

export default Landing;
