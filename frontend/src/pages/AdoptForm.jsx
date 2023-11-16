import React from "react";
import Button from "../Components/Button";
import TextField from "../Components/TextField";

export default function AdoptForm({ setShowAdoptForm }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center p-10 z-50 text-black">
        <div className="w-full relative sm:w-3/4 md:w-4/6 lg:w-2/3 lg:max-w-[500px] bg-white min-h-[100px] rounded-lg overflow-hidden">
          <p className="absolute top-4 right-5 cursor-pointer" onClick={() => setShowAdoptForm(false)}>X</p>
          {/* Content */}
          <div className="p-10 pb-0 flex justify-center  space-x-3">
            <div className="w-full flex flex-col gap-3">
              <p className="text-lg text-center w-full">Adopt Form</p>
              <label className="flex flex-wrap items-center">
                <p className="w-36">Nama:</p>
                <TextField placeholder="Nama" className="flex-1 min-w-[150px]"/>
              </label>
              <label className="flex flex-wrap items-center">
                <p className="w-36">Email:</p>
                <TextField placeholder="Email" className="flex-1 min-w-[150px]"/>
              </label>
              <label className="flex flex-wrap items-center">
                <p className="w-36">Phone Number:</p>
                <TextField placeholder="Phone Number" className="flex-1 min-w-[150px]"/>
              </label>
              <label className="flex flex-wrap items-center">
                <p className="w-36">Address:</p>
                <TextField placeholder="Address" className="flex-1 min-w-[150px]"/>
              </label>
            </div>
          </div>
          {/* footer */}
          <div className={`flex justify-end items-center px-10 pt-3 pb-10 space-x-3 text-white`}>
            <Button label="Submit" onClick={() => setShowAdoptForm(false)} />
          </div>
        </div>
      </div>
      <div className="bg-black/30 fixed w-screen h-screen inset-0 z-40"></div>
    </>
  );
}
