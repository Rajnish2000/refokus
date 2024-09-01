import { IoIosReturnRight } from "react-icons/io";
function Button({ title }) {
  return (
    <div className="w-40 py-2 bg-zinc-50 text-black rounded-full flex justify-around items-center">
      <button className="text-sm font-medium">
        {!title ? "Get Started" : title}
      </button>
      <IoIosReturnRight />
    </div>
  );
}

export default Button;
