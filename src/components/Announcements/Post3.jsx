import * as React from 'react';
import { Typography, Card, CardContent, CardActions } from '@mui/material';
import { CCardHeader } from '@coreui/react';
import { FaMapPin, FaCalendarCheck } from 'react-icons/fa';
import ModalImage from "react-modal-image";
import calendar from './events/calendar.jpg';


export default function Announcement() {
    return (
        <Card style={{ width: '100' }}>
            <CCardHeader className='postHeader'><FaCalendarCheck /> 𝗛𝗘𝗔𝗗𝗦 𝗨𝗣 | The university calendar for the ACADEMIC YEAR 2022 - 2023 has been released by the Office of the University Registrar. Please be guided accordingly Isko at Iska. 📣</CCardHeader>
            <CardContent>
                <ModalImage
                    smallSrcSet={(calendar)}
                    large={(calendar)}
                    hideDownload={true}
                    alt="UCalendar"
                    height="150"
                    width="100%"
                />
            </CardContent>
            <CardActions disableSpacing >
                <p className='date'>Posted on: September 17, 2022 at 12:05 PM<FaMapPin /><br /> </p>
            </CardActions>
            <CardContent>
                <Typography className="announcementInfo">
                    <h4>UNIVERSITY CALENDAR FOR ACADEMIC YEAR 2022-2023</h4>
                    <p>#CSCPUPBC <br />#PUPBC</p>
                    <p>See link for more information.<br />
                        <a href='https://web.facebook.com/CSCPUPBN/posts/pfbid0UEkNkiSG3xyk4b5Wziuvz4fGZ9pCuXP2RYo9YYueXuK7Hn3QYtRB2UTTT2ThwEn4l?_rdc=1&_rdr'>https://web.facebook.com/CSCPUPBN/posts/pfbid0UEkNkiSG3xyk4b5Wziuvz4fGZ9pCuXP2RYo9YYueXuK7Hn3QYtRB2UTTT2ThwEn4l?_rdc=1&_rdr</a></p>

                </Typography>
            </CardContent>
        </Card>
    );
}
