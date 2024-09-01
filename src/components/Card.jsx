import { IoIosArrowForward } from "react-icons/io";

const Card = ({ width, show, clr, msg }) => {
  console.log(clr);
  return (
    <div
      className={`${width} min-h-80 bg-zinc-800 p-3 rounded-lg flex flex-col justify-between hover:${
        clr && "bg-violet-600"
      } hover:px-4 duration-400`}
    >
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center py-2">
          <h3 className="text-xs">Lets get started </h3>
          <IoIosArrowForward />
        </div>
        <h1 className="text-2xl leading-none font-semibold py-2 flex-wrap w-40">
          {msg}
        </h1>
      </div>
      <div className="py-2">
        {show && (
          <div className="py-3">
            <h1 className="text-[3.4vw] font-semibold ">Start a Project</h1>
            <button className="border-[1px] text-sm border-zinc-100 py-2 px-4 rounded-full mt-2">
              Contact Us
            </button>
          </div>
        )}
        {!show && (
          <p className="text-sm font-medium text-zinc-500">
            Topics That we drive For.
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
