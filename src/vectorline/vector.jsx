import { motion } from "framer-motion";

export default function Vector() {
  return (

    <div className="h-177 w-420 absolute -ml-100 mt-10 overflow-hidden">
      <svg
        className="inset-0 h-full w-full rotate-24 mb-30"
        viewBox="0 0 1700 400"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 0 200 C 250 100, 500 376, 750 200 S 1450 300, 1700 150"
          stroke="green"
          strokeWidth="2"
          fill="none"
          strokeDasharray="2000" 
          strokeDashoffset="2000"
          initial={{ strokeDashoffset: 2000 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}
