import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navbar() {
  let menu = ["home", "education", "experience", "projects"];
  const location = useLocation();

  return (
    <div className='flex justify-around items-center text-lg h-[10vh] text-gray-500 w-1/2  capitalize border-b-[1px] '>
      {menu.map((item, index) => (
        <Link
          to={item}
          key={index}
          className={`  ${
            location.pathname === `/${item}` ? "animate-bounce text-white" : ""
          }`}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
