import React, { useEffect } from "react";
import IBITS from './assets/images/puporg/IBITS.jpg';
import ACES from './assets/images/puporg/ACES.png';
import HRSS from './assets/images/puporg/HRSS.png';
import JPIA from './assets/images/puporg/JPIA.jpg';
import PIIE from './assets/images/puporg/PIIE.jpg';
import CSC from './assets/images/puporg/CSC.jpg';
import YES from './assets/images/puporg/YES.png';

const PUPOrg = ({ setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
    }));
  }, [setState]);

  return (
    <div className='orgbubble'>
      You can visit their facebook page for more updates.
      <div className='orgSlide'>


        <div className='orgPage'>
          <img src={(IBITS)} width='80px' alt="ibits" ></img>
          <div className='orgName'>Institute of Bachelors in Information Technology Studies (IBITS)</div>
          <div className='orgBtn'>
            <button className='orgFb'><a href="https://web.facebook.com/iBITSPUPBC">Visit Page</a></button>
          </div>
        </div>

        <div className='orgPage'>
          <img src={(ACES)} width='80px' alt='aces'></img>
          <div className='orgName'>Association of Computer Engineering Students (ACES) </div>
          <div className='orgBtn'>
            <button className='orgFb'><a href="https://web.facebook.com/acespupbc">Visit Page</a></button>
          </div>
        </div>

        <div className='orgPage'>
          <img src={(PIIE)} width='80px' alt='piie'></img>
          <div className='orgName'>Philippine Institute of Industrial Engineers (PIIE) </div>
          <div className='orgBtn'>
            <button className='orgFb'><a href="https://web.facebook.com/PIIEPUPBSC">Visit Page</a></button>
          </div>
        </div>

        <div className='orgPage'>
          <img src={(JPIA)} width='80px' alt='jpia'></img>
          <div className='orgName'> Junior Philippine Institute of Accountants (JPIA)</div>
          <div className='orgBtn'>
            <button className='orgFb'><a href="https://web.facebook.com/PUPJPIABinan"> Visit Page</a></button>
          </div>
        </div>

        <div className='orgPage'>
          <img src={(HRSS)} width='80px' alt='hrss'></img>
          <div className='orgName'>Human Resource Students Society (HRSS)</div>
          <div className='orgBtn'>
            <button className='orgFb'><a href="https://web.facebook.com/HRSSPUPBC">Visit Page</a> </button>
          </div>
        </div>

        <div className='orgPage'>
          <img src={(YES)} width='80px' alt='yes'></img>
          <div className='orgName'>Young Educators' Society (YES) </div>
          <div className='orgBtn'>
            <button className='orgFb'><a href="https://web.facebook.com/pupbcyesorg"> Visit Page</a></button>
          </div>
        </div>

        <div className='orgPage'>
          <img src={(CSC)} width='80px' alt='csc'></img>
          <div className='orgName'>Central Student Council (CSC) </div>
          <div className='orgBtn'>
            <button className='orgFb'><a href="https://web.facebook.com/CSCPUPBN"> Visit Page</a> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PUPOrg;