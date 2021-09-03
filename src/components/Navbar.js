import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [change, setChange] = useState(false);
  const changeText = () => {
    setChange(!change);
  };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {props.aboutText}
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <div className="d-flex">
            <div
              className="bg-primary rounded mx-2" onClick={() => {props.toggleMode("primary")}}
              style={{ height: "30px", width: "30px", cursor:'pointer' }}
            ></div>
            <div
              className="bg-warning rounded mx-2" onClick={() => {props.toggleMode("warning")}}
              style={{ height: "30px", width: "30px", cursor:'pointer' }}
            ></div>
            <div
              className="bg-danger rounded mx-2" onClick={() => {props.toggleMode("danger")}}
              style={{ height: "30px", width: "30px", cursor:'pointer' }}
            ></div>
            <div
              className="bg-success rounded mx-2" onClick={() => {props.toggleMode("success")}}
              style={{ height: "30px", width: "30px", cursor:'pointer' }}
            ></div>
          </div>
          <div
            className={`custom-control custom-switch mx-3 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
              // onClick={props.toggleMode, ()=> changeText("Enable Light Mode")}
              onClick={() => {
                props.toggleMode();
                changeText();
              }}
            />
            <label className="custom-control-label" htmlFor="customSwitch1">
              {`${change ? "Enable Light Mode" : "Enable Dark Mode"}`}
            </label>
          </div>
        </form>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = { title: "Set title here", aboutText: "About Us" };
