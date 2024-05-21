import React from "react";

import { nav } from "../constants";

function Foother() {
  return (
    <footer className="flex flex-col md:flex-row md:items-center gap-5 justify-between text-white">
      <div className="md:max-w-xs w-full flex flex-col justify-center gap-3">
        <img src="./logo.png" alt="" className="w-32" />
        <p>
          Apacionados por la estetica de los automoviles de nuestros clientes
        </p>
      </div>

      <div className="flex justify-between gap-20">
        <div className="max-w-xs w-full flex flex-col gap-7">
          <h1 className="text-4xl font-semibold">Contact</h1>
          <p>racedetailing@gmail.com</p>
          <p>+54 15 4444 6666</p>
        </div>

        <div className="hidden md:flex max-w-xs w-full flex-col gap-5">
          <h1 className="text-4xl font-semibold">Navegacion</h1>
          <div className="grid grid-cols-2 gap-3">
            {nav.map((item) => (
              <p>{item.title}</p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Foother;
