import React from 'react';

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

          <button className='btn btn-hero'>Login / Register</button>
        </div>

        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
}

// const Wrapper = styled.main`
//   nav {
//     width: var(--fluid-width);
//     max-width: var(--max-width);
//     margin: 0 auto;
//     height: var(--nav-height);
//     display: flex;
//     align-items: center;
//   }
//   .page {
//     min-height: calc(100vh - var(--nav-height));
//     display: grid;
//     align-items: center;
//     margin-top: -3rem;
//   }

//   h1 {
//     font-weight: 700;
//     span {
//       color: var(--primary-500);
//     }
//   }
//   p {
//     color: var(--grey-600);
//   }
//   .main-img {
//     display: none;
//   }
//   @media (min-width: 992px) {
//     .page {
//       grid-template-columns: 1fr 1fr;
//       column-gap: 3rem;
//     }
//     .main-img {
//       display: block;
//     }
//   }
// `;

export default Landing;
