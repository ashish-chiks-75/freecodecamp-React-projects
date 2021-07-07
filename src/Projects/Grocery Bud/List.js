import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ list, deleteItem, editItem }) => {
  return (
    <article className="grocery-list">
      {list.map((item) => {
        const { id, title } = item;
        return (
          <div key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItem(id)}
              >
                <FaEdit></FaEdit>
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => deleteItem(id)}
              >
                <FaTrash></FaTrash>
              </button>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default List;
