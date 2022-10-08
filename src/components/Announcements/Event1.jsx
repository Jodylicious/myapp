import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Card, CardContent, CardActions, Collapse, IconButton } from '@mui/material';
import { CCardHeader } from '@coreui/react';
import { FaMapPin } from 'react-icons/fa';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ModalImage from "react-modal-image";
import pup13c from './events/pup13c.jpg';

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
        <div className='chatCard'>
            <Card style={{ width: '100%' }}>
                <CCardHeader className='postHeader'>𝐏𝐔𝐏𝟏𝟑𝐂 | 2 WEEKS TO GO ! 🎉</CCardHeader>
                {/* This is the announcement contents / images / files */}
                <CardContent>
                    <ModalImage
                        smallSrcSet={(pup13c)}
                        large={(pup13c)}
                        hideDownload={true}
                        alt="PUP13C"
                        height="150"
                        width="100%"
                    />
                </CardContent>
                <CardActions disableSpacing >
                    {/* This is the announcement contents / images / files */}
                    <p className='date'>Posted on: August 28, 2022 at 1:32 PM <FaMapPin /><br /> </p>
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
                                <p>The PUP Biñan Campus will celebrate its 𝟭𝟯𝘁𝗵 𝗙𝗼𝘂𝗻𝗱𝗶𝗻𝗴 𝗔𝗻𝗻𝗶𝘃𝗲𝗿𝘀𝗮𝗿𝘆 with the theme "𝘚𝘵𝘳𝘦𝘯𝘨𝘵𝘩𝘦𝘯𝘪𝘯𝘨 𝘪𝘵𝘴 𝘈𝘤𝘢𝘥𝘦𝘮𝘪𝘤 𝘕𝘪𝘤𝘩𝘦 𝘪𝘯 𝘵𝘩𝘦 𝘕𝘦𝘸 𝘕𝘰𝘳𝘮𝘢𝘭 " this 𝗦𝗲𝗽𝘁𝗲𝗺𝗯𝗲𝗿 𝟭𝟬 - 𝟭𝟱, 𝟮𝟬𝟮𝟮.</p>
                                <p>Get ready to showcase your talents and skills as each Organization prepared exciting events, activities, and contests for you all! </p>
                                <p> Let's celebrate and enjoy another milestone. Despite the challenges and difficulties we've encountered, we still managed to overcome another year, together, without leaving anyone behind. </p>
                                <p>#StrengtheningItsAcademicNicheInTheNewNormal<br />
                                    #PadayonPUPBC<br />
                                    #MATATAGmula2009<br />
                                    #MulaSayoParaSaBAYAN<br />
                                    #PUP13C</p>

                                <p>Or see more information below:
                                    <br /><a className='moreLink' href="https://web.facebook.com/CSCPUPBN">https://web.facebook.com/CSCPUPBN</a>
                                </p>
                            </div>
                        </Typography>
                    </CardContent>
                </Collapse>

            </Card>
        </div>
    );
}
