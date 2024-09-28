import axios from "axios";
import React, { Component, useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import clock from "../icons/clock (1).png";
import save from "../icons/save.png";
import back from "../icons/next (1).png";
import bookmark from "../icons/bookmark.png";
import SaveRecipeContext from "../../Context/saveContext";

function EasyFood() {
  const [easy, setEasy] = useState([]);
  const navigate = useNavigate();
  const { savedItems, setSavedItems } = useContext(SaveRecipeContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/recipes");
      setEasy(
        response.data.recipes.filter((recipes) => recipes.difficulty === "Easy")
      );
    };

    fetchData();
  }, []);

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
      <div id="back">
        <div className="nav flex-grow-1 justify-content-between mx-4 my-3">
          <h3 className="fw-bold">Easy Food</h3>
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

      <div className="easyFood m-5 pb-5">
        {easy.map((item) => {
          const time = item.cookTimeMinutes + item.prepTimeMinutes;
          return (
            <div className="card">
              <Link to={`/easyFood/${item.id}`} className=" nav-link">
                <div>
                  <img variant="top" src={item.image} />
                  <h6 className="fw-bold text-center pt-4">{item.name}</h6>
                </div>
              </Link>
              <Card.Body>
                <Card.Text id="cardTitle">
                  <div className="fisrt">
                    <img src={clock} alt="" />
                    <span className="ps-2">{time}</span>
                    <span className="ps-1">min .</span>
                  </div>
                  <div>
                    <button
                      className="border-0"
                      style={{ background: "transparent" }}
                      onClick={() => handleClick(item.id)}
                    >
                    
                      {savedItems.includes(item.id) ? (
                        <img src={bookmark} alt="" />
                      ) : (
                        <img src={save} alt="" />
                      )}
                    </button>
                  </div>
                </Card.Text>
              </Card.Body>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default EasyFood;
