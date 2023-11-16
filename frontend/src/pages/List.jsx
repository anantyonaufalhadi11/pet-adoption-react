import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Arrow from "../Assets/Arrow";
import cats from "../Utils/cats.json"
import dogs from "../Utils/dogs.json"

export default function List() {
  // use navigate hook to navigate through react router dom routes
  const navigate = useNavigate();
  // get state value that sent using react router dom params
  const { state } = useLocation();

  console.log(state);

  const ref = useRef();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 920,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      }
    ],
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar />
      <div className="w-full h-full flex flex-col gap-16 pt-28 px-5 sm:px-14 md:px-32 lg:px-40">
        <Button label="Back to Categories" className="w-fit" onClick={() => navigate("/categories")} />
        <div className="flex flex-col items-center gap-5">
          {/* Title */}
          <p className="text-xl font-bold uppercase">{state}S</p>
          {/* <img src={require(`../../Assets/${state}1.png`)} /> */}
          <div className="w-full bg-white/30 p-3 px-10 flex items-center grow-0 relative">
            <Arrow
              className="w-10 h-10 z-10 cursor-pointer shrink-0 absolute left-3   rotate-180"
              onClick={() => ref.current.slickPrev()}
            />
            {/* Carousel */}
            <div className="w-full">
              <Slider
                ref={ref}
                {...settings}
                centerMode={true}
                autoplay
                autoplaySpeed={2000}
                className="h-full center"
              >
                {/* Loopa data array based on categories */}
                {(state === "Cat" ? cats : dogs)
                  .map((pet, i) => {
                    return (
                      <div className="h-full carousel-item float-left w-full cursor-pointer hover:brightness-90" key={i} onClick={() => navigate("/details", { state: {...pet, list: state, from: "/list"} })}>
                        <img
                          className="block w-full h-56 rounded-2xl object-contain"
                          src={require(`../Assets/${pet.image}`)}
                          alt="pet"
                        />
                      </div>
                    );
                  })}
              </Slider>
            </div>
            <Arrow
              className="w-10 h-10 z-10 cursor-pointer shrink-0 absolute right-3"
              onClick={() => {
                ref.current.slickNext();
                console.log("asdasd");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
