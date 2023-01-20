import Chatbot from 'react-chatbot-kit';
import '../App.css';
import config from '../config';
import MessageParser from '../MessageParser.js';
import ActionProvider from '../ActionProvider.js';

const ChatApp = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatApp;