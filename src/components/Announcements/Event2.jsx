import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Card, CardContent, CardActions, Collapse, IconButton } from '@mui/material';
import { CCardHeader } from '@coreui/react';
import { FaMapPin } from 'react-icons/fa';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ModalImage from "react-modal-image";
import planting from './events/planting.jpg';

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
                <CCardHeader className='postHeader'>MULA SA'YO PARA SA KALIKASAN | A tree planting activity for a cause. 🌱🍃</CCardHeader>
                {/* This is the announcement contents / images / files */}
                <CardContent>
                    <ModalImage
                        smallSrcSet={(planting)}
                        large={(planting)}
                        hideDownload={true}
                        alt="MULA SA'YO PARA SA KALIKASAN"
                        height="150"
                        width="100%"
                    />
                </CardContent>
                <CardActions disableSpacing >
                    {/* This is the announcement contents / images / files */}
                    <p className='date'>Posted on: September 6, 2022 at 1:32 PM <FaMapPin /><br /> </p>
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
                                <p>Buckle Up, Volunteers!🤝</p>
                                <p>Listed below are the things needed to bring:</p>
                                📍 Used Sacks (3 per Organization)<br />
                                📍 Garden Gloves/ Plastic Gloves<br />
                                📍 Extra Shirt<br />
                                📍 Small Shovel (Can be improvised)<br />
                                📍 Water Tumbler<br />
                                📍 Parent's Consent / Vaccination Card / ID or COR<br />
                                📍 Boots<br />
                                <p>See you on September 14, 2022 at Biñan Organik Farm.</p>
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
