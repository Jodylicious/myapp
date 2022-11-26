import { Check } from '@mui/icons-material';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bot3 from '../assets/images/bot3.png';
import Gallery from '../components/AppGallery';
import { FaCommentAlt } from 'react-icons/fa';

const AppDownload = () => {
    return (
        <div className='appDownload'>
            <div class="row-home">
                {/* column 1  - APP INFORMATIONS */}
                <div class="col-home">
                    <div className='chatCard'>
                        <Card style={{ width: '100%' }}>
                            <div className='appHeader'>
                                <img src={(bot3)} className="logo" alt="bot3"></img>
                                <h3>ASKOLAR! - PUPBC Chatbot Application </h3>
                            </div>
                            <Card.Img variant="top" src="" />

                            <Card.Body>
                                <Card.Text className='app-info'>
                                    <table>
                                        <tr>
                                            <th>APP INFO</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h4>App Version:</h4> 1.0.0
                                                <h4>Apk Size:</h4>8.0MB
                                                <h4>Compatibility:</h4>Android 7 and above.
                                            </td>
                                        </tr>
                                    </table>
                                </Card.Text>
                                <div className="d-grid gap-2">
                                    <Button className="appDL" variant="primary">
                                        <a href='https://drive.google.com/drive/folders/1GR2VqZEHADnnDG3wKOFs3qvHJwM4CH21'>Download App</a>

                                    </Button>
                                    <br />
                                    <p><Check />This app is safe to download and free from virus.</p>
                                </div>

                                <table>
                                    <tr>
                                        <th>APP PERMISSION</th>
                                    </tr>
                                    <tr>
                                        <ul>
                                            <li> prevent processor from sleeping or screen from dimming</li>
                                            <li> open network sockets</li>
                                            <li> access information about Wi-Fi networks</li>
                                            <li> change Wi-Fi connectivity state</li>
                                            <li> access information about networks</li>
                                            <li> write to external storage</li>
                                            <li> read from external storage</li>
                                        </ul>
                                    </tr>
                                </table>

                            </Card.Body>
                        </Card>
                    </div>

                    {/* FEEDBACK FORM */}
                    <div className='feeds'>
                        <button className='feedback-btn'> <a href='https://docs.google.com/forms/d/e/1FAIpQLScwgrTy4cNOWVC5IjKc5xonMJUIx-qPXXQyH7tz0fwdbxmWqQ/viewform'> Give us your feedback! <FaCommentAlt /> </a></button>
                    </div>

                </div>

                {/* COLUMN 2 - APP SCREENSHOTS */}
                 {/* this will be the images of app inserted (src link) prefered is gallery */}
                <div class="col-home">
                    <div className='chatCard'>
                        <Card style={{ width: '100%' }} className='divSection'>
                            <table>
                                <tr>
                                    <th>APP SCREENSHOTS</th>
                                </tr>
                                <tr>
                                    <Gallery />
                                </tr>
                            </table>
                        </Card>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default AppDownload;