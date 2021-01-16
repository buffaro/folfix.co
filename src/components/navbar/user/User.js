import React, { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserImage from "../../../assets/images/user.png";
import { Dropdown } from "react-bootstrap";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./User.scss";
function User() {
  const [userName, setUserName] = useState("");
  const showName = () => setUserName("ก้อย ณ ทวีวัฒนา");
  return (
    <>
      <Dropdown onLoad={showName}>
        <Dropdown.Toggle as="div">
          <div className="user">
            <div className="userName">{userName}</div>
            <img src={UserImage} alt="User" />
          </div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/profile">
            <AccountCircleIcon style={{ paddingRight: 5 }} />
            โปรไฟล์
          </Dropdown.Item>
          <Dropdown.Item href="#/logout">
            <ExitToAppIcon style={{ paddingRight: 5 }} />
            ออกจากระบบ
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default User;
