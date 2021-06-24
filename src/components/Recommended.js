import React from "react";

//CSS
import "./Recommended.css";

//Component Imports
import VideoCard from "./VideoCard";

function Recommended() {
  return (
    <div className="recommended">
      <h2>Recommended</h2>
      <div className="recommended-videos">
        <VideoCard
          title={"Bucks vs Hawks"}
          views={"1.4M Views"}
          timestamp={"3 days ago"}
          channelImage={
            "https://yt3.ggpht.com/ytc/AKedOLT6HqmiRecjgiQ_v0q48vmXCPAXF0DjHnkY6rll=s88-c-k-c0x00ffffff-no-rj"
          }
          channel="NBA Highlights"
          image="http://i3.ytimg.com/vi/mc-3Htcc5oQ/maxresdefault.jpg"
        />
        <VideoCard
          title={"NBA No Skill Moments"}
          views={"2.3M Views"}
          timestamp={"5 days ago"}
          channelImage={
            "https://yt3.ggpht.com/ytc/AAUvwnjxwsRZxyz8U7KQJaJzxhtLpEI1H8q1J_C7g8n4=s88-c-k-c0x00ffffff-no-rj"
          }
          channel={"King Swish"}
          image={"http://i3.ytimg.com/vi/ykekquE3as8/maxresdefault.jpg"}
        />
        <VideoCard
          title={"NBA Top 5 Moments"}
          views={"5M Views"}
          timestamp={"3 days ago"}
          channelImage={
            "https://yt3.ggpht.com/ytc/AKedOLSaZyhYvK-f86ScBZvpClO4SMv6oiqdNRpVJ_96bw=s88-c-k-c0x00ffffff-no-rj"
          }
          channel={"NBA"}
          image={"http://i3.ytimg.com/vi/_047PszpMfs/maxresdefault.jpg"}
        />
        <VideoCard
          title={"LA Clippers vs Phoenix Suns Game 2"}
          views={"1.2M Views"}
          timestamp={"3 days ago"}
          channelImage={
            "https://yt3.ggpht.com/ytc/AKedOLT6HqmiRecjgiQ_v0q48vmXCPAXF0DjHnkY6rll=s88-c-k-c0x00ffffff-no-rj"
          }
          channel={"NBA Highlights"}
          image={"http://i3.ytimg.com/vi/F7B4SGybInU/maxresdefault.jpg"}
        />
        <VideoCard
          title={"Trae Young's Story"}
          views={"5M Views"}
          timestamp={"8 days ago"}
          channelImage={
            "https://yt3.ggpht.com/ytc/AAUvwnhdhtrfxG6AfAYuh1TA6C_Fas9ZwFOOouM2vwXy660=s88-c-k-c0x00ffffff-no-rj"
          }
          channel={"ESPN"}
          image={"http://i3.ytimg.com/vi/hjRXa38rfVs/maxresdefault.jpg"}
        />
        <VideoCard
          title={"LA Clippers vs Phoenix Suns Game 1"}
          views={"1.2M Views"}
          timestamp={"3 days ago"}
          channelImage={
            "https://yt3.ggpht.com/ytc/AKedOLT6HqmiRecjgiQ_v0q48vmXCPAXF0DjHnkY6rll=s88-c-k-c0x00ffffff-no-rj"
          }
          channel={"NBA Highlights"}
          image={"http://i3.ytimg.com/vi/A5soCCFjKmg/maxresdefault.jpg"}
        />
        <VideoCard
          title={"Trae Young's Story"}
          views={"5M Views"}
          timestamp={"8 days ago"}
          channelImage={
            "https://yt3.ggpht.com/ytc/AAUvwnhdhtrfxG6AfAYuh1TA6C_Fas9ZwFOOouM2vwXy660=s88-c-k-c0x00ffffff-no-rj"
          }
          channel={"ESPN"}
          image={"http://i3.ytimg.com/vi/hjRXa38rfVs/maxresdefault.jpg"}
        />
        <VideoCard
          title={"Bucks vs Hawks"}
          views={"1.4M Views"}
          timestamp={"3 days ago"}
          channelImage={
            "https://yt3.ggpht.com/ytc/AKedOLT6HqmiRecjgiQ_v0q48vmXCPAXF0DjHnkY6rll=s88-c-k-c0x00ffffff-no-rj"
          }
          channel="NBA Highlights"
          image="http://i3.ytimg.com/vi/TQWLgJSazOw/maxresdefault.jpg"
        />
        <VideoCard
          title={"NBA No Skill Moments"}
          views={"2.3M Views"}
          timestamp={"5 days ago"}
          channelImage={
            "https://yt3.ggpht.com/ytc/AAUvwnjxwsRZxyz8U7KQJaJzxhtLpEI1H8q1J_C7g8n4=s88-c-k-c0x00ffffff-no-rj"
          }
          channel={"King Swish"}
          image={"http://i3.ytimg.com/vi/ykekquE3as8/maxresdefault.jpg"}
        />
        <VideoCard
          title={"NBA Iso Moments"}
          views={"2M Views"}
          timestamp={"3 days ago"}
          channelImage={
            "https://yt3.ggpht.com/ytc/AKedOLSaZyhYvK-f86ScBZvpClO4SMv6oiqdNRpVJ_96bw=s88-c-k-c0x00ffffff-no-rj"
          }
          channel={"NBA"}
          image={"http://i3.ytimg.com/vi/xYy6pLqsAxQ/maxresdefault.jpg"}
        />
      </div>
    </div>
  );
}

export default Recommended;
