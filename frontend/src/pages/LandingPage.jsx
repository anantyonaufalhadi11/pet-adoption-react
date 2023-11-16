import React from "react";
import Button from "../Components/Button";
import LandingPageCat from "../Assets/LandingPageCat.png";
import AccountIcon from "../Assets/AccountIcon";
import PawIcon from "../Assets/PawIcon";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  // use navigate hook to navigate through react router dom routes
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen overflow-hidden">
      {/* Navbar */}
      <div className="w-full fixed top-0 h-20 flex justify-between items-center px-5 sm:px-14 md:px-32 lg:px-40">
        {/* Title */}
        <p className="font-semibold cursor-pointer" onClick={() => navigate("/")}>pet adoption</p>
        {/* Menu */}
        <div className="flex items-center gap-3 md:gap-10">
          <p className="cursor-pointer">home</p>
          <p className="cursor-pointer" onClick={() => navigate("/find")}>find a pet</p>
          <p className="cursor-pointer" onClick={() => navigate("/donate")}>donate</p>
          <p className="text-center cursor-pointer px-5 flex gap-2 items-center shrink-0 rounded-xl bg-btnColor hover:brightness-95" onClick={() => navigate("/login")}>
            <AccountIcon className="h-[1rem]" />
            <span>login</span>
          </p>
        </div>
      </div>
      {/* Content */}
      <div className="w-full h-full flex items-center justify-center px-5 sm:px-14 md:px-32 lg:px-40">
        <div className="grid grid-cols-5 gap-3">
          {/* Text */}
          <div className="col-span-3 flex flex-col justify-center gap-3">
            <p className="text-lg">Welcome to the website</p>
            <p className="text-4xl">Want to adopt some animals?</p>
            <p className="text-sm">
              We will help you to find pets for your choice, explore here
            </p>
            {/* Navigate to Categories */}
            <Button
              onClick={() => navigate("/categories")}
              label={
                <div className="flex items-center gap-2">
                  <PawIcon className="h-[1em]" />
                  <p>explore pets</p>
                </div>
              }
              className="w-fit"
            />
          </div>
          {/* Image */}
          <img className="col-span-2 w-full" alt="cat" src={LandingPageCat} />
        </div>
      </div>
    </div>
  );
}
