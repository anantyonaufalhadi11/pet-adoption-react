import React, { useState } from "react";
import TextField from "../Components/TextField";
import Button from "../Components/Button";
import LandingPageCat from "../Assets/LandingPageCat.png";
import users from "../Utils/users.json";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  // state untuk menampung user input
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  //FUngsi login
  function handleSubmit(e) {
    e.preventDefault();
    const isUser = users.find(
      (val) => val.username === user.username && val.password === user.password
    );
    if (isUser !== -1) {
      navigate("/categories");
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      {/* Icon App */}
      <img
        src={LandingPageCat}
        alt="cat"
        className="w-full max-w-[150px] top-0"
      />
      <form
        onSubmit={handleSubmit}
        className="w-[90%] sm:w-3/5 md:1/2 max-w-[400px] bg-mainColor flex flex-col items-center rounded-xl p-5"
      >
        <p className="font-bold text-xl">LOGIN</p>
        <p className="mb-10">Selamat datang kembali.</p>
        {/* Field username */}
        <label className="w-full mb-3">
          <p>Username</p>
          <TextField
            className="w-full"
            placeholder="Masukkan Username"
            value={user?.username || ""}
            onChange={(e) =>
              setUser((prev) => {
                // buat copy dari state asli dan ubah, lalu return
                return { ...prev, username: e.target.value };
              })
            }
          />
        </label>
        {/* Field username */}
        <label className="w-full mb-5">
          <p>Password</p>
          <TextField
            className="w-full"
            placeholder="Masukkan Password"
            value={user?.password || ""}
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, password: e.target.value };
              })
            }
            type="password"
          />
        </label>
        <Button
          className="text-white font-semibold w-24"
          label="Login"
          type="submit"
        />
      </form>
    </div>
  );
}
