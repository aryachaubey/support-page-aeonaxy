import { useState } from "react";
import Header from "./Componets/Header";
import { CiSearch } from "react-icons/ci";
import SideNav from "./Componets/SideNav";
import Content from "./Componets/Content";
import Footer from "./Componets/Footer";

function App() {
  return (
    <div className="h-full w-full bg-[#F5F5F5] ">
      <Header />

      {/*This is questionBox*/}

      <div className="">
        <label className="block text-xl ml-5 py-4 md:ml-16 ">Enter your question</label>

        <div className="relative ml-5 md:ml-16">
          <CiSearch className="w-4 h-4 absolute  ml-3 mt-2  text-gray-600 md:ml-4" />
          <input
            type="text"
            placeholder="How do I connect a custom domain?"
            className="w-64 text-xs md:text-lg  h-8 py-3 pl-10  rounded-sm md:w-96"
          />
        </div>
      </div>

      <div className="flex  flex-row justify-start pl-4 md:flex md:pl-10">
        <div className="mb-8">
          <SideNav />
        </div>

        <div className="w-[200px] sm:w-[500px] md:w-[680px] mb-3 md:mt-4">
          <Content />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
