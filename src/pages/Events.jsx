import React from 'react';
import { FaGooglePlusSquare, FaInstagramSquare, FaFacebookSquare, FaLocationArrow, FaGlobe, FaBook } from 'react-icons/fa';
import Event1 from '../components/Announcements/Event1';
import Event2 from '../components/Announcements/Event2';

const Events = () => {
    return (
        <div classname="row-home" >
            <div class="col-home">
            <div className="pageHeader">EVENTS</div>
                <div class="card"> <Event1 /></div>
                <div class="card"> <Event2 /></div>
            </div>
            <div class="col-home">
                <div class="contactInfo">
                    <h4>LOCATION</h4>
                    <p><FaLocationArrow />	Brgy. Zapote, 4024 Biñan City, Laguna, Philippines</p>
                    <h4>RELATED LINKS</h4>
                    <div>
                        <p><FaFacebookSquare /> <a href="https://web.facebook.com/CSCPUPBN">Central Student Council - PUP Biñan</a></p>
                        <p><FaGooglePlusSquare /> cscpupbn@gmail.com</p>
                        <p><FaInstagramSquare /> <a href="https://www.instagram.com/cscpupbn/?hl=en">instagram.com/cscpupbn</a></p>
                        <p><FaBook /> <a href="https://www.pup.edu.ph/iapply/">PUP iApply</a></p>
                        <p><FaGlobe /> <a href="http://www.pup.edu.ph">Official PUP Website</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;