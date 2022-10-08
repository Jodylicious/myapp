import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Card, CardContent, CardActions, Collapse, IconButton } from '@mui/material';
import { CCardHeader } from '@coreui/react';
import { FaMapPin } from 'react-icons/fa';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ModalImage from "react-modal-image";
import lister from './events/lister.jpg';


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
            <CCardHeader className='postHeader'>CERTIFICATES FOR PRESIDENT’S LISTERS AND DEAN’S LISTERS: 
              First Semester AY 2020 – 2021</CCardHeader>

            {/* This is the announcement contents / images / files */}
            <CardContent>
                    <ModalImage
                        smallSrcSet={(lister)}
                        large={(lister)}
                        hideDownload={true}
                        alt="Certificates"
                        height="150"
                        width="100%"
                    />
            </CardContent>
            
            <CardActions disableSpacing >
                {/* This is the announcement contents / images / files */}
                <p className='date'>Posted on: August 22, 2022 at 11:06 PM<FaMapPin /><br /> </p>
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
                            <p>The University awards the certificates for PL and DL during the First Semester AY 2020 – 2021.  Kindly look for the category in the link provided and select your program/branch/campus to find your certificate. The certificates are arranged alphabetically according to surname. </p><br />
                            <p>PUP BRANCHES AND SATELLITE CAMPUSES
                                <br /><a className='moreLink' href="https://drive.google.com/drive/folders/1f-2kWOt-SqSBYa3vRi4bN281QDbJ2NMl?fbclid=IwAR3mLjvnAykLDyhOyFIY96Ick6iyjq_aiaDIx-udEzzY8lshi3q-hmpP-_g">https://drive.google.com/drive/folders/1f-2kWOt-SqSBYa3vRi4bN281QDbJ2NMl?fbclid=IwAR3mLjvnAykLDyhOyFIY96Ick6iyjq_aiaDIx-udEzzY8lshi3q-hmpP-_g</a>
                            </p>
                            <p>PUP MAIN CAMPUS
                                <br /><a className='moreLink' href="https://drive.google.com/drive/folders/1TLR8gKzo56uY_IRSy1mKxCOa_YRFZxyA?fbclid=IwAR3FSzBkC2mtXkH5nSYD2EZr67HNV2BIyR72Zd-Bz_fT1gwB5NyZ1Ek1pK8">https://drive.google.com/drive/folders/1TLR8gKzo56uY_IRSy1mKxCOa_YRFZxyA?fbclid=IwAR3FSzBkC2mtXkH5nSYD2EZr67HNV2BIyR72Zd-Bz_fT1gwB5NyZ1Ek1pK8</a>
                            </p>

                        </div>
                    </Typography>
                </CardContent>
            </Collapse>

        </Card>
    );
}
