import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Card, CardContent, CardActions, Collapse, IconButton } from '@mui/material';
import { CCardHeader } from '@coreui/react';
import { FaMapPin } from 'react-icons/fa';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ModalImage from "react-modal-image";
import dresscodepolicy from './events/dresscodepolicy.jpg';

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
            <CCardHeader className='postHeader'>COOPERATION IS A MUST, ISKO AT ISKA 😊</CCardHeader>
            {/* This is the announcement header*/}
            <CardContent>
                <ModalImage
                    smallSrcSet={(dresscodepolicy)}
                    large={(dresscodepolicy)}
                    hideDownload={true}
                    alt="CSC Officers"
                    height="150"
                    width="100%"
                />
            </CardContent>
            <CardActions disableSpacing >
                {/* This is the announcement contents / images / files */}
                <p className='date'>Posted on: November 17, 2022 at 4:23 PM
                    <FaMapPin /><br /> </p>
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
                            <p>𝗥𝗘𝗠𝗜𝗡𝗗𝗘𝗥 | The PUP Biñan Campus adheres to the observance of appropriate 𝗗𝗥𝗘𝗦𝗦 𝗖𝗢𝗗𝗘  for students, teachers, guardians, and parents. 🥼</p>
                            <p>𝗣𝗹𝗲𝗮𝘀𝗲 𝗯𝗲 𝗮𝗱𝘃𝗶𝘀𝗲𝗱 𝘁𝗵𝗮𝘁 𝘁𝗵𝗲 𝗰𝗮𝗺𝗽𝘂𝘀 𝗺𝗮𝘆 𝗣𝗥𝗢𝗛𝗜𝗕𝗜𝗧 𝗮𝗻𝘆 𝗽𝗲𝗿𝘀𝗼𝗻 𝗻𝗼𝘁 𝘄𝗲𝗮𝗿𝗶𝗻𝗴 𝗮𝗽𝗽𝗿𝗼𝗽𝗿𝗶𝗮𝘁𝗲 𝗮𝘁𝘁𝗶𝗿𝗲 𝗳𝗿𝗼𝗺 𝗲𝗻𝘁𝗲𝗿𝗶𝗻𝗴 𝘁𝗵𝗲 𝗰𝗮𝗺𝗽𝘂𝘀. 📣</p>
                            <p>COOPERATION IS A MUST, ISKO AT ISKA 😊</p>
                            <p>
                                #PUPBCaBetterCommunity <br />
                                #PUPBCDressCode<br />
                                #PUPBC<br />
                                #CSCPUPBC</p>

                            <p>Or see more information below:
                                <br /><a className='moreLink' href="https://www.facebook.com/CSCPUPBN/posts/pfbid0PQShPAKeooD1g9PkdxFVDgn7daL5nWB5VRf8uWxU8BdVptwoexnVaA9uUXbGxbFsl">https://www.facebook.com/CSCPUPBN/posts/pfbid0PQShPAKeooD1g9PkdxFVDgn7daL5nWB5VRf8uWxU8BdVptwoexnVaA9uUXbGxbFsl</a>
                            </p>
                        </div>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
