import Vector from "../vectorline/vector";
import Content from "./Content";
import Oval from "./OvalAnimation";
export default function HomeLayout(){
    return(
        <>
         <div className="h-full flex justify-center relative w-full overflow-hidden">
        <Oval/>
        <div className="h-full w-240 ">
            <Vector/>
            <Content/>
        </div>
        </div>
        </>
    );
}