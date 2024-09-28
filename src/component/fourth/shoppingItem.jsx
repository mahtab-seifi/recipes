import React, { Component, useContext } from "react";
import back from "../icons/next (1).png";
import { Link, useNavigate } from "react-router-dom";
import Items from "./items";
import itemsContext from "../../Context/itemsContext";

function ShoppingItem({}) {
  const navigate = useNavigate();
  const itemContext =useContext(itemsContext)
  return (
    <>
      <div id="back">
        <div className="nav flex-grow-1 justify-content-between mx-4 my-3">
          <h3 className="fw-bold">Items</h3>
          <button
            style={{ background: "transparent" }}
            className="border-0"
            onClick={() => {
              navigate("/List");
            }}
          >
            <img src={back} alt="" style={{ width: "30px" }} />
          </button>
        </div>
      </div>
      <div className="items">
        {itemContext.items.map((item,index) => (
          <Items key={item.index} name={item.name} img={item.img} id={item.id} />
        ))}
      </div>
    </>
  );
}

export default ShoppingItem;
