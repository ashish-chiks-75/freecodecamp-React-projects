import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalSorage = () => {
  const list = localStorage.getItem("list");
  if (list) return JSON.parse(list);
  return [];
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalSorage());
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    showAlert(true, "item deleted", "update");
  };

  const editItem = (id) => {
    const targetItem = list.find((item) => item.id === id);
    setIsEdit(true);
    setEditID(id);
    setName(targetItem.title);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "please enter a grocery item", "danger");
      return;
    }
    if (isEdit) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setIsEdit(false);
      setName("");
      setEditID(null);
      showAlert(true, "item updated", "update");
      return;
    }
    const newItem = { id: new Date().getTime().toString(), title: name };
    setList([...list, newItem]);
    setName("");
    showAlert(true, "Item added", "success");
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="enter item ex: eggs, biscuits"
          ></input>
          <button type="submit" className="submit-btn">
            {isEdit ? "Update" : "Save"}
          </button>
        </div>
      </form>
      {alert.show && <Alert {...alert} removeAlert={showAlert}></Alert>}
      <div className="grocery-container">
        <List list={list} deleteItem={deleteItem} editItem={editItem}></List>
        <button
          className="clear-btn"
          onClick={() => {
            setList([]);
            showAlert(true, "list cleared", "update");
          }}
        >
          Clear All Items
        </button>
      </div>
    </section>
  );
}

export default App;
