import React, { useState } from "react";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import "./NotiIcon.scss";
import { Dropdown } from "react-bootstrap";
// import { WordWrap } from "../../../assets/functions/Wordwrap";
const imageType = {
  user:
    "https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-user-free-button-png-image-image_1338291.jpg",
  system:
    "https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-system-help-icon-image_1144471.jpg",
};
let date = new Date();
let showDate = date.getHours() + ":" + date.getMinutes();
const notiAPI = [
  {
    time: showDate,
    from: "Ward 5A",
    type: "user",
    title: "เครื่องช่วยหายใจเสีย",
    readed: false,
    data: {
      message:
        "เครื่อง Ventilator เสีย เปิดไม่ติด ไฟไม่เข้า คนไข้กำลังจะตาย ตอนนี้ใช้ Ambu Bag ช่วยเหลือเบื้องต้นอยู่ รีบมาก่อนมีคนตาย",
      link: "",
    },
  },
  {
    time: showDate,
    from: "ICU",
    type: "user",
    title: "ก๊อกในห้องน้ำรั่ว มาซ่อมด่วน",
    readed: false,
    data: {
      message:
        "ห้องน้ำห้อง ICU รั่ว มีไฟแลบออกมาจากตัวก๊อก มีกลิ่นไหม้ น้ำร้อน ปิดทางเข้าแล้ว มาซ่อมด่วน",
      link: "",
    },
  },
  {
    time: showDate,
    from: "Calibrate System",
    type: "system",
    title: "แจ้งเตือนการสอบเทียบ",
    readed: false,
    data: {
      message:
        "เครื่อง Infusion Pump ต้องการสอบเทียบภายในวันที่ 12 มีนาคม 2564",
      link: "",
    },
  },
  {
    time: showDate,
    from: "Mainternance System",
    type: "system",
    title: "แจ้งเตือนการบำรุงรักษาประจำปี",
    readed: false,
    data: {
      message:
        "บำรุงรักษาเครื่อง Suction 250 เครื่อง, Oxygen Flow Meter 423 เครื่อง ภายในวันที่ 23 กันยายน 2564",
      link: "",
    },
  },
  {
    time: showDate,
    from: "Login System",
    type: "system",
    title: "แจ้งเตือนการเข้าสู่ระบบ",
    readed: false,
    data: {
      message: "มีการเข้าสู่ระบบครั้งล่าสุดเมื่อ 2 มกราคม 2564 เวลา 12.02 น.",
      link: "",
    },
  },
];
const rowLen = notiAPI.length;
let imgLink = "";
const notiItem = notiAPI.map((item, index) => {
  switch (item.type) {
    case "user":
      imgLink = imageType.user;
      break;
    case "system":
      imgLink = imageType.system;
      break;
    default:
      break;
  }
  if (rowLen === index + 1)
    return (
      <div key={index} className="notiItem">
        <Dropdown.Item>
          <div className="notiItem">
            <img src={imgLink} alt={item.type} />
            <div className="wrap">
              <div className="header">
                <div className="from">{item.from}</div>
                <div className="title">{item.title}</div>
              </div>
              <div className="data">
                <div className="message">"{item.data.message}"</div>
                <div className="time">เวลา - {item.time}</div>
              </div>
            </div>
          </div>
        </Dropdown.Item>
      </div>
    );
  else
    return (
      <div key={index}>
        <Dropdown.Item>
          <div className="notiItem">
            <img src={imgLink} alt={item.type} />
            <div className="wrap">
              <div className="header">
                <div className="from">{item.from}</div>
                <div className="title">{item.title}</div>
              </div>
              <div className="data">
                <div className="message">"{item.data.message}"</div>
                <div className="time">เวลา - {item.time}</div>
              </div>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Divider />
      </div>
    );
});
function NotiIcon() {
  // useState
  const [noti, setNoti] = useState(notiItem.length);
  if (noti >= 1000000) setNoti((noti / 1000000).toFixed(1) + "M");
  else if (noti > 999 && noti < 1000000)
    setNoti((noti / 1000).toFixed(1) + "k");

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle as="div">
          <div>
            <NotificationsActiveIcon className="noti" />
            <span className="notiUnread">{noti}</span>
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="notiX">{notiItem}</Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default NotiIcon;
