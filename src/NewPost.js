import React from "react";
import "./NewPost.css";
import { BsFillImageFill } from "react-icons/bs";
import memeIcon from "./images/Meme.svg";
import videoIcon from "./images/video.svg";
import uploadIcon from "./images/myUploads.svg";

function NewPost() {
  return (
    <>
      <div className="container mt-5 p-5 text-center">
        <div className="row mt-5 shadow-lg">
          <div className="col-sm-6 leftPanel rounded-left">
            <div className="container p-3 text-center">
              <h5 className="text-white DropIcon">Drop image here</h5>
            </div>
          </div>
          <div className="col-sm-6 rightPanel rounded-right">
            <div className="container my-4 p-3 text-center">
              <h6 className="m-3 text-white choose">
                <BsFillImageFill /> &ensp; Choose Photo/Video
              </h6>
              <p className="m-3 text-white">or</p>
              <input
                type="text"
                name="pastUrl"
                id="pastUrl"
                placeholder="Paste image or URL"
                className=" p-1 text-center inputUrl"
              />
              <div className="iconGrp m-3">
                <div className="btn text-white m-2">
                  <img src={memeIcon} alt="" srcset="" /> <br />
                  Meme Gen
                </div>
                <div className="btn text-white m-2">
                  <img src={videoIcon} alt="" srcset="" /> <br />
                  Video to Gif
                </div>
                <div className="btn text-white m-2">
                  <img src={uploadIcon} alt="" srcset="" /> <br />
                  My Uploads
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p className="termText">
              By creating a post, you agree to Imgur's <span className="term">Terms of Service</span> and <span className="term">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPost;
