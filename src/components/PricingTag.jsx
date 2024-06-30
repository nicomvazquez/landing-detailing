import React from "react";

function PricingTag({ title, price, text }) {
  return (
    <div className="max-w-sm p-5 border-2 rounded-md flex flex-col gap-5 shadow-lg hover:-translate-y-5 transition-all">
      <div>
        <h1 className="text-2xl border-l-2 border-l-[#0CC0DF] pl-3">{title}</h1>
        <h2 className="text-3xl font-semibold">${price}</h2>
      </div>
      <p className="text-neutral-500">{text}</p>
    </div>
  );
}

export default PricingTag;
