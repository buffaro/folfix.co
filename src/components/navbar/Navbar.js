import React, { useState } from "react";
import "./Navbar.scss";
import SearchBox from "./searchbox/SearchBox";
import NotiIcon from "./noti/NotiIcon";
import ToggleButton from "@material-ui/lab/ToggleButton";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import Logo from "../../assets/images/logo_.png";
import LogoMini from "../../assets/images/logo__.png";
import User from "./user/User";

function Navbar(props) {
  const [selected, setSelected] = useState(false);
  // const [sidebar, setSidebar] = useState(props.showSidebar);
  // const toggleSidebar = () => setSidebar(!sidebar);
  // console.log(sidebar);
  return (
    <>
      <div className="navbar">
        <div className="nav_logo">
          <span className="toggleSidebar">
            <ToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected);
              }}
              // onClick={toggleSidebar}
            >
              <MenuIcon fontSize="default" style={{ color: "#d0d0d0" }} />
            </ToggleButton>
          </span>
          <img className="maxLogo" src={Logo} alt="Folfix" />
          <img className="minLogo" src={LogoMini} alt="Folfix" />
        </div>
        <div className="nav_searchbox">
          <form action="">
            <SearchBox placeholder="ค้นหา..." />
          </form>
        </div>
        <ul className="nav_manu">
          <li className="nav_item setting">
            <span className="tooltip">ตั้งค่า</span>
            <SettingsApplicationsIcon />
          </li>
          <li className="nav_item">
            <NotiIcon />
            <span className="tooltip">แจ้งเตือน</span>
          </li>
          <li className="nav_item">
            <User />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
