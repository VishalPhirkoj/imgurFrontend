import React, { useState, useEffect } from "react";
import "./Main.css";
import Minicard from "./Minicard";
import Navbar from "./Navbar";
import axios from "axios";
import { minicards } from "./miniCardsData";
import Image from "./Image";
// import { BsFillShiftFill } from "react-icons/bs";


function Main() {
  const imgApi =
    "https://api.unsplash.com/photos/random?client_id=3LtU-bWNV52SlJw3OhomxReRI1_mQ2GaPnrK1XpVDx4&count=50";

  const [imgCard, setImgCard] = useState([]);

  const getImages = () => {
    axios.get(imgApi).then((res) => {
      console.log(res.data);
      setImgCard(res.data);
    });
  };

  useEffect(() => {
    getImages();
  }, []);
  return (
    <>
      <div className="banner">
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="text-center">
                Keep your friends close, but your memes closer.
              </h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-2">
              <h6 className="text-center float-left">EXPLORE TAGS</h6>
            </div>
            <div className="col-sm-8"></div>
            <div className="col-sm-2">
              <h6 className="text-center float-right">MORE TAGS +</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 card-container">
              {minicards.map((card) => {
                return (
                  <Minicard
                    id={card.id}
                    title={card.title}
                    img={card.img}
                    alt={card.alt}
                    posts={card.posts}
                  />
                );
              })}
            </div>
          </div>

          <div className="row">
                {imgCard.map((card) => {
                  return (
                    <>
                      <div className="col text-center">
                          <Image
                            url={card.urls.regular}
                            alt={card.alt_description}
                            key={card.id}
                          />
                      </div>
                    </>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
