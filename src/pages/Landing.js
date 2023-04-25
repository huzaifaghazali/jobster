import React from 'react';

import logo from '../assets/images/logo.svg';
// import main from '../assets/images/main.svg'
import main from '../assets/images/Job-Seeker4.svg';

function Landing() {
  return (
    <main>
      <nav>
        <img src={logo} alt='jobster logo' className='logo' />
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

          <button className="btn btn-hero">
            Login / Register
          </button>
        </div>

        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </main>
  );
}

export default Landing;
