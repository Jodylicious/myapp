import React from 'react';
import ChatCard from '../components/ChatCard'
import Post1 from '../components/Announcements/Post1';
import Post2 from '../components/Announcements/Post2';
import Post3 from '../components/Announcements/Post3';
import Post4 from '../components/Announcements/Post4';


const Home = () => {
    return (
        <div class="row-home">
            {/* COLUMN 1 - START CONVO */}
            <div class="col-home">
                <ChatCard />
            </div>

            {/* COLUMN 2 - ANNOUNCEMENTS */}
            <div class="col-home">
                <div className="pageHeader">ANNOUNCEMENTS</div>
                <div className='announce'>
                    <Post2 /><br />
                    <Post4 /><br />
                    <Post1 /><br />
                    <Post3 /><br />      
                </div>
            </div>
        </div>
    );
};

export default Home;