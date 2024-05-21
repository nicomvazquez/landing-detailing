import React from "react";

function Home() {
  return (
    <section className="flex items-center justify-between h-full ">
      <div className="flex flex-col gap-10 max-w-xl">
        <h1 className="text-4xl md:text-6xl font-medium">
          El coche sin amortiguadores es nuestro orgullo.
        </h1>
        <p className="text-lg md:text-2xl text-neutral-500">
          Apacionados por la estetica de los automoviles de nuestros clientes
        </p>
        <h1 className="bg-[#0CC0DF] py-3 px-5 text-2xl max-w-xs text-center text-white">
          Reserva tu turno
        </h1>
      </div>

      <div className="relative flex ">
        <img src="./foto.png" alt="" className="hidden w-full md:block z-[5] py-24" />

        <div className="absolute z-[0] w-[70%] left-16 h-[100%] top-0 bg-[#0CC0DF]" />
      </div>
    </section>
  );
}

export default Home;
