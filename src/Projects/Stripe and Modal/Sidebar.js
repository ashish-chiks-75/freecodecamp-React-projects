import React, { useContext } from "react";
import { AppContext } from "./context";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";

const Sidebar = () => {
  const { toggleSidebar, showSidebar } = useContext(AppContext);
  return (
    <aside className={`sidebar ${showSidebar ? "show-sidebar" : null}`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="coding addict"></img>
        <button className="close-btn" onClick={toggleSidebar}>
          <FaTimes></FaTimes>
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
