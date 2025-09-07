import { easeInOut, motion } from "framer-motion";
import { feDropShadow } from "framer-motion/m";

export default function MainPageContent (){
    return (
        <>
        <div className="h-full w-300 md:absolute -ml-30">
            <div className="h-40 mt-10 flex flex-col justify-center items-center">
                <h1 className="text-5xl inter flex gap-5 justify-center items-center">
                    <motion.div
                    initial={{
                        y:-200,
                        opacity:0,
                        rotate:120
                    }}
                    animate={{
                        y:0,
                        opacity:1,
                        rotate:6
                    }}
                    transition={{
                        duration:2,
                        type:"spring"
                    }}
                     className="back p-3 rounded-lg rotate-6">
                        <span className="inter">Benfits</span>
                    </motion.div>
                    <motion.span
                    initial={
                        {
                            opacity:0,
                            scale:0
                        }
                    }
                    transition={{
                        duration:2,
                        type:"spring"
                    }}
                    animate={{
                        opacity:1,
                        scale:1
                    }}
                    >Of Our Services</motion.span></h1>
            </div>
            <div className="h-100 flex">
                <div className="w-full flex justify-center items-center p-1">



                    <motion.div 
                    initial={{
                        opacity:0.9,
                        scale:0.5
                    }}
                    animate={{
                        scale:1,
                        opacity:1
                    }}
                    transition={{
                        duration:2,
                        type:"string"
                    }}
                    className="drop-shadow-xl drop-shadow-black rounded-2xl flex gap-5 p-1 bg-green-300 h-70 w-full">
                        <motion.div 
                        initial={{
                            y:800,
                            rotate:120
                        }}
                        animate={{
                            y:0,
                            rotate:-5
                        }}
                        transition={{
                            duration:4,
                            type:"spring"
                        }}
                        className="w-65 shadow-2xl shadow-black opacity-100 rounded-2xl back -rotate-6">

                        </motion.div>
                        <div className="w-125 gap-10 rounded-2xl flex flex-col ">
                            <div className="rounded-2xl p-1 mt-2 flex-col gap-5 flex justify-center">
                                <h1 className="text-xl">Make Your Farm 100%<span className="ml-1 p-1 rounded-lg bg-green-500 font-bold">Organic & Full Automated</span></h1>
                                <div className="mt-2 h-20 rounded-lg">
                                    <h2 className="">We Are The Part Of Your Farm And Your Life To Organic And Healthy <span className="ml-20 ">Live The Life With Us And Our Service</span></h2>
                                </div>
                            </div>

                            < div className="p-5 rounded-2xl h-20 flex justify-center items-center">
                                <motion.button
                                whileHover={
                                    {
                                        scale:1.1,
                                        boxShadow:"1px 1px 10px black",
                                        transition:{
                                            duration:0.30,
                                            ease:easeInOut
                                        }
                                    }
                                }
                                 className="bg-green-600 hover:bg-green-700 hover:text-white inter-normal px-10 py-1 rounded-lg
                                transition duration-300 ease-in-out ">Learn More</motion.button>
                            </div>
                        </div>
                    </motion.div>



                </div>
                <div className="border w-150">

                </div>
            </div>
        </div>
        </>
    );
}