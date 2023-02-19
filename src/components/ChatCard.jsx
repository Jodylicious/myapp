import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Link } from 'react-router-dom';

function ChatCard() {
    return (
        <div className='div-section'>

            <div>
                <section class="hero container">
                    <h1>ASKolar: PUPBC Chatbot for School Related Inquiries</h1>
                    <p><h3>"We want to improve our administrative services and ASKolar will be big part of it.</h3>
                    </p>
                    <br />

                    <Link to="/chatbot">
                        <button className='chat-btn'><h3>Start Conversation</h3></button>
                    </Link>

                    <div className='row-chat'>
                        <div className='col-chat'>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="https://cpet.tc.columbia.edu/uploads/1/8/4/5/18456699/shutterstock-1812591067_orig.jpg"
                                            alt="hsas"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                            <a href='https://web.facebook.com/HSASPUPBC'>PUPBC Student Affairs and Services</a>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            
                        </div>
                        <div className='col-chat'>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="https://www.pngitem.com/pimgs/m/24-245834_supply-and-demand-planning-illustration-hd-png-download.png"
                                            alt="csc"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                            <a href='https://web.facebook.com/CSCPUPBN'>PUPBC Central Student Council</a>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                            </Card>
                            </div>
                                <div className='col-chat'>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="https://www.pup.edu.ph/resources/images/photos/sportal.jpg"
                                            alt="PUPSIS"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                            <a href='https://sisstudents.pup.edu.ph/'> PUP Student Information System (PUPSIS)</a>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>    
                        </div>    
                        </div>
                </section>
            </div>
        </div>


    );
}
export default ChatCard;