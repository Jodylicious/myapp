import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ChatCard() {
    return (
        <div className='chatCard'>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src="https://miro.medium.com/max/640/0*ZCFmEJO8RuOiL0qu" />
                <Card.Body>
                    <Card.Text className='bot-info'>
                        "We're no longer teaching people how to communicate with systems, we're teaching systems to communicate with people."
                    </Card.Text>
                    <div className="d-grid gap-2">
                        <Button className="chat-btn" variant="primary" >
                            <Link to="/chatbot">
                                <h3>Start Conversation</h3>
                            </Link>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
export default ChatCard;