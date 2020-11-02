import React from "react";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
import "./Chat.css";
const Chat = () => {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
      </div>
      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input placeholder={`Message #TESTCHANNEL`} />
          <button className="chat__inputButton" type="submit">
            Send Message
          </button>
        </form>
        <div className="chat__inputIcon">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon ontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
