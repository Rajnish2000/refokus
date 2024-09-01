import React from "react";

const Footer = () => {
  return (
    <div className="w-full py-10 mt-10 px-5 flex gap-5 justify-between items-center">
      <div className="max-w-screen-xl mx-auto py-5">
        <h1 className="text-9xl  font-extrabold tracking-tighter leading-none">
          refokus.
        </h1>
      </div>
      <div className="max-w-screen-xl mx-auto py-5 flex flex-row gap-12">
        <div className="flex flex-col gap-5 text-zinc-400">
          <h2>Social</h2>
          <div className="flex flex-col">
            {["Instagram", "Twitter (X?)", "Linkedin", "Facebook"].map(
              (item, index) => {
                return (
                  <a href="#" key={index}>
                    {item}
                  </a>
                );
              }
            )}
          </div>
        </div>
        <div className="flex flex-col gap-5 text-zinc-400">
          <h2>Social</h2>
          <div className="flex flex-col">
            {["Instagram", "Twitter (X?)", "Linkedin", "Facebook"].map(
              (item, index) => {
                return (
                  <a href="#" key={index}>
                    {item}
                  </a>
                );
              }
            )}
          </div>
        </div>
        <div className="w-44">
          <p className="flex text-wrap py-2">
            Refokus is pioneering digital agency driven by design and empowered
            by technology.
          </p>
          <button className="border-[1px] border-blue-600 bg-blue-600 text-white px-3 py-1 mt-2 rounded-md">
            bitmaplem
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
