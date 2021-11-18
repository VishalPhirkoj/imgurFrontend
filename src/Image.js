import React from "react";
import "./Image.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BsFillShiftFill } from "react-icons/bs";
import { FaCommentAlt } from "react-icons/fa";
import { AiTwotoneEye } from "react-icons/ai";

function Image(props) {
  return (
    <>
      <div className="mt-5 shadow-lg  border-primary rounded">
        <LazyLoadImage
          effect="blur"
          src={props.url}
          alt={props.alt}
          width="258px"
          className="rounded-top bg-dark"
        />
        <span></span>
        <div className="bg-dark rounded-bottom">
          <p
            className="text-white float-left m-1 text-capitalize"
            title="Post Name">
            {props.name}
          </p>
          <br />
          <div className="text-center text-muted p-2">
            <span title="Upvote">
              <BsFillShiftFill className="ml-3" />
              {props.likes}
            </span>
            <span title="Comments">
              <FaCommentAlt className="ml-3" />
              {props.comments}
            </span>
            <span title="Post views">
              <AiTwotoneEye className="ml-3" />
              {props.views}
            </span >
          </div>
        </div>
      </div>
    </>
  );
}

export default Image;
