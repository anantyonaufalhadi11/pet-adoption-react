import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import TextField from "../Components/TextField";
import cats from "../Utils/cats.json";
import dogs from "../Utils/dogs.json";
import { useNavigate } from "react-router-dom";

export default function FindPet() {
  const navigate = useNavigate();
  // Merge dogs and cats array
  const pets = [...dogs, ...cats];

  const [searchField, setSearchField] = useState("");

  const filtered = pets
    ? pets.filter((el) => {
        if (searchField) {
          return (
            el.name.toLowerCase().includes(searchField.toLowerCase()) ||
            el.type.toLowerCase().includes(searchField.toLowerCase()) ||
            el.race.toLowerCase().includes(searchField.toLowerCase())
          );
        } else {
          return el;
        }
      })
    : [];

  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex flex-col items-center pt-24 pb-10 gap-5 px-5 sm:px-14 md:px-32 lg:px-40">
        {/* Search */}
        <label>
          <TextField
            placeholder="Search Cats or Dogs..."
            className="w-72"
            style={{ borderRadius: "999px" }}
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
          />
        </label>
        <div className="w-full bg-white p-14 gap-10 text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-auto">
          {filtered.map((pet, i) => {
            return (
              <div
                className="w-full hover:brightness-90 cursor-pointer"
                onClick={() =>
                  navigate("/details", { state: { ...pet, from: "/find" } })
                }
                key={i}
              >
                <div className="w-full aspect-square bg-slate-100 rounded-t-xl overflow-hidden">
                  <img
                    alt="pet"
                    src={require(`../Assets/${pet.image}`)}
                    className="w-full object-cover"
                  />
                </div>
                <div className="flex flex-col border border-black rounded-b-xl overflow-hidden">
                  <p className="text-center">{pet.name}</p>
                  <div className="flex justify-between items-center px-3">
                    <p>{pet?.type}</p>
                    <p>{pet?.race}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
