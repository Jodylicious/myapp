import React from 'react';
import DividerText from '../components/DividerText';
import Card from 'react-bootstrap/Card';

const About = () => {
    return (
        <div className='container'>
            <div className="pageHeader">ABOUT THIS APP</div>
            <Card style={{ width: '100%' }} className='divSection'>
                <DividerText />
            </Card>
        </div>
    );
};

export default About;