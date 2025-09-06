import { motion ,MotionConfig, spring} from "framer-motion";
export default function Oval() {
    return(
        <>
            <motion.div 
            initial={{
                y:500
            }}
            animate={{
                y:0,
            }}
            transition={{
                duration:5,
                type:spring
            }}
            exit={{
                y:-30
            }}
            className=" absolute h-40 w-35 bg-green-300 rounded-full left-30 rotate-45 bottom-20">

            </motion.div>
            <motion.div 
                initial={{
                y:500
            }}
            animate={{
                y:0
            }}
            transition={{
                duration:5,
                type:spring
            }}
            exit={{
                y:-30
            }}
            className=" absolute h-40 w-35 bg-green-300 rounded-full right-30 -rotate-45 top-20">

            </motion.div>
        </>
    );
}
