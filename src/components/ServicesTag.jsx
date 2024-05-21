import React from "react";

function ServicesTag({ title, text }) {
  return (
    <div className="border-2 border-[#0CC0DF] max-w-sm text-center p-4 rounded-md">
      <h1 className="text-lg font-bold mb-3">{title}</h1>
      <p>{text}</p>
    </div>
  );
}

export default ServicesTag;
