import React from "react";
import { Close, Feed } from '@mui/icons-material'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="react-chatbot-kit-chat-header">

      <div className="react-chatbot-kit-chat-header-name">
        ASKOLAR
      </div>

      <div className="react-chatbot-kit-chat-header-btn">
        <a href='https://docs.google.com/forms/d/e/1FAIpQLScwgrTy4cNOWVC5IjKc5xonMJUIx-qPXXQyH7tz0fwdbxmWqQ/viewform'><Feed/></a>
        <Link to="/home">
          <Close/>
        </Link>
      </div>
    </div>
  )
}

export default Header;
