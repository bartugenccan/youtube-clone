import React from "react";

//CSS
import "./VideoRow.css";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt={channel} />
      <div className="videoRow-text">
        <h3>{title}</h3>
        <p className="videoRow-headline">
          {channel} | <span className="videoRow-subsNubmer">{subs}</span>{" "}
          Subscribers | {views} views | {timestamp}
        </p>
        <p className="videoRow-description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
