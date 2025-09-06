import { easeIn, easeInOut, motion } from "framer-motion";
import arrow from "../assets/Arrow.png";
export default function Content() {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0,
        }}
        transition={{
          duration: 2,
          ease: easeInOut,
        }}
        className="h-full flex flex-col p-1 gap-15 md:absolute backdrop-blur-3xl ml-20 md:z-10"
      >
        <div className="h-30 flex justify-center items-center">
          <h1 className="font-bold inter-logo">Aruvili</h1>
        </div>

        <div className="h-10 flex gap-10 justify-center items-center">
          <div className="h-15 w-50 rotate-6 rounded-xl back">
            <h1 className="font-poppins inter flex justify-center items-center font-semibold -rotate-6">
              organic
            </h1>
          </div>
          <div className="h-full w-130 font-semibold">
            <span className="text-5xl">Farming, Automated</span>
          </div>
        </div>
        <div className="h-50 flex flex-col">
          <div className="h-full flex justify-center items-center font-thin">
            <span className="text-2xl">
              Automate Using Sensors, AI, drones,Solar Power - All Working
              Together
            </span>
          </div>
          <div className="h-full flex justify-center items-center">
            <span className="text-xl">ஐயற்கையாக செய்யற்கை விவசாயம்</span>
          </div>
          <div className="h-full flex justify-center items-center">
            <span className="text-lg">From anywhere. For everyone</span>
          </div>
        </div>
        <motion.div
          initial={{ y: 0 }}
          whileTap={{
            y: 50, // move up
            transition: {
              type: "spring",
              stiffness: 500,
              damping: 10,
            },
          }}
          className="h-20 flex justify-center"
        >
          <motion.button
            className="shadow-2xl bg-green-300 p-3 w-20 rounded-full flex justify-center items-center
      hover:bg-green-600 transition duration-700 ease-in-out"
          >
            <img
              src={arrow}
              className="invert hover:invert-0 h-full"
              alt="Arrow"
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
}
