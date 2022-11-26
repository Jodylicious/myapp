import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Card, CardContent, CardActions, Collapse, IconButton } from '@mui/material';
import { CCardHeader } from '@coreui/react';
import { FaMapPin } from 'react-icons/fa';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ModalImage from "react-modal-image";
import hiraya from './events/hiraya.jpg';

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
            <CCardHeader className='postHeader'>#PUP13C | Inihahandog ng Central Student Council -PUPBC ang 𝐇𝐈𝐑𝐀𝐘𝐀: 𝗔𝗿𝗮𝘄 𝗻𝗴 𝗣𝗮𝗴𝗸𝗶𝗹𝗮𝗹𝗮 𝘀𝗮 𝗺𝗴𝗮 𝗧𝗮𝗻𝘆𝗮𝗴 𝗻𝗮 𝗜𝘀𝗸𝗼𝗹𝗮𝗿 𝗻𝗴 𝗣𝗨𝗣-𝗕𝗶ñ𝗮𝗻 🥇🏆</CCardHeader>
            {/* This is the announcement header*/}
            <CardContent>
                    <ModalImage
                        smallSrcSet={(hiraya)}
                        large={(hiraya)}
                        hideDownload={true}
                        alt="HIRAYA"
                        height="150"
                        width="100%"
                    />
                </CardContent>
            <CardActions disableSpacing >
                {/* This is the announcement contents / images / files */}
                <p className='date'>Posted on: September 14, 2022 at 8:13 PM <FaMapPin /><br /> </p>
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
                            <p>Ang 𝐇𝐈𝐑𝐀𝐘𝐀  ay nagbibigay ng natatanging karangalan upang bigyang pagkilala ang mga hindi matatawarang nagawa at nai-ambag ng mga indibidwal na mag-aaral sa paaralan upang maisakatuparan ang pamamayagpag ng 𝙄𝙨𝙠𝙤𝙡𝙖𝙧 𝙣𝙜 𝘽𝙖𝙮𝙖𝙣 𝙨𝙖 𝙋𝙤𝙡𝙞𝙩𝙚𝙠𝙣𝙞𝙠𝙤𝙣𝙜 𝙐𝙣𝙞𝙗𝙚𝙧𝙨𝙞𝙙𝙖𝙙 𝙣𝙜 𝙋𝙞𝙡𝙞𝙥𝙞𝙣𝙖𝙨- 𝘽𝙞ñ𝙖𝙣 𝘾𝙖𝙢𝙥𝙪𝙨 at taos-pusong ipinagmamalaki na ang kabataan ay tunay ngang maaasahan.</p>
                            <p>Ngayong taon ay isang espesyal na pagkilala sa mga PUPians na nagpamalas ng pagmamahal sa paaralan o sa kanilang pamayanan sa panahon ng pandemya. </p>

                            <p>🗓️ Setyembre 15, 2022 | Zoom Online<br />
                                📍 Join through this link: <a href='https://us02web.zoom.us/j/8025421715?pwd=SjZUTmI0dWFhMHlPa1NDeW1PSzR4dz09&fbclid=IwAR0BaCkotxYrkRHSIE9wm80b4_IbOdlc_gAXTrHRk-unGw_PFGLD-8ygXJE#success'>https://us02web.zoom.us/j/8025421715?pwd=SjZUTmI0dWFhMHlPa1NDeW1PSzR4dz09&fbclid=IwAR0BaCkotxYrkRHSIE9wm80b4_IbOdlc_gAXTrHRk-unGw_PFGLD-8ygXJE#success</a><br />
                                Meeting ID: 802 542 1715<br />
                                Passcode: #PUP13C</p>
                            <p> Let's celebrate and enjoy another milestone. Despite the challenges and difficulties we've encountered, we still managed to overcome another year, together, without leaving anyone behind. </p>
                            <p> #HIRAYA<br />
                                #NatatangingIskolar<br />
                                #PUPians<br />
                                #StrengtheningItsAcademicNicheInTheNewNormal<br />
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
    );
}
