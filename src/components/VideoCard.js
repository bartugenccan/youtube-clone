import React from "react";

//Material Ui
import Avatar from "@material-ui/core/Avatar";

//CSS
import "./VideoCard.css";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img className="videoCard-thumbnail" src={image} alt="" />
      <div className="videoCard-info">
        <Avatar className="videoCard-avatar" alt={channel} src={channelImage} />
        <div className="videoCard-text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
