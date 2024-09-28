import React, { Component } from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
import { Card } from "react-bootstrap";
import clock from "../icons/clock (1).png";
import save from "../icons/save.png";
import back from "../icons/next (1).png";
import bookmark from "../icons/bookmark.png";
import SaveRecipeContext from "../../Context/saveContext";

export function Italian() {
  const [food, setFood] = useState([]);
  const navigate = useNavigate();
  const { savedItems, setSavedItems } = useContext(SaveRecipeContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/recipes");
      setFood(
        response.data.recipes.filter((recipes) => recipes.cuisine == "Italian")
      );
    };
    fetchData();
  });
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
      <>
        <div id="back">
          <div className="nav flex-grow-1 justify-content-between mx-4 my-3">
            <h3 className="fw-bold">Italian Food</h3>
            <button
              style={{ background: "transparent" }}
              className="border-0"
              onClick={() => {
                navigate("/category");
              }}
            >
              <img src={back} alt="" style={{ width: "30px" }} />
            </button>
          </div>
        </div>

        <div className="easyFood m-5 pb-5">
          {food.map((item) => {
            const time = item.cookTimeMinutes + item.prepTimeMinutes;
            return (
              <div className="card">
                <Link to={`/categoryDetail/${item.id}`} className=" nav-link">
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
    </>
  );
}

export function Pakistani() {
  const [food, setFood] = useState([]);
  const navigate = useNavigate();
  const { savedItems, setSavedItems } = useContext(SaveRecipeContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/recipes");
      setFood(
        response.data.recipes.filter(
          (recipes) => recipes.cuisine == "Pakistani"
        )
      );
    };
    fetchData();
  });
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
      <>
        <div id="back">
          <div className="nav flex-grow-1 justify-content-between mx-4 my-3">
            <h3 className="fw-bold">Pakistani Food</h3>
            <button
              style={{ background: "transparent" }}
              className="border-0"
              onClick={() => {
                navigate("/category");
              }}
            >
              <img src={back} alt="" style={{ width: "30px" }} />
            </button>
          </div>
        </div>

        <div className="easyFood m-5 pb-5">
          {food.map((item) => {
            const time = item.cookTimeMinutes + item.prepTimeMinutes;
            return (
              <div className="card">
                <Link to={`/categoryDetail/${item.id}`} className=" nav-link">
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
    </>
  );
}

export function Mexican() {
  const [food, setFood] = useState([]);
  const navigate = useNavigate();
  const { savedItems, setSavedItems } = useContext(SaveRecipeContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/recipes");
      setFood(
        response.data.recipes.filter((recipes) => recipes.cuisine == "Mexican")
      );
    };
    fetchData();
  });
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
      <>
        <div id="back">
          <div className="nav flex-grow-1 justify-content-between mx-4 my-3">
            <h3 className="fw-bold">Mexican Food</h3>
            <button
              style={{ background: "transparent" }}
              className="border-0"
              onClick={() => {
                navigate("/category");
              }}
            >
              <img src={back} alt="" style={{ width: "30px" }} />
            </button>
          </div>
        </div>

        <div className="easyFood m-5 pb-5">
          {food.map((item) => {
            const time = item.cookTimeMinutes + item.prepTimeMinutes;
            return (
              <div className="card">
                <Link to={`/categoryDetail/${item.id}`} className=" nav-link">
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
    </>
  );
}

export function Mediterranean() {
  const [food, setFood] = useState([]);
  const navigate = useNavigate();
  const { savedItems, setSavedItems } = useContext(SaveRecipeContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/recipes");
      setFood(
        response.data.recipes.filter(
          (recipes) => recipes.cuisine == "Mediterranean"
        )
      );
    };
    fetchData();
  });
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
      <>
        <div id="back">
          <div className="nav flex-grow-1 justify-content-between mx-4 my-3">
            <h3 className="fw-bold">Mediterranean Food</h3>
            <button
              style={{ background: "transparent" }}
              className="border-0"
              onClick={() => {
                navigate("/category");
              }}
            >
              <img src={back} alt="" style={{ width: "30px" }} />
            </button>
          </div>
        </div>

        <div className="easyFood m-5 pb-5">
          {food.map((item) => {
            const time = item.cookTimeMinutes + item.prepTimeMinutes;
            return (
              <div className="card">
                <Link to={`/categoryDetail/${item.id}`} className=" nav-link">
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
    </>
  );
}

export function Asian() {
  const [food, setFood] = useState([]);
  const navigate = useNavigate();
  const { savedItems, setSavedItems } = useContext(SaveRecipeContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/recipes");
      setFood(
        response.data.recipes.filter((recipes) => recipes.cuisine == "Asian")
      );
    };
    fetchData();
  });
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
      <>
        <div id="back">
          <div className="nav flex-grow-1 justify-content-between mx-4 my-3">
            <h3 className="fw-bold">Asian Food</h3>
            <button
              style={{ background: "transparent" }}
              className="border-0"
              onClick={() => {
                navigate("/category");
              }}
            >
              <img src={back} alt="" style={{ width: "30px" }} />
            </button>
          </div>
        </div>

        <div className="easyFood m-5 pb-5">
          {food.map((item) => {
            const time = item.cookTimeMinutes + item.prepTimeMinutes;
            return (
              <div className="card">
                <Link to={`/categoryDetail/${item.id}`} className=" nav-link">
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
    </>
  );
}

export function Japanese() {
  const [food, setFood] = useState([]);
  const navigate = useNavigate();
  const { savedItems, setSavedItems } = useContext(SaveRecipeContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/recipes");
      setFood(
        response.data.recipes.filter((recipes) => recipes.cuisine == "Japanese")
      );
    };
    fetchData();
  });
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
      <>
        <div id="back">
          <div className="nav flex-grow-1 justify-content-between mx-4 my-3">
            <h3 className="fw-bold">Japanese Food</h3>
            <button
              style={{ background: "transparent" }}
              className="border-0"
              onClick={() => {
                navigate("/category");
              }}
            >
              <img src={back} alt="" style={{ width: "30px" }} />
            </button>
          </div>
        </div>

        <div className="easyFood m-5 pb-5">
          {food.map((item) => {
            const time = item.cookTimeMinutes + item.prepTimeMinutes;
            return (
              <div className="card">
                <Link to={`/categoryDetail/${item.id}`} className=" nav-link">
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
    </>
  );
}

export function Moroccan() {
  const [food, setFood] = useState([]);
  const navigate = useNavigate();
  const { savedItems, setSavedItems } = useContext(SaveRecipeContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/recipes");
      setFood(
        response.data.recipes.filter((recipes) => recipes.cuisine == "Moroccan")
      );
    };
    fetchData();
  });
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
      <>
        <div id="back">
          <div className="nav flex-grow-1 justify-content-between mx-4 my-3">
            <h3 className="fw-bold">Moroccan Food</h3>
            <button
              style={{ background: "transparent" }}
              className="border-0"
              onClick={() => {
                navigate("/category");
              }}
            >
              <img src={back} alt="" style={{ width: "30px" }} />
            </button>
          </div>
        </div>

        <div className="easyFood m-5 pb-5">
          {food.map((item) => {
            const time = item.cookTimeMinutes + item.prepTimeMinutes;
            return (
              <div className="card">
                <Link to={`/categoryDetail/${item.id}`} className=" nav-link">
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
    </>
  );
}

export function Korean() {
  const [food, setFood] = useState([]);
  const navigate = useNavigate();
  const { savedItems, setSavedItems } = useContext(SaveRecipeContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/recipes");
      setFood(
        response.data.recipes.filter((recipes) => recipes.cuisine == "Korean")
      );
    };
    fetchData();
  });
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
      <>
        <div id="back">
          <div className="nav flex-grow-1 justify-content-between mx-4 my-3">
            <h3 className="fw-bold">Korean Food</h3>
            <button
              style={{ background: "transparent" }}
              className="border-0"
              onClick={() => {
                navigate("/category");
              }}
            >
              <img src={back} alt="" style={{ width: "30px" }} />
            </button>
          </div>
        </div>

        <div className="easyFood m-5 pb-5">
          {food.map((item) => {
            const time = item.cookTimeMinutes + item.prepTimeMinutes;
            return (
              <div className="card">
                <Link to={`/categoryDetail/${item.id}`} className=" nav-link">
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
    </>
  );
}

export function Indian() {
  const [food, setFood] = useState([]);
  const navigate = useNavigate();
  const { savedItems, setSavedItems } = useContext(SaveRecipeContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/recipes");
      setFood(
        response.data.recipes.filter((recipes) => recipes.cuisine == "Indian")
      );
    };
    fetchData();
  });
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
      <>
        <div id="back">
          <div className="nav flex-grow-1 justify-content-between mx-4 my-3">
            <h3 className="fw-bold">Indian Food</h3>
            <button
              style={{ background: "transparent" }}
              className="border-0"
              onClick={() => {
                navigate("/category");
              }}
            >
              <img src={back} alt="" style={{ width: "30px" }} />
            </button>
          </div>
        </div>

        <div className="easyFood m-5 pb-5">
          {food.map((item) => {
            const time = item.cookTimeMinutes + item.prepTimeMinutes;
            return (
              <div className="card">
                <Link to={`/categoryDetail/${item.id}`} className=" nav-link">
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
    </>
  );
}

export function American() {
  const [food, setFood] = useState([]);
  const navigate = useNavigate();
  const { savedItems, setSavedItems } = useContext(SaveRecipeContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/recipes");
      setFood(
        response.data.recipes.filter((recipes) => recipes.cuisine == "American")
      );
    };
    fetchData();
  });
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
      <>
        <div id="back">
          <div className="nav flex-grow-1 justify-content-between mx-4 my-3">
            <h3 className="fw-bold">American Food</h3>
            <button
              style={{ background: "transparent" }}
              className="border-0"
              onClick={() => {
                navigate("/category");
              }}
            >
              <img src={back} alt="" style={{ width: "30px" }} />
            </button>
          </div>
        </div>

        <div className="easyFood m-5 pb-5">
          {food.map((item) => {
            const time = item.cookTimeMinutes + item.prepTimeMinutes;
            return (
              <div className="card">
                <Link to={`/categoryDetail/${item.id}`} className=" nav-link">
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
    </>
  );
}

export function Turkish() {
  const [food, setFood] = useState([]);
  const navigate = useNavigate();
  const { savedItems, setSavedItems } = useContext(SaveRecipeContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/recipes");
      setFood(
        response.data.recipes.filter((recipes) => recipes.cuisine == "Turkish")
      );
    };
    fetchData();
  });
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
      <>
        <div id="back">
          <div className="nav flex-grow-1 justify-content-between mx-4 my-3">
            <h3 className="fw-bold">Turkish Food</h3>
            <button
              style={{ background: "transparent" }}
              className="border-0"
              onClick={() => {
                navigate("/category");
              }}
            >
              <img src={back} alt="" style={{ width: "30px" }} />
            </button>
          </div>
        </div>

        <div className="easyFood m-5 pb-5">
          {food.map((item) => {
            const time = item.cookTimeMinutes + item.prepTimeMinutes;
            return (
              <div className="card">
                <Link to={`/categoryDetail/${item.id}`} className=" nav-link">
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
    </>
  );
}
export function Greek() {
  const [food, setFood] = useState([]);
  const navigate = useNavigate();
  const { savedItems, setSavedItems } = useContext(SaveRecipeContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://dummyjson.com/recipes");
      setFood(
        response.data.recipes.filter((recipes) => recipes.cuisine == "Greek")
      );
    };
    fetchData();
  });
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
      <>
        <div id="back">
          <div className="nav flex-grow-1 justify-content-between mx-4 my-3">
            <h3 className="fw-bold">Greek Food</h3>
            <button
              style={{ background: "transparent" }}
              className="border-0"
              onClick={() => {
                navigate("/category");
              }}
            >
              <img src={back} alt="" style={{ width: "30px" }} />
            </button>
          </div>
        </div>

        <div className="easyFood m-5 pb-5">
          {food.map((item) => {
            const time = item.cookTimeMinutes + item.prepTimeMinutes;
            return (
              <div className="card">
                <Link to={`/categoryDetail/${item.id}`} className=" nav-link">
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
    </>
  );
}