import React from "react";
import "./Signin.css";
import backLogo from "./images/back.png";
import imgurLogoWhite from "./images/LogoWhite.png";

import { Link } from "react-router-dom";
import Socialbtns from "./Socialbtns";

function signup() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="float-left p-3">
              <p className="btn">
                <Link to="/" className=" text-decoration-none">
                  <img src={backLogo} alt="" srcset="" />
                  <span className="text-white text-decoration-none m-2">
                    Back to Imgur
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="text-center">
              <img src={imgurLogoWhite} alt="" width="187" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 m-auto">
            <p className="text-center text-white mt-4 pt-3 pText">
              Register with
            </p>
            <Socialbtns />
            <p className="text-center text-white  pText">or with Imgur</p>
            <div className="form bg-dark p-3 text-center rounded shadow-lg">
              <input
                type="text"
                name="txtUsername"
                id="txtUsername"
                placeholder="Username"
              />
              <input
                type="email"
                name="txtEmail"
                id="txtEmail"
                placeholder="Email"
              />
              <br />
              <input
                type="password"
                name="txtPassword"
                id="txtPassword"
                placeholder="Password"
              />
              <input
                type="password"
                name="txtRetypePassword"
                id="txtRetypePassword"
                placeholder="RetypePassword"
              />
              <input
                type="text"
                name="txtPhoneNumber"
                id="txtPhoneNumber"
                placeholder="Phone Number"
              />
              <p className="text-muted">
                Standard message and data rates may apply.
              </p>
              <p className="pText text-white">
                Why do I have to verify my phone?
              </p>
            </div>
            <div className="submitArea ">
              <button type="submit" className="btn text-white">
                Sign in
              </button>
              <button type="submit" className="btn btn-primary">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default signup;
