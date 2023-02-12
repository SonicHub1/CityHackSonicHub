import { useState } from "react";
import * as reactIcons from "react-icons/fa";
import {BsFillChatLeftQuoteFill, BsSearch} from 'react-icons/bs'
import { NavLink } from "react-router-dom";
import "../styles/App.css";

function SideBar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/feed",
      name: "Feed",
      icon: <reactIcons.FaNewspaper />,
    },
    {
      path: "/mapscreen",
      name: "Map Screen",
      icon: <reactIcons.FaMapMarkedAlt />,
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <reactIcons.FaUserAlt />,
    },
    {
      path: "/chat",
      name: "Chat",
      icon: <BsFillChatLeftQuoteFill />, 
    },
    {
      path: "/search",
      name: "Search",
      icon: <BsSearch />, 
    }
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="topsection">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{marginLeft: isOpen ? "50px" : "0pX" }} className="bars">
            <reactIcons.FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main style={{margin: 0}}>{children}</main>
    </div>
  );
}

export default SideBar;
