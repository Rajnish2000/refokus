import { motion } from "framer-motion";
import Product from "./Product";
import { useRef, useState } from "react";
import arqitel from "../assets/videos/arqitel-43.webm";
import bcgp from "../assets/videos/bcgp-43.webm";
import cula from "../assets/videos/cula-43.webm";
import layout_land from "../assets/videos/layoutland-43.webm";
import brightbrave from "../assets/videos/rainfall-43.webm";
import ReactPlayer from "react-player";
const Products = () => {
  let products = [
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon  credit certificates.",
      live: true,
      background: "bg-slate-300",
      case: false,
      id: 1,
    },
    {
      title: "BCG Platinion",
      description:
        "We redesigned BCG Platinion's website to be sophisticated and technology-driven, incorporating powerful animations and interactions while maintaining the core elements of its brand.",
      live: true,
      background: "bg-green-400",
      case: true,
      id: 2,
    },
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
      live: true,
      background: "bg-blue-300",
      case: true,
      id: 3,
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      background: "bg-blue-700",
      case: false,
      id: 4,
    },
    {
      title: "Brightwave",
      description:
        "Brightwave, a category disruptor came to a us to build their brand from scratch and make a statement on its launch.",
      live: true,
      background: "bg-violet-500",
      case: false,
      id: 5,
    },
  ];

  const [pos, setPos] = useState(0);
  const [playPos, setPlayPos] = useState(-1);
  const pointerMover = (indx) => {
    setPlayPos(indx);
    let loc = indx * 43;
    setPos(loc);
  };
  const playRef = useRef();
  return (
    <div className="mt-32 relative flex flex-col gap-5 items-center">
      {products.map((elem, index) => {
        return (
          <Product
            elem={elem}
            key={index}
            index={index}
            pos={playPos}
            pointerMover={pointerMover}
          />
        );
      })}
      <div className="absolute w-full h-full top-[-2%] mt-10 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "vh" }}
          transition={{ ease: [0.45, 0, 0.55, 1], duration: 0.6 }}
          className="window absolute w-[33vw] h-[43vh] left-[46%] bg-white overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + "vh" }}
            className="w-full h-full bg-sky-200"
          >
            <ReactPlayer
              playing={playPos == 0 ? true : false}
              url={[{ src: cula }]}
              loop={true}
              controls={true}
              autoPlay={playPos == 0 && true}
              width="auto"
              height="auto"
              ref={playRef}
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "vh" }}
            className="w-full h-full bg-sky-300"
          >
            <ReactPlayer
              playing={playPos == 1 ? true : false}
              url={[{ src: bcgp }]}
              loop={true}
              controls={true}
              autoPlay={true}
              width="auto"
              height="auto"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "vh" }}
            className="w-full h-full bg-sky-400"
          >
            <ReactPlayer
              playing={playPos == 2 ? true : false}
              url={[{ src: arqitel }]}
              loop={true}
              controls={true}
              autoPlay={true}
              width="auto"
              height="auto"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "vh" }}
            className="w-full h-full bg-sky-500"
          >
            <ReactPlayer
              playing={playPos == 3 ? true : false}
              url={[{ src: layout_land }]}
              loop={true}
              controls={true}
              autoPlay={true}
              width="auto"
              height="auto"
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + "vh" }}
            className="w-full h-full bg-sky-500"
          >
            <ReactPlayer
              playing={playPos == 4 ? true : false}
              url={[{ src: brightbrave }]}
              loop={true}
              controls={true}
              autoPlay={true}
              width="auto"
              height="auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
