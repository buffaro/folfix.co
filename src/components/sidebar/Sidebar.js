import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.scss";
import SpeedIcon from "@material-ui/icons/Speed";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import BuildIcon from "@material-ui/icons/Build";
import DateRangeIcon from "@material-ui/icons/DateRange";
import OfflinePinIcon from "@material-ui/icons/OfflinePin";
import StorageIcon from "@material-ui/icons/Storage";
import ExtensionIcon from "@material-ui/icons/Extension";
function Sidebar(props) {
  return (
    <ProSidebar
      className="sidebarView"
      breakPoint="sm"
      onToggle={() => alert("sm")}
      collapsed={props.activeToggle}
    >
      <SidebarContent style={{ paddingTop: "70px" }}>
        <Menu iconShape="circle" popperArrow="true">
          <MenuItem icon={<SpeedIcon />}>แผงควบคุม</MenuItem>
          <SubMenu title="งานซ่อม" icon={<BuildIcon />}>
            <MenuItem>การแจ้งซ่อม</MenuItem>
            <MenuItem>รายการงานซ่อม</MenuItem>
            <MenuItem>ส่งซ่อมภายนอก</MenuItem>
          </SubMenu>
          <SubMenu title="บำรุงรักษา" icon={<DateRangeIcon />}>
            <MenuItem>ปฏิทิน</MenuItem>
            <MenuItem>รายการบำรุงรักษา</MenuItem>
          </SubMenu>
          <SubMenu title="สอบเทียบ" icon={<OfflinePinIcon />}>
            <MenuItem>ปฏิทิน</MenuItem>
            <MenuItem>รายการสอบเทียบ</MenuItem>
          </SubMenu>
          <SubMenu title="อุปกรณ์" icon={<StorageIcon />}>
            <MenuItem>รายการอุปกรณ์</MenuItem>
            <MenuItem>เพิ่ม/ลบ/แก้ไข</MenuItem>
            <MenuItem>จำหน่าย</MenuItem>
            <MenuItem>ตั้งค่าข้อมูล</MenuItem>
          </SubMenu>
          <SubMenu title="อะไหล่" icon={<ExtensionIcon />}>
            <MenuItem>รายการอะไหล่</MenuItem>
            <MenuItem>เพิ่ม/ลบ/แก้ไข</MenuItem>
            <MenuItem>จำหน่าย</MenuItem>
            <MenuItem>ตั้งค่าข้อมูล</MenuItem>
          </SubMenu>
          <MenuItem icon={<LibraryBooksIcon />}>ผู้ติดต่อ</MenuItem>
          <MenuItem icon={<PersonAddIcon />}>จัดการสมาชิก</MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter>
        <div className="sidebarFooter">
          <p>CopyRight© All Right Reserved</p>
          <p>Folfix Development</p>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
}

export default Sidebar;
