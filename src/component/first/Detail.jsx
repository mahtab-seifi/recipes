import axios from "axios";
import React, { Component, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import clock from "../icons/clock.png";
import serving from "../icons/restaurant.png";
import rate from "../icons/star.png";
import save from "../icons/save.png";
import { Spinner } from "react-bootstrap";
import bookmark from "../icons/bookmark.png";
import SaveRecipeContext from "../../Context/saveContext";

function DetailsRecipes({}) {
  const [food, setFood] = useState({});
  const { id } = useParams();

  const { savedItems, setSavedItems } = useContext(SaveRecipeContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://dummyjson.com/recipes/${id}`);

      setFood(response.data);
    };
    fetchData();
  }, [id]);

  const handleClick = (itemId) => {
    const isSaved = savedItems.includes(itemId);

    if (isSaved) {
      setSavedItems(savedItems.filter((id) => id !== itemId));
    } else {
      setSavedItems([...savedItems, itemId]);
    }
  };

  return (
    <>
      <div className=" mt-5">
        <div className=" m-3 ">
          <div className="d-flex justify-content-between mx-2 Detail1">
            <div className=" Detail ">
              <div className="">
                <img src={clock} alt="" style={{ width: "1.5em" }} />
                <span className="ps-2">
                  {food.prepTimeMinutes + food.cookTimeMinutes} min .
                </span>
              </div>
              <div className=" ps-md-4">
                <img src={serving} alt="" style={{ width: "1.5em" }} />
                <span className="ps-2">{food.servings}</span>
              </div>
              <div className="ps-md-4">
                <img src={rate} alt="" style={{ width: "1.5em" }} />
                <span className="ps-2">{food.rating}</span>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleClick(food.id)}
                style={{ border: "none", background: "transparent" }}
              >
                {savedItems.includes(food.id) ? (
                  <img src={bookmark} alt="" style={{ width: "1.5em" }} />
                ) : (
                  <img src={save} alt="" style={{ width: "1.5em" }} />
                )}
              </button>
            </div>
          </div>

          <h2 className="fw-bold my-3">{food.name}</h2>
        </div>
      </div>
      <div className="Titles mt-2">
        <h5 className=" fw-bold text-center my-5">YOU NEED</h5>
        <ul>
          {food.ingredients ? (
            food.ingredients.map((ingredient) => (
              <li key={ingredient} className="m-3 fw-bold ">
                {ingredient}
              </li>
            ))
          ) : (
            <p>
              <Spinner animation="border" variant="warning" />
            </p>
          )}
        </ul>
      </div>
      <div className="Titles my-5 ">
        <h5 className=" fw-bold text-center my-5">INSTRUCTION</h5>
        <p className="m-3 fw-bold">{food.instructions}</p>
      </div>
    </>
  );
}

export default DetailsRecipes;
