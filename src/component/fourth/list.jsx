import React, { Component, useContext } from "react";
import back from "../icons/next (1).png";
import { Link, useNavigate } from "react-router-dom";
import shopping from "../icons/shopping-removebg-preview.png";
import "./Fourth.css";
import plus from "../icons/plus (1).png";
import { useAdd } from "../../Context/addContext";
import close from "../icons/cross.png";
import itemsContext from "../../Context/itemsContext";

function List({ id }) {
  const navigate = useNavigate();
  const { addItem, removeItem } = useAdd();
  const itemContext = useContext(itemsContext);
  const details = itemContext.items.find((item) => item.id === parseInt(id));
  const handleRemove = () => {
    removeItem(details);
  };
  return (
    <>
      <div id="back">
        <div className="nav flex-grow-1 justify-content-between mx-4 my-3">
          <h3 className="fw-bold">Shopping List</h3>
          <button
            style={{ background: "transparent" }}
            className="border-0"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={back} alt="" style={{ width: "30px" }} />
          </button>
        </div>
      </div>
      {addItem.length === 0 ? (
        <div className="container text-center my-5 listVector">
          <img src={shopping} alt="" />
          <h1>Add something to</h1>
          <h1>Your list</h1>
        </div>
      ) : (
        <div className="items">
          {addItem.map((item) => (
            <div className="item">
              <button onClick={handleRemove}>
                <img src={close} alt="" style={{ width: "35px" }} />
              </button>
              <h6>{item.name}</h6>
              <img src={item.img} alt="" style={{ width: "50px" }} />
            </div>
          ))}{" "}
        </div>
      )}

      <div className="Add  mx-3 pb-2">
        <Link to="/ShoppingItem" className="nav-link">
          <button className="">
            <img src={plus} alt="" style={{ width: "35px" }} />
          </button>
        </Link>
      </div>
    </>
  );
}

export default List;
