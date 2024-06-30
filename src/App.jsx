import React from "react";

import { Navbar, Foother } from "./components";

import { Home, Services, Proces, Pricing, Team } from "./pages";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-center px-6 p-2 border-b-2">
        <div className="w-full">
          <Navbar />
        </div>
      </div>

      <div className="flex justify-center px-6">
        <div className="xl:max-w-[1280px] w-full">
          <Home />
        </div>
      </div>

      <div className="flex justify-center px-6 py-24">
        <div className="xl:max-w-[1280px] w-full">
          <Services />
        </div>
      </div>

      <div className="bg-[#0CC0DF] flex justify-center my-20 px-6 py-20">
        <div className="xl:max-w-[1280px] w-full">
          <Proces />
        </div>
      </div>

      <div className="flex justify-center px-6 py-20">
        <div className="xl:max-w-[1280px] w-full">
          <Pricing />
        </div>
      </div>

      <div className="flex justify-center px-6 py-20">
        <div className="xl:max-w-[1280px] w-full">
          <Team />
        </div>
      </div>

      <div className="bg-[#2f97aa] flex justify-center px-6 py-14">
        <div className="xl:max-w-[1280px] w-full">
          <Foother />
        </div>
      </div>
    </div>
  );
}

export default App;
