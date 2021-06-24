import React from "react";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import "./ChannelRow.css";

function ChannleRow({
  image,
  channel,
  subs,
  numOfVideos,
  verified,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow-logo" alt={channel} src={image} />
      <div className="channelRow-text">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscribers . {numOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannleRow;
