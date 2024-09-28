import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import main from "../icons/main.png";
import easy from "../icons/salad.png";
import medium from "../icons/cooking.png";
import { Link } from "react-router-dom";

function Main() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/recipes");
      setPopular(
        response.data.recipes.filter((recipes) => recipes.rating >= 4.9)
      );
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="main">
        <main className="container ">
          <h4 className="fw-bold">Popular Recipes You Can't Miss</h4>

          <Carousel data-bs-theme="dark">
            {popular.slice(0, 5).map((item) => {
              return (
                <div className="carousel-item" key={item.id}>
                  <div id="slide" >
                    <Link
                      to={`/PopularDetail/${item.id}`}
                      className=" nav-link"
                    >
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                    </Link>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </main>
      </div>
      <div className="secondMain ">
        <div className=" Main2 container my-5">
          <img src={main} alt="" className="" />
          <div >
            <p className="fw-bold ">
              The history of cooking is as old as humanity itself. While the
              exact origins are shrouded in time, archaeological evidence
              suggests that early humans began cooking food around 1.8 million
              years ago.
            </p>
            <Link to="/History">
              <button className="btn btn-outline-warning">Read more</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="thirdMain  ">
        <div className="Main3 container ">
          <div>
            <Link to="/easyFood">
              <img src={easy} alt="" />
            </Link>
            <p>easy Food</p>
          </div>
          <div>
            <Link to="/mediumFood">
              <img src={medium} alt="" />
            </Link>
            <p>medium Food</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
