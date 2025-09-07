import { easeInOut, motion, spring } from "framer-motion";
import { useNavigate, useOutletContext } from "react-router-dom";
import arrow from "../assets/Arrow.png";
import { useState } from "react";

export default function Content() {
  const navigate = useNavigate();
  const [tapped, setTapped] = useState(false);

  const goto = (path) => {
    navigate(path);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 2, ease: easeInOut }}
      className="h-full flex flex-col p-10 gap-15 md:absolute backdrop-blur-3xl ml-20 md:z-10"
    >
      <div className="h-30 flex justify-center items-center">
        <h1 className="font-bold inter-logo">Aruvili</h1>
      </div>

      <div className="h-10 flex gap-5 justify-center items-center">
        <div className="h-15 w-50 rotate-6 rounded-xl back">
          <h1 className="inter flex justify-center items-center font-semibold -rotate-6">
            <span className="ml-1 -mt-1">Organic</span>
          </h1>
        </div>
        <div className="h-full w-130 font-semibold">
          <span className="text-5xl">Farming, Automated</span>
        </div>
      </div>

      <div className="h-50 flex flex-col">
        <div className="h-full flex justify-center items-center font-thin">
          <span className="text-2xl">
            Automate Using Sensors, AI, drones, Solar Power - All Working
            Together
          </span>
        </div>
        <div className="h-full flex justify-center items-center">
          <span className="text-xl text-green-500">ஐயற்கையாக செய்யற்கை விவசாயம்</span>
        </div>
        <div className="h-full flex justify-center items-center">
          <span className="text-lg">From anywhere. For everyone</span>
        </div>
      </div>

      <motion.div className="h-20 flex justify-center select-none">
        <motion.button
          onClick={() => {
            goto("/services");
          }}
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 200, opacity: 0 }}
          transition={{ duration: 1, type: spring }}
          className="shadow-2xl bg-green-300 p-3 w-20 rounded-full flex justify-center items-center
            hover:bg-green-600 transition duration-700 ease-in-out"
        >
          <img src={arrow} className="invert hover:invert-0 h-full" alt="Arrow" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
