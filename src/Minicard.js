import React from "react";
import "./Main.css";

function Minicard(props) {
  return (
    <>
      <div className="card bg-dark text-white">
        <img src={props.img} className="card-img" alt={props.alt} />
        <div className="card-img-overlay ">
          <p className="card-text mt-5 pt-4 text-center miniTitle">
            //for title
            {props.title}
          </p>
          <p className="text-center  miniPosts">{props.posts} Posts</p>
        </div>
      </div>
    </>
  );
}

export default Minicard;
