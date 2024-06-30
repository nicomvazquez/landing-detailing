import React from "react";
import { Link } from "react-scroll";

import { nav } from "../constants";

function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center">
      <img src="./logo.png" alt="" className="w-20" />

      <div className="hidden md:flex gap-7">
        {nav.map((i) => {
          return (
            <Link
              to={i.path}
              smooth={true}
              duration={500}
              offset={-80}
              className="text-xl hover:text-[#0CC0DF] hover:scale-110 transition-all cursor-pointer"
              key={i.title}
            >
              {i.title}
            </Link>
          );
        })}
      </div>

      <button className="bg-[#0CC0DF] hover:bg-[#45bcd1] hover:scale-110 transition-all rounded-md px-4 py-2 text-white">
        Contactar{" "}
      </button>
    </nav>
  );
}

export default Navbar;
