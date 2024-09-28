import React, { Component, useState, useEffect } from "react";
import Home from "./component/first/home";
import { Route, Routes } from "react-router-dom";
import EasyFood from "./component/first/easy";
import MediumFood from "./component/first/medium";
import Navigation from "./component/navgation";
import Category from "./component/second/category";
import Saved from "./component/third/saved";
import List from "./component/fourth/list";
import EasyDetail from "./component/first/easyDetail";
import MediumDetail from "./component/first/mediumDetail";
import { SaveRecipeProvider } from "./Context/saveContext";
import PopularDetail from "./component/first/popularDetail";
import SaveDetail from "./component/first/SaveDetail";
import HistoryRecipes from "./component/first/history";
import {
  American,
  Asian,
  Greek,
  Indian,
  Italian,
  Japanese,
  Korean,
  Mediterranean,
  Mexican,
  Moroccan,
  Pakistani,
  Turkish,
} from "./component/second/categoryname";
import CategoryDetail from "./component/second/DetailCategory";
import ShoppingItem from "./component/fourth/shoppingItem";
import eggs from "./component/icons/eggs.jpg";
import bread from "./component/icons/bread.jpg";
import potato from "./component/icons/potato.jpg";
import tomato from "./component/icons/tomato.jpg";
import carrot from "./component/icons/carrots.jpg";
import bacon from "./component/icons/bacon.jpg";
import pumpkin from "./component/icons/pumpkin.jpg";
import eggplant from "./component/icons/eggplant.jpg";
import cheese from "./component/icons/cheese.jpg";
import onions from "./component/icons/onions.jpg";
import chicken from "./component/icons/chicken.jpg";
import mushroom from "./component/icons/mushroom.jpg";
import meat from "./component/icons/meat.jpg";
import garlic from "./component/icons/garlic.jpg";
import cucumber from "./component/icons/cucumber.jpg";
import milk from "./component/icons/milk.jpg";
import celery from "./component/icons/celery.jpg";
import butter from "./component/icons/butter.jpg";
import broccoli from "./component/icons/boroccoli.jpg";
import spinach from "./component/icons/spinach.jpg";
import corn from "./component/icons/corn.jpg";
import pepper from "./component/icons/pepper.jpg";
import peas from "./component/icons/peas.jpg";
import lingo from "./component/icons/lingoini.jpg";
import { AddProvider } from "./Context/addContext";
import itemsContext from "./Context/itemsContext"

function App() {
  const [items, setItems] = useState([
    { name: "eggs", id: 1, img: eggs },
    { name: "milk", id: 2, img: milk },
    { name: "bread", id: 3, img: bread },
    { name: "potato", id: 4, img: potato },
    { name: "tomato", id: 5, img: tomato },
    { name: "onions", id: 6, img: onions },
    { name: "butter", id: 7, img: butter },
    { name: "chicken", id: 8, img: chicken },
    { name: "mushroom", id: 9, img: mushroom },
    { name: "garlic", id: 10, img: garlic },
    { name: "broccoli", id: 11, img: broccoli },
    { name: "cucumber", id: 12, img: cucumber },
    { name: "celery", id: 13, img: celery },
    { name: "cheese", id: 14, img: cheese },
    { name: "bacon", id: 15, img: bacon },
    { name: "spinach", id: 16, img: spinach },
    { name: "meat", id: 17, img: meat },
    { name: "eggplant", id: 18, img: eggplant },
    { name: "pumpkin", id: 19, img: pumpkin },
    { name: "carrot", id: 20, img: carrot },
    { name: "corn", id: 21, img: corn },
    { name: "pepper", id: 22, img: pepper },
    { name: "peas", id: 23, img: peas },
    { name: "lingoini", id: 24, img: lingo },
  ]);

  return (
    <> <itemsContext.Provider value={{items:items}} >
      <SaveRecipeProvider>
       
        <AddProvider>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Category />} path="/category" />
            <Route element={<Saved />} path="/saved" />
            <Route element={<List />} path="/List" />
            <Route element={<EasyFood />} path="/easyFood" />
            <Route element={<MediumFood />} path="/mediumFood" />
            <Route element={<MediumDetail />} path="/mediumFood/:id" />
            <Route element={<EasyDetail />} path="/easyFood/:id" />
            <Route element={<PopularDetail />} path="/PopularDetail/:id" />
            <Route element={<SaveDetail />} path="/Detail/:id" />
            <Route element={<HistoryRecipes />} path="/History" />
            <Route element={<Italian />} path="/italian" />
            <Route element={<Pakistani />} path="/pakestani" />
            <Route element={<Asian />} path="/Asian" />
            <Route element={<Mexican />} path="/mexican" />
            <Route element={<Indian />} path="/indian" />
            <Route element={<Mediterranean />} path="/Mediterranean" />
            <Route element={<Japanese />} path="/Japanese" />
            <Route element={<Moroccan />} path="/Moroccan" />
            <Route element={<Korean />} path="/Korean" />
            <Route element={<American />} path="/American" />
            <Route element={<Turkish />} path="/Turkish" />
            <Route element={<Greek />} path="/Greek" />
            <Route
              element={<ShoppingItem />}
              path="/ShoppingItem"
            />
            <Route
              element={<CategoryDetail />}
              path="/categoryDetail/:id"
            />
          </Routes>
        
        <Navigation /></AddProvider>
      </SaveRecipeProvider></itemsContext.Provider>
    </>
  );
}

export default App;
