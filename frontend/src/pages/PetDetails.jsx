import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import AdoptForm from "./AdoptForm";

export default function PetDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();

  console.log(state);

  const [showAdoptForm, setShowAdoptForm] = useState(false);

  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex flex-col pt-28 gap-5 px-5 sm:px-14 md:px-32 lg:px-40 overflow-auto">
        <Button
          label="Back to Pet List"
          className="w-fit"
          onClick={() => navigate(state?.from, { state: state?.list })}
        />
        <div className="flex gap-5">
            {/* Pet Image */}
          <div className="w-2/5">
            <img
              className="w-full"
              src={require(`../Assets/${state?.image}`)}
              alt={state?.name}
            />
          </div>
          {/* Details */}
          <div className="w-3/5 flex flex-col gap-3 flex-1">
            <div className="w-full p-5 bg-white text-black rounded-xl">
              <p className="block text-2xl mb-3 font-medium">About Me</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
                quaerat! Nostrum, maiores! Quo, modi? Rem vitae totam, quis iure
                assumenda itaque maiores perspiciatis magni, quisquam, similique
                repellendus commodi quae sit soluta saepe praesentium aut at
                ullam rerum. Deleniti, necessitatibus neque. Illum dolores quo
                amet totam dignissimos iure? Perspiciatis, maiores esse.
              </p>
            </div>
            <div className="flex gap-3 items-center flex-wrap">
              {state?.tag?.map((tag, i) => {
                return (
                  <div
                    key={i}
                    className="p-1 px-4 w-fit rounded-l-full rounded-r-full bg-btnColor"
                  >
                    {tag}
                  </div>
                );
              })}
            </div>
            <div className="flex-1 flex items-end justify-center">
              <Button
                label="Adopt Me"
                className="w-72"
                onClick={() => setShowAdoptForm(true)}
              />
            </div>
          </div>
        </div>
      </div>
      {showAdoptForm && <AdoptForm setShowAdoptForm={setShowAdoptForm} />}
    </>
  );
}
