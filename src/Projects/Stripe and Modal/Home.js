import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext } from "./context";

const Home = () => {
  const { toggleSidebar, toggleModal } = useContext(AppContext);
  return (
    <main>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars></FaBars>
      </button>
      <button className="btn" onClick={toggleModal}>
        Show Modal
      </button>
    </main>
  );
};

export default Home;
