import React from "react";

function Team() {
  return (
    <section id="equipo" className="flex flex-col-reverse items-start lg:flex-row gap-10 lg:items-center">
      <img src="./team.jpg" alt="" className="w-full lg:max-w-2xl" />
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-semibold border-l-4 border-l-[#0CC0DF] pl-5">
          Nuestro equipo
        </h1>
        <p className="text-neutral-500">
          Lo mas importate es la familia, y no hay nada mejor que compartir la pasion con ellos
        </p>
      </div>
    </section>
  );
}

export default Team;
