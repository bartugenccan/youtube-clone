import React from "react";

//CSS
import "./SidebarRow.css";

//Material Ui
import HomeIcon from "@material-ui/icons/Home";

function SidebarRow({ title, Icon, selected }) {
  return (
    <div className={`sidebar-row ${selected && "selected"}`}>
      <Icon className={"sidebarRow-icon"} />
      <h2 className="sidebarRow-title">{title}</h2>
    </div>
  );
}

export default SidebarRow;
