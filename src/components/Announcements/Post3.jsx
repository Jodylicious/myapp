import * as React from 'react';
import { Typography, Card, CardContent, CardActions } from '@mui/material';
import { CCardHeader } from '@coreui/react';
import { FaMapPin} from 'react-icons/fa';
import ModalImage from "react-modal-image";
import learningmode from './events/learningmode.jpg';

export default function Announcement() {
    return (
        <Card style={{ width: '100' }}>
            <CCardHeader className='postHeader'>Here's everything you need to know about our Hybrid Teaching and Learning Modalities for the upcoming first semester of SY 2022-2023.</CCardHeader>
            <CardContent>
                <ModalImage
                    smallSrcSet={(learningmode)}
                    large={(learningmode)}
                    hideDownload={true}
                    alt="Hybrid Teaching and Learning Modality"
                    height="150"
                    width="100%"
                />
            </CardContent>
            <CardActions disableSpacing >
                <p className='date'>Posted on: September 28, 2022 at 4:35 PM<FaMapPin /><br /> </p>
            </CardActions>
            <CardContent>
                <Typography className="announcementInfo">
                    <p>See link for more information.<br />
                        <a href='https://www.facebook.com/ThePUPOfficial/posts/pfbid0bU1Zh7G4TRY7U1CgUQpQKdgpNhTCcuedVzDwjUjihMu7wfVQF6T43sKawkadHvd6l'>https://www.facebook.com/ThePUPOfficial/posts/pfbid0bU1Zh7G4TRY7U1CgUQpQKdgpNhTCcuedVzDwjUjihMu7wfVQF6T43sKawkadHvd6l</a></p>
                </Typography>
            </CardContent>
        </Card>
    );
}
