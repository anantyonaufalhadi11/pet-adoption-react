import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <div className="w-full fixed top-0 h-20 flex justify-between items-center px-5 sm:px-14 md:px-32 lg:px-40">
      {/* Title */}
      <p className="font-semibold cursor-pointer" onClick={() => navigate("/")}>pet adoption</p>
      {/* Menu */}
      <div className="flex items-center gap-3 md:gap-10">
        <p className="cursor-pointer" onClick={() => navigate("/")}>home</p>
        <p className="cursor-pointer" onClick={() => navigate("/donate")}>donate</p>
      </div>
    </div>
  );
}
