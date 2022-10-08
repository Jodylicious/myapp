import React from 'react';
import ChatCard from '../components/ChatCard'
import Post1 from '../components/Announcements/Post1';
import Post2 from '../components/Announcements/Post2';
import Post3 from '../components/Announcements/Post3';

const Home = () => {
    return (
        <div class="row-home">
            <div class="col-home">
                <ChatCard />
            </div>

            <div class="col-home">
                <div className="pageHeader">ANNOUNCEMENTS</div>
                <Post3 /><br />
                <Post2 /><br />
                <Post1 /><br />
            </div>
        </div>
    );
};

export default Home;