import { motion } from "framer-motion";

export default function Oval() {
  return (
    <>
      {/* Left oval */}
      <motion.div
        initial={{ y: 500,
             opacity: 0
         }}
        animate={{
         y: 0, opacity: 1
         }}
        transition={{ 
            duration: 2, ease: "easeOut"
         }}
        className="absolute h-40 w-35 bg-green-300 rounded-full left-30 rotate-45 bottom-20"
      >
        {/* Nested motion for infinite floating */}
        <motion.div
          animate={{ y: [0, -40, 0, 40, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-full w-full"
        />
      </motion.div>

      {/* Right oval */}
      <motion.div
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute h-40 w-35 bg-green-300 rounded-full right-30 -rotate-45 top-20"
      >
        <motion.div
          animate={{ y: [0, -40, 0, 40, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-full w-full"
        />
      </motion.div>

      {/* Small circle */}
      <motion.div
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="h-10 w-10 absolute bottom-4 bg-green-700 rounded-full right-30"
      >
        <motion.div
          animate={{ y: [0, -30, 0, 30, 0], rotate: [0, 36, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-full w-full"
        />
      </motion.div>
    </>
  );
}
