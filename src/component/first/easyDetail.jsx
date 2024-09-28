import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import back from "../icons/next (1).png";
import DetailsRecipes from "./Detail";

function EasyDetail({}) {
  const [food, setFood] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://dummyjson.com/recipes/${id}`);

      setFood(response.data);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div className="background">
        <img src={food.image} alt="" className="" />
      </div>
      <div id="back">
        <div className="nav flex-grow-1 justify-content-between mx-4 my-3">
          <h3 className="fw-bold">Food Recipes</h3>
          <button
            className="border-0 "
            style={{ background: "transparent" }}
            onClick={() => {
              navigate("/easyFood");
            }}
          >
            <img src={back} alt="" style={{ width: "30px" }} />
          </button>
        </div>
      </div>
      <DetailsRecipes />
    </>
  );
}

export default EasyDetail;
