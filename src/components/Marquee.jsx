import { motion } from "framer-motion";

const Marquee = ({ imageurls, direction }) => {
  return (
    <div className="w-full flex overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
        className="flex flex-shrink-0 gap-14 py-8 pr-32"
      >
        {imageurls.map((url, index) => {
          return <img src={url} key={index} className="bg-cover max-h-9" />;
        })}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
        className="flex flex-shrink-0 gap-14 py-8 pr-32"
      >
        {imageurls.map((url, index) => {
          return <img src={url} key={index} className="bg-cover max-h-9" />;
        })}
      </motion.div>
    </div>
  );
};

export default Marquee;
