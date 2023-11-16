import React from "react";
import Navbar from "../Components/Navbar";
import TextField from "../Components/TextField";

export default function DonatePage() {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex pt-28 items-center flex-col gap-10 px-5 sm:px-14 md:px-32 lg:px-40">
        <p className="font-bold">DONATE FORM</p>
        <div className="flex flex-col gap-3 w-fit p-10 items-center rounded-xl bg-white text-black">
          <label className="w-full lg:w-3/4">
            <p>Nominal*</p>
            <TextField className="w-full" />
          </label>
          <label className="w-full lg:w-3/4">
            <p>Dari*</p>
            <TextField className="w-full" />
          </label>
          <label className="w-full lg:w-3/4">
            <p>Email*</p>
            <TextField className="w-full" />
          </label>
          <label className="w-full lg:w-3/4">
            <p>Pesan*</p>
            <TextField className="w-full" />
          </label>
          <label className="w-full lg:w-3/4 flex items-center gap-2">
            <input type="checkbox" />
            <p>Saya berusia 17 tahun atau lebih</p>
          </label>
          <label className="w-full lg:w-3/4 flex items-center gap-2">
            <input type="checkbox" />
            <p>
              Saya setuju bahwa dukungan ini diberikan secara sukarela dan bukan
              sebagai imbalan atas kegiatan komersial, sesuai dengan syarat dan
              ketentuan.
            </p>
          </label>
        </div>
      </div>
    </>
  );
}
