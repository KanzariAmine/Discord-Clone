import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";
const Message = () => {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          Amine
          <span className="message__timestamp">this is a times</span>
        </h4>
        <p>This a message</p>
      </div>
    </div>
  );
};

export default Message;
