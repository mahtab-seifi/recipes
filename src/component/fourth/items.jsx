import React, { Component, useContext, useState } from "react";
import plus from "../icons/plus (1).png";
import { useAdd } from "../../Context/addContext";
import { useNavigate, useParams } from "react-router-dom";
import itemsContext from "../../Context/itemsContext";
import close from "../icons/cross.png"

function Items({ name, img, id }) {
  const { addToList, addItem } = useAdd();
  const itemContext = useContext(itemsContext);

  const details = itemContext.items.find((item) => item.id === parseInt(id));

  const handleClick = () => {
    addToList(details);
  };
  const isAdd = addItem.some(item=>item.id === id)

  return (
    <>
      <div className="item">
        <button onClick={handleClick}>
          <img src={isAdd? close : plus} alt="" style={{ width: "30px" }} />
        </button>
        <h6>{name}</h6>
        <img src={img} alt="" style={{ width: "50px", borderRadius: "50%" }} />
      </div>
    </>
  );
}

export default Items;
