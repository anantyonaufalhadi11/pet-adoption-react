import React from "react";
import DogCategory from "../Assets/DogCategory.png";
import CatCategory from "../Assets/CatCategory.png";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  // use navigate hook to navigate through react router dom routes
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-10">
      {/* Navbar */}
      <Navbar />
      {/* Title */}
      <p className="text-xl font-bold">CATEGORIES</p>
      {/* Option */}
      <div className="flex w-full justify-center gap-5 overflow-hidden px-5 sm:px-14 md:px-32 lg:px-40">
        {/* Dogs */}
        <div
          className="flex-1 sm:flex-none cursor-pointer hover:brightness-90 sm:w-56 aspect-square shrink-0 relative rounded-xl overflow-hidden"
          onClick={() => navigate("/list", { state: "Dog" })}
        >
          <img
            src={DogCategory}
            alt="Dog"
            className="w-full h-full object-cover"
          />
          <div className="font-semibold absolute bottom-1 right-3 flex items-center gap-1">
            <hr className="border-[1px] outline-none w-12" />
            <span>DOGS</span>
          </div>
        </div>
        {/* Cats */}
        <div
          className="flex-1 sm:flex-none cursor-pointer hover:brightness-90 sm:w-56 aspect-square shrink-0 relative rounded-xl overflow-hidden"
          onClick={() => navigate("/list", { state: "Cat" })}
        >
          <img
            src={CatCategory}
            alt="Cat"
            className="w-full h-full object-cover"
          />
          <div className="font-semibold absolute bottom-1 right-3 flex items-center gap-1">
            <hr className="border-[1px] outline-none w-12" />
            <span>CATS</span>
          </div>
        </div>
      </div>
    </div>
  );
}
