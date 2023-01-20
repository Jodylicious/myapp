import React, { useEffect } from "react";
import OSAS from './assets/images/puporg/OSAS.jpg';
import campus from './assets/images/campus.png';
import ISKOM from './assets/images/puporg/ISKOM.jpg';
import CSC from './assets/images/puporg/CSC.jpg';
import puplogo from './assets/images/puplogo.png';

const Webpage = ({ setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
    }));
  }, [setState]);

  return (
    <div className='orgbubble'>
      Here's the official PUPBC websites, you can visit:
      <div className='orgSlide'>

        <div className='orgPage'>
          <img src={(puplogo)} width='80px' alt="ibits" ></img>
          <div className='orgName'>PUPBC Official Facebook Page</div>
          <div className='orgBtn'>
            <button className='orgFb'><a href='https://web.facebook.com/PUP-Bi%C3%B1an-Page-101117505176956'>Visit Page</a></button>
          </div>
        </div>

        <div className='orgPage'>
          <img src={(OSAS)} width='80px' alt='osas'></img>
          <div className='orgName'> PUPBC Student Affairs and Services</div>
          <div className='orgBtn'>
            <button className='orgFb'><a href="https://web.facebook.com/HSASPUPBC"> Visit Page</a></button>
          </div>
        </div>

        <div className='orgPage'>
          <img src={(CSC)} width='80px' alt='csc'></img>
          <div className='orgName'>Central Student Council</div>
          <div className='orgBtn'>
            <button className='orgFb'><a href="https://web.facebook.com/CSCPUPBN">Visit Page</a></button>
          </div>
        </div>

        <div className='orgPage'>
          <img src={(campus)} width='80px' height={70} alt='pupbccom'></img>
          <div className='orgName'>PUPBC Community Page </div>
          <div className='orgBtn'>
            <button className='orgFb'><a href='https://web.facebook.com/groups/pupbccommunity'>Visit Page</a></button>
          </div>
        </div>

        <div className='orgPage'>
          <img src={(ISKOM)} width='80px' height={70} alt='iskom'></img>
          <div className='orgName'>PUPBC ISKOMUNITY A.Y 2022-2023</div>
          <div className='orgBtn'>
            <button className='orgFb'><a href='https://web.facebook.com/groups/519226440018420'>Visit Page</a></button>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Webpage;