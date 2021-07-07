import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <AppContext.Provider
      value={{ toggleModal, toggleSidebar, showModal, showSidebar }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
