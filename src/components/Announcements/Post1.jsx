import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Card, CardContent, CardActions, Collapse, IconButton } from '@mui/material';
import { CCardHeader } from '@coreui/react';
import { FaMapPin } from 'react-icons/fa';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ModalImage from "react-modal-image";
import graduates from './events/graduates.jpg';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Announcement() {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => { setExpanded(!expanded); };

    return (
        <Card style={{ width: '100' }}>
            <CCardHeader className='postHeader'>OCTOBER 21 | 𝐂𝐨𝐧𝐠𝐫𝐚𝐭𝐮𝐥𝐚𝐭𝐢𝐨𝐧𝐬 𝐏𝐔𝐏𝐁𝐂 𝐁𝐚𝐭𝐜𝐡 𝟐𝟎𝟐𝟐 𝐆𝐫𝐚𝐝𝐮𝐚𝐭𝐞𝐬🧑‍🎓🎓</CCardHeader>

            {/* This is the announcement contents / images / files */}
            <CardContent>
                <ModalImage
                    smallSrcSet={(graduates)}
                    large={(graduates)}
                    hideDownload={true}
                    alt="Certificates"
                    height="150"
                    width="100%"
                />
            </CardContent>

            <CardActions disableSpacing >
                {/* This is the announcement contents / images / files */}
                <p className='date'>Posted on: October 12, 2022 at 6:52 PM<FaMapPin /><br /> </p>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label=" ">
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            {/* This is other information section (collapsed) */}
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography className="announcementInfo">
                        <div>
                            <p>You are now in the next chapter of your life. Wishing you all the best for the future that lies ahead. No matter how difficult your path may be or how many times you stumble, never forget to get back and keep going. You've come this far, you'll go farther than you expect. May you continue to be an inspiration to every Isko at Iska.</p>

                            <p>Graduates from Paaralang Utak ang Puhunan - PUP Biñan, lift your diplomas, and let's rejoice in your triumph today! 🎉</p>

                            <p>Your PUP Biñan Campus Family is so proud of you! 🎉❣️<br/>
                                #PUPBC_BATCH22<br/>
                                #PUPBC<br/>
                                #CSCPUPBC</p>
                        </div>
                    </Typography>
                </CardContent>
            </Collapse>

        </Card>
    );
}
