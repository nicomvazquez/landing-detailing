import React from "react";

import { ServiceTag } from "../components";

import { services } from "../constants";

function Services() {
  return (
    <section id="servicios" className="flex flex-col gap-10 md:flex-row items-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-semibold border-l-4 border-l-[#0CC0DF] pl-5">
          Servicios
        </h1>
        <p className="text-neutral-500">
          Nos enfocamos en ofrecer el mejor servicio de detailing, priorizando
          el cuidado del vehiculo
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services.map((i) => {
          return <ServiceTag key={i.id} {...i} />;
        })}
      </div>
    </section>
  );
}

export default Services;
