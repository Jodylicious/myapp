import * as React from 'react';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { Check } from '@mui/icons-material';

export default function DividerText() {
    const aboutUs = (
        <div className='aboutUs'>
            <h5>
                <Check /> Optimize performance and fixed known bugs
            </h5>
        </div>
    );
    const description = (
        <div className='description'>
            <h5>
                Check PUPBC recent school events, courses offered, and more in this app made for PUP students and for those who want to become one.
                The ASKOLAR Chatbot App keeps necessary school information in this free and easy-to-use app. With this app you can now:
                <ul>
                    <li>Ask question about school related information</li>
                    <li>Keep track of the coming school events</li>
                    <li>Gives instruction on how to enroll on the semester</li>
                    <li>Helps you decide and see what courses offers in the institution</li>
                    <li>And gives you a background information about the university.</li>
                </ul>
            </h5>
        </div>
    );
    const appInfo = (
        <div className='appInfo'>
            <h5>
                <h4>Version: </h4>
                <p>1.0.0</p>
                <h4>Updated On:</h4>
                <p>September 10, 2022</p>
                <h4>Offered By:</h4>
                <p>PUP Binan Campus</p>
                <h4>Developed By:</h4>
                <p>PUPBC-BSIT Students </p>
            </h5>
        </div>
    );
    const disclamer = (
        <div className='disclamer'>
            <h5>
                <p>The information contained herein is not on real-time and for information purposes only the information may not be up to date and requires further validation from the school administrator.</p>
                <p>If you have further questions regarding in the app that can't answer your concerns, please do not hesitate to get in touch with the school administrator.</p>
            </h5>
        </div>
    );

    return (
            <div className='aboutApp'>
                <Divider textAlign='center' >
                    <h3 className='chipDivider'>
                        <Chip label="WHAT'S NEW?" />
                    </h3>
                </Divider>
                {aboutUs}
                <Divider textAlign='center' >
                    <h3 className='chipDivider'>
                        <Chip label="DESCRIPTION" />
                    </h3>
                </Divider>
                {description}
                <Divider textAlign='center' >
                    <h3 className='chipDivider'>
                        <Chip label="APP INFO" />
                    </h3>
                </Divider>
                {appInfo}
                <Divider textAlign='center' >
                    <h3 className='chipDivider'>
                        <Chip label="DISCLAMER" />
                    </h3>
                </Divider>
                {disclamer}
            </div>
    );
}
