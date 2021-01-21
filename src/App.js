import React from "react";
import Navbar from "./components/navbar/Navbar";
import AdminSidebar from "./components/admin-sidebar/Sidebar";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Dashboard,
  RepairTicket,
  RepairList,
  RepairOnsite,
} from "./routes/Router";

function App() {
  return (
    <Router>
      <div>
        <div className="navContainer">
          <Navbar showSidebar={true} />
        </div>
        <div className="flexContent">
          <div className="sidebarContainer">
            {/* <Switch>
              <Route path="/admin" component={AdminSidebar} />
              <Route path="/user" component={UserSidebar} />
            </Switch> */}
            <AdminSidebar activeToggle={false} />
          </div>
          <div className="contentContainer">
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/repair/ticket" component={RepairTicket} />
              <Route path="/repair/list" component={RepairList} />
              <Route path="/repair/onsite" component={RepairOnsite} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
