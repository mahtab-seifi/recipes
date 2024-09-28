import React, { Component } from "react";
import chef from "../icons/chef.png";

function Header() {
  return (
    <>
      <div className="firstHeader ">
        <div className=" Header container mt-3 mb-3">
          <h1 className="fw-bold w-100">
            Cook like a Pro with <br /> our{" "}
            <span className="headerText">Easy</span> and{" "}
            <span className="headerText">Tasty</span>
            <br /> Recipes
            <span className="headerText">.</span>
          </h1>
          <img src={chef} alt="" className="" />
        </div>
      </div>
    </>
  );
}

export default Header;
