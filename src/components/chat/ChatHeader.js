import React from "react";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import EditLocationIcon from "@material-ui/icons/EditLocation";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import SendIcon from "@material-ui/icons/Send";
import HelpIcon from "@material-ui/icons/Help";
import "./ChatHeader.css";
function ChatHeader({ channelName }) {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="chatHeader__right">
        <NotificationsIcon />
        <EditLocationIcon />
        <PeopleAltIcon />
        <div className="chatHeader__search">
          <input placeholder="search" />
          <SearchIcon />
        </div>

        <SendIcon />
        <HelpIcon />
      </div>
    </div>
  );
}

export default ChatHeader;
