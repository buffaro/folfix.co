import React from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <div className="navContainer">
        <Navbar showSidebar={true} />
      </div>
      <div className="flexContent">
        <div className="sidebarContainer">
          <Sidebar activeToggle={false} />
        </div>
        <div className="contentContainer">ส่วนนี้คือ Content</div>
      </div>
    </div>
  );
}

export default App;
