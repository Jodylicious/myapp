import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Card, CardContent, CardActions, Collapse, IconButton } from '@mui/material';
import { CCardHeader } from '@coreui/react';
import { FaMapPin } from 'react-icons/fa';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ModalImage from "react-modal-image";
import cscofficers from './events/cscofficers.jpg';

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
            <CCardHeader className='postHeader'>πππΏπΌπβπ πππ πΏπΌπ, ππππππΌππ!</CCardHeader>
            {/* This is the announcement header*/}
            <CardContent>
                <ModalImage
                    smallSrcSet={(cscofficers)}
                    large={(cscofficers)}
                    hideDownload={true}
                    alt="CSC Officers"
                    height="150"
                    width="100%"
                />
            </CardContent>
            <CardActions disableSpacing >
                {/* This is the announcement contents / images / files */}
                <p className='date'>Posted on: November 24, 2022 at 9:00 AM <FaMapPin /><br /> </p>
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
                            <p>βπ π₯πππππ« π’π¬ π ππππ₯ππ« π’π§ π‘π¨π©π.β -πππ©π¨π₯ππ¨π§ ππ¨π§ππ©ππ«π­π</p>
                            <p>πππΏπΌπβπ πππ πΏπΌπ, ππππππΌππ!
                                We would like to present our new set of πππππππ πππππππ πππππππ ππππππππ ππ¨π« π.π. ππππ-ππππ! We appreciate your courage to take on the challenges that come along the way. </p>
                            <p>We wish for your success and we look forward to what is in store for this Academic Year. πππΌππ πππ, πΎπΌππΏππΏπΌπππ!</p>
                            <p>
                                Note: Please stand by for the announcements regarding the Oath Taking Ceremony. Thank you!<br />
                                #CSCHalalan2022<br />
                                #PadayonPUPBC</p>

                            <p>Or see more information below:
                                <br /><a className='moreLink' href="https://www.facebook.com/comelec2022.pupbc/posts/pfbid035fFCtmuEzKsW61uHRWJvXXmuHH5vYRxwMbbzXVgxT73A9SGAANqUioN9JAV1oKqnl">https://www.facebook.com/comelec2022.pupbc/posts/pfbid035fFCtmuEzKsW61uHRWJvXXmuHH5vYRxwMbbzXVgxT73A9SGAANqUioN9JAV1oKqnl</a>
                            </p>
                        </div>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
