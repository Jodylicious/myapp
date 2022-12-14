import * as React from 'react';
import { Card, CardContent, CardActions } from '@mui/material';
import { FaMapPin } from 'react-icons/fa';
import { CCardHeader } from '@coreui/react';
import ModalImage from "react-modal-image";
import yearend from './events/yearend.jpg';

export default function Announcement() {
    return (
        <Card style={{ width: '100' }}>
            <CCardHeader className='postHeader'>𝘚𝘖𝘔𝘌𝘛𝘏𝘐𝘕𝘎'𝘚 𝘊𝘖𝘔𝘐𝘕𝘎, 𝘈𝘙𝘌 𝘠𝘖𝘜 𝘙𝘌𝘈𝘋𝘠 𝘗𝘜𝘗𝘐𝘈𝘕𝘚? 👀🤡</CCardHeader>
            {/* This is the announcement contents / images / files */}
            <CardContent>
                <ModalImage
                    smallSrcSet={(yearend)}
                    large={(yearend)}
                    hideDownload={true}
                    alt="Year End Party"
                    height="150"
                    width="100%"
                />
            </CardContent>

            <CardActions disableSpacing >
                {/* This is the announcement contents / images / files */}
                <p className='date'>Posted on: December 8, 2022 at 3:03 PM<FaMapPin /></p>
            </CardActions>
        </Card>
    );
}
