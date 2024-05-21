import React from "react";

import { PricingTag } from "../components";

import { pricing } from "../constants";

function Pricing() {
  return (
    <section className="flex flex-col-reverse md:flex-row gap-10 items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {pricing.map((i) => {
          return <PricingTag key={i.id} {...i} />;
        })}
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-semibold border-l-4 border-l-[#0CC0DF] pl-5">
          Precios
        </h1>
        <p className="text-neutral-500">
          Brindando el mejor precio de la zona acompañado de un exelente servicio
        </p>
      </div>
    </section>
  );
}

export default Pricing;
