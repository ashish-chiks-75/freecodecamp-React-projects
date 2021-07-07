import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({page:"", links:[]});

  const openSidebar = () => setShowSidebar(true);
  const closeSidebar = () => setShowSidebar(false);
  const openSubmenu = (page, center, bottom) => {
    const links = sublinks.find((pages) => pages.page === page);
    setPage(links)
    setLocation({ center, bottom });
    setShowSubmenu(true);
  };
  const closeSubmenu = () => setShowSubmenu(false);

  return (
    <AppContext.Provider
      value={{
        showSidebar,
        showSubmenu,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        location,
        page
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
