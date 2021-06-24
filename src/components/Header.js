import React, { useState } from "react";

//Material  Ui
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import MicIcon from "@material-ui/icons/Mic";

//CSS
import "./Header.css";

//Router
import { Link } from "react-router-dom";

function Header() {
  const [input, setInput] = useState("");

  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon />
        <Link to="/" >
          <img
            className="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png"
            alt="Youtube Logo"
          />
        </Link>
      </div>

      <div className="header-mid">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${input}`}>
          <SearchIcon className="search-button" />
        </Link>
      </div>

      <div className="header-right">
        <VideoCallIcon className="header-icon" />
        <AppsIcon className="header-icon" />
        <NotificationsIcon className="header-icon" />
        <Avatar
          src="https://avatars.githubusercontent.com/u/81168104?s=60&v=4"
          alt="Bartu Gençcan"
        />
      </div>
    </div>
  );
}

export default Header;
