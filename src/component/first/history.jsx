import React, { Component,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import back from "../icons/next (1).png";
import history from "../icons/history-removebg-preview.png"

function HistoryRecipes() {
  const navigate = useNavigate();
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div id="back">
        <div className="nav flex-grow-1 justify-content-between mx-4 my-3">
          <h3 className="fw-bold">Cooking History</h3>
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
      <div className="history text-center ">
        <img src={history} alt="" />
        <p>
          Cooking is a fundamental human activity that has evolved over
          millennia. It involves the preparation of food using heat to alter its
          texture, flavor, and nutritional properties. The history of cooking is
          closely intertwined with the development of human societies and
          technological advancements.
        </p>
        <h3>Early Humans and Fire</h3>
        <h6>Discovery of Fire</h6>
        <p>
          Early humans discovered the use of fire, which provided a means to
          cook food.
        </p>
        <h6>Primitive Techniques</h6>
        <p>
          They initially cooked food by roasting it over an open fire or burying
          it in hot ashes.
        </p>

        <h3>Ancient Civilizations and Culinary Innovations</h3>
        <h6>Domestication</h6>
        <p>
          The domestication of animals and plants led to the development of new
          cooking methods and ingredients.
        </p>
        <h6>Culinary Techniques</h6>
        <p>
          Ancient civilizations like the Egyptians, Greeks, and Romans developed
          techniques such as boiling, frying, and baking.
        </p>
        <h6>Spices and Herbs</h6>
        <p>
          The use of spices and herbs to enhance flavor and preserve food was
          common in ancient cultures.
        </p>

        <h3>Medieval Europe and Regional Cuisines</h3>
        <h6>Regional Variations</h6>
        <p>
          Medieval Europe saw the development of distinct regional cuisines
          influenced by local ingredients and traditions.
        </p>
        <h6>Preservation Techniques</h6>
        <p>
          Techniques like salting, smoking, and pickling were used to preserve
          food for longer periods.
        </p>

        <h3>Colonialism and Global Exchange</h3>
        <h6>New Ingredients</h6>
        <p>
          European colonization led to the exchange of foods and ingredients
          between continents.
        </p>
        <h6>Fusion Cuisines</h6>
        <p>
          The blending of different culinary traditions resulted in the creation
          of fusion cuisines.
        </p>

        <h3>Industrial Revolution and Modern Cooking</h3>
        <h6>Technological Advancements</h6>
        <p>
          The Industrial Revolution brought about innovations in cooking
          equipment, such as stoves and ovens.
        </p>
        <h6>Processed Foods</h6>
        <p>
          The rise of processed foods and convenience foods changed the way
          people cook and eat.
        </p>
      </div>
    </>
  );
}

export default HistoryRecipes;
