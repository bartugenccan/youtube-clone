import React from "react";

//CSS
import "./SearchPage.css";

//Component
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

//Material Ui
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage-filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AKedOLSaZyhYvK-f86ScBZvpClO4SMv6oiqdNRpVJ_96bw=s88-c-k-c0x00ffffff-no-rj"
        channel="NBA Highlights"
        verified
        subs="650K"
        numOfVideos={382}
        description="NBA highlights of every game."
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="659k"
        description="Milwaukee Bucks vs Atlanta Hawks"
        timestamp="1 min ago"
        channel="NBA Highlights"
        title="Bucks vs Hawks"
        image="http://i3.ytimg.com/vi/TQWLgJSazOw/maxresdefault.jpg"
      />
      <VideoRow
        views="2.5M"
        subs="250k"
        description="NBA no skill moments."
        timestamp="1 min ago"
        channel="King Swish"
        title="NBA No Skill Moments"
        image="http://i3.ytimg.com/vi/ykekquE3as8/maxresdefault.jpg"
      />
      <VideoRow
        views="1.8M"
        subs="359k"
        description="Milwaukee Bucks vs Atlanta Hawks"
        timestamp="8 mins ago"
        channel="NBA"
        title="NBA Top 5 Plays Of The Night"
        image="http://i3.ytimg.com/vi/_047PszpMfs/maxresdefault.jpg"
      />
      <VideoRow
        views="1.4M"
        subs="659k"
        description="LA Clippers vs Phoenix Suns"
        timestamp="1 min ago"
        channel="NBA Highlights"
        title="LA Clippers vs Phoenix Suns Full GAME 2"
        image="http://i3.ytimg.com/vi/F7B4SGybInU/maxresdefault.jpg"
      />
    </div>
  );
}

export default SearchPage;
