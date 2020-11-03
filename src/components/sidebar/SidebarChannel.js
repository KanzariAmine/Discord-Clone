import React from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "../../features/appSlice";
import "./SidebarChannel.css";
const SidebarChannel = ({ id, channel }) => {
  const dispatch = useDispatch();
  const saveChannel = (id, channel) => {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channel,
      })
    );
  };
  return (
    <div className="sidebarChannel" onClick={() => saveChannel(id, channel)}>
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channel}
      </h4>
    </div>
  );
};

export default SidebarChannel;
