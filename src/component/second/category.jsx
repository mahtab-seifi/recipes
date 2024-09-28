import React, { Component ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import back from "../icons/next (1).png";
import { Link } from "react-router-dom";
import italian from "../icons/italia.jpg";
import pakistan from "../icons/pakistan.jpg";
import indian from "../icons/india.jpg";
import asia from "../icons/asian.jpg";
import mexico from "../icons/mexico.jpg";
import maroco from "../icons/Moroccan.jpg";
import Korean from "../icons/korean.jpg";
import japan from "../icons/japan.jpg";
import Mediterranean from "../icons/Mediterranean.jpg";
import American from "../icons/american.jpg";
import Greek from "../icons/Greek.jpg";
import Turkish from "../icons/turkish.jpg";

function Category() {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div id="back">
        <div className="nav flex-grow-1 justify-content-between mx-4 my-3">
          <h3 className="fw-bold">category</h3>
          <button
            className="border-0 "
            style={{ background: "transparent" }}
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={back} alt="" style={{ width: "30px" }} />
          </button>
        </div>
      </div>
      <div className="easyFood m-5 pb-5 ">
        <Link to="/italian " className="nav-link">
          <div className="card">
            <div>
              <img variant="top" src={italian} style={{height:"250px"}}/>
              <h6 className="fw-bold text-center pt-4">Italian Food</h6>
            </div>
          </div>
        </Link>
        <Link to="/pakestani " className="nav-link">
          <div className="card">
            <div>
              <img variant="top" src={pakistan} style={{height:"250px"}}/>
              <h6 className="fw-bold text-center pt-4">Pakestani Food</h6>
            </div>
          </div>
        </Link>
        <Link to="/Asian " className="nav-link">
          <div className="card">
            <div>
              <img variant="top" src={asia} style={{height:"250px"}} />
              <h6 className="fw-bold text-center pt-4">Asian Food</h6>
            </div>
          </div>
        </Link>
        <Link to="/mexican " className="nav-link">
        <div className="card">
          <div>
            <img variant="top" src={mexico} style={{height:"250px"}}/>
            <h6 className="fw-bold text-center pt-4">Mexican Food</h6>
          </div>
        </div>
        </Link>
        <Link to="/indian " className="nav-link">
        <div className="card">
          <div>
            <img variant="top" src={indian} style={{height:"250px"}}/>
            <h6 className="fw-bold text-center pt-4">Indian Food</h6>
          </div>
        </div>
        </Link>
        <Link to="/Mediterranean " className="nav-link">
        <div className="card">
          <div>
            <img variant="top" src={Mediterranean} style={{height:"250px"}}/>
            <h6 className="fw-bold text-center pt-4">Mediterranean Food</h6>
          </div>
        </div>
        </Link>
        <Link to="/Japanese " className="nav-link">
        <div className="card">
          <div>
            <img variant="top" src={japan} style={{height:"250px"}}/>
            <h6 className="fw-bold text-center pt-4">Japanese Food</h6>
          </div>
        </div>
        </Link>
        <Link to="/Moroccan " className="nav-link">
        <div className="card">
          <div>
            <img variant="top" src={maroco} style={{height:"250px"}}/>
            <h6 className="fw-bold text-center pt-4">Moroccan Food</h6>
          </div>
        </div>
        </Link>
        <Link to="/Korean " className="nav-link">
        <div className="card">
          <div>
            <img variant="top" src={Korean} style={{height:"250px"}} />
            <h6 className="fw-bold text-center pt-4">Korean Food</h6>
          </div>
        </div>
        </Link>
        <Link to="/Turkish " className="nav-link">
        <div className="card">
          <div>
            <img variant="top" src={Turkish} style={{height:"250px"}} />
            <h6 className="fw-bold text-center pt-4">Turkish Food</h6>
          </div>
        </div>
        </Link>
        <Link to="/American " className="nav-link">
        <div className="card">
          <div>
            <img variant="top" src={American} style={{height:"250px"}} />
            <h6 className="fw-bold text-center pt-4">American Food</h6>
          </div>
        </div>
        </Link>
        <Link to="/Greek " className="nav-link">
        <div className="card">
          <div>
            <img variant="top" src={Greek} style={{height:"250px"}} />
            <h6 className="fw-bold text-center pt-4">Greek Food</h6>
          </div>
        </div>
        </Link>
      </div>
    </>
  );
}

export default Category;
