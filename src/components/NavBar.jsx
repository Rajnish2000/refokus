import image from "../assets/refokus.png";
import Button from "./Button";

const NavBar = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-2 bg-zinc-800 flex items-center justify-between border-b-[1px] border-zinc-700">
        <div className="flex justify-center items-center">
          <img src={image} alt="no images" width={100} />
          <div className="links flex gap-14 ml-20">
            {["Home", "Work", "Culture", "", "News"].map((ele, i) => {
              return ele.length != 0 ? (
                <a className="text-sm items-center gap-1" href="#" key={i}>
                  {i == 1 && (
                    <span
                      style={{ boxShadow: "0 0 14px 0" }}
                      className="inline-block w-1 h-1 bg-green-500 rounded-full"
                    ></span>
                  )}
                  {ele}
                </a>
              ) : (
                <span className="w-[2px] h-6 bg-zinc-500" key={i}></span>
              );
            })}
          </div>
        </div>
        <Button />
      </div>
    </>
  );
};

export default NavBar;
