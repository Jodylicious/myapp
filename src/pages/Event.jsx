import React from 'react';
import Post1 from '../components/Announcements/Post1';
import Post2 from '../components/Announcements/Post2';
import Post3 from '../components/Announcements/Post3';
import Post4 from '../components/Announcements/Post4';
import Post5 from '../components/Announcements/Post5';
import Event1 from '../components/Announcements/Event1';
import Event2 from '../components/Announcements/Event2';
import Event3 from '../components/Announcements/Event3';
import { FaGooglePlusSquare, FaInstagramSquare, FaFacebookSquare, FaLocationArrow, FaGlobe, FaBook, FaEnvelope } from 'react-icons/fa';


const Event = () => {
    return (
        <div class="row-home">
            {/* COLUMN 2 - ANNOUNCEMENTS */}
            <div class="col-home">
                <div className="pageHeader">ANNOUNCEMENTS</div>
                <div className='announce'>
                    <Post5 /><br />
                    <Post2 /><br />
                    <Post4 /><br />
                    <Post1 /><br />
                    <Post3 /><br />
                    <Event3 /><br />
                    <Event2 /><br />
                    <Event1 /><br />
                </div>
            </div>

            {/* CONTACT INFO / RELATED LINKS */}
            <div class="col-home">
                <div class="contactInfo">
                    <h4>LOCATION</h4>
                    <p><FaLocationArrow />	Brgy. Zapote, 4024 Biñan City, Laguna, Philippines</p>
                    <h4>RELATED LINKS</h4>
                    <div>
                        <p><FaFacebookSquare /> <a href="https://web.facebook.com/profile.php?id=100070145051782"> Official PUPBC Facebook Page</a></p>
                        <p><FaFacebookSquare /> <a href="https://web.facebook.com/HSASPUPBC">PUPBC Student Affairs and Services</a></p>
                        <p><FaFacebookSquare /> <a href="https://web.facebook.com/CSCPUPBN">Central Student Council - PUP Biñan</a></p>
                        <p><FaGooglePlusSquare /> cscpupbn@gmail.com</p>
                        <p><FaGooglePlusSquare /> hsaspupbc@gmail.com</p>
                        <p><FaEnvelope /> pupbinancampus@yahoo.com</p>
                        <p><FaInstagramSquare /> <a href="https://www.instagram.com/cscpupbn/?hl=en">instagram.com/cscpupbn</a></p>
                        <p><FaBook /> <a href="https://www.pup.edu.ph/iapply/">PUP iApply</a></p>
                        <p><FaGlobe /> <a href="http://www.pup.edu.ph">Official PUP Website</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;