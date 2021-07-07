import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "./context";

const Modal = () => {
  const { toggleModal, showModal } = useContext(AppContext);
  return (
    <div className={`modal-overlay ${showModal ? "show-modal" : null}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={toggleModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;
