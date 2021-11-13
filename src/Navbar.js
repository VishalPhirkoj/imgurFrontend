import React from "react";
import "./Navbar.css";
import { BsSearch, BsPlusSquareFill } from "react-icons/bs";
import Logo from "./images/LogoWhite.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark sticky-top">
        <div className="container-fluid">
          <Link to="/" class="navbar-brand">
            <img src={Logo} alt="" width="94" height="34" />
          </Link>
          <Link to="/NewPost" className="btn btn-success" type="button">
            <BsPlusSquareFill /> New post
          </Link>
          <form className="">
            <div className="input-group">
              <input
                className="form-control me-2 searchBox"
                type="search"
                placeholder="Images, #tags, @users oh my!"
                aria-label="Search"
              />
              <button
                className="btn searchBtn"
                type="button"
                id="button-addon1">
                <BsSearch />
              </button>
            </div>
          </form>
          <Link to="/Signin" className="btn text-white" type="button">
            Sign in
          </Link>
          <Link to="/Signup" className="btn btn-success" type="button">
            Sign up
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
