import React from "react";

import { nav } from "../constants";

function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center">
      <img src="./logo.png" alt="" className="w-20" />

      <div className="hidden md:flex gap-7">
        {nav.map((i) => {
          return <h1 key={i.title}>{i.title}</h1>;
        })}
      </div>

      <button className="bg-[#0CC0DF] px-5 py-3 text-white">Contactar </button>
    </nav>
  );
}

export default Navbar;
