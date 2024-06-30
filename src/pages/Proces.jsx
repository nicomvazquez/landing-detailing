import React from "react";

function Proces() {
  return (
    <section id="proceso" className="w-full flex flex-col items-center gap-10">
      <h1 className="text-6xl text-white font-semibold">Proceso.</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20">
        <img
          src="./1.png"
          alt=""
          className="hover:-translate-y-5 transition-all"
        />
        <img
          src="./2.png"
          alt=""
          className="hover:-translate-y-5 transition-all"
        />
        <img
          src="./3.png"
          alt=""
          className="hover:-translate-y-5 transition-all"
        />
        <img
          src="./4.png"
          alt=""
          className="hover:-translate-y-5 transition-all"
        />
      </div>
    </section>
  );
}

export default Proces;
