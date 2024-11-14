//  -proj +init=EPSG:3857 for projection

import * as React from "react";
import {SetStateAction, useEffect, useState} from "react";

import paths1970 from "./1970paths.tsx";
import paths1972 from "./1972paths.tsx";
import paths1974 from "./1974paths.tsx";
import paths1982 from "./1982paths.tsx";
import paths1984 from "./1984paths.tsx";
import results1986, {pResult} from "./1986results.ts";

import {FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp, FaMinus, FaPlus} from "react-icons/fa";
import {GiTexas} from "react-icons/gi";
import Selector from "./components/Selector.tsx";
import HoverCard from "./components/HoverCard.tsx";

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
};


type pD = { path:string, results:pResult, index:number, setHover:React.Dispatch<SetStateAction<number>>}
const D = ({path, results , index, setHover}:pD) =>{

    const opacity = ((results.results[1] - results.results[0])/100)

    const bgColor = ((results.results[0] - results.results[1] <= 0) ? ( "#ff7373"):("#6f9bff"))
    const [bgOver,setBgOver] = useState( false )


    const handleMouseEnter = ()=>{

        setBgOver(true)
        setHover(index)
    }

    const handleMouseLeave = ()=>{
        setBgOver(false)
        setHover(-1)
    }


    return(
        <>

            <path onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}

                  fillRule="evenodd"
                  d={path}
                  vectorEffect="none"
                  id="d1"
                  style={{
                      stroke: ("#000000"),
                      strokeWidth: 0.5,
                      strokeMiterlimit: 1,
                      strokeDasharray: "none",
                      strokeOpacity: 1,
                      fill: !bgOver ? bgColor : ("#444444") ,
                      fillOpacity:  !bgOver ? (1- (opacity < 0 ? opacity * -1 : opacity) + 0.5) : 1
                  }}
            ></path>
        </>

    )
}
const SVGComponent = (props) => {

    const results = {
        1968: results1986(),
        1970: results1986(),
        1972: results1986(),
        1974: results1986(),
        1976: results1986(),
        1978: results1986(),
        1980: results1986(),
        1982: results1986(),
        1984: results1986(),
        1986: results1986(),
    };

    const paths = {
        1968: paths1970(),
        1970: paths1970(),
        1972: paths1972(),
        1974: paths1974(),
        1976: paths1974(),
        1978: paths1974(),
        1980: paths1974(),
        1982: paths1982(),
        1984: paths1984(),
        1986: paths1984(),
    }

    const  pathAdjusments= {
        1968:  `1 1 ${2277.2002*0.35} ${2162.1324*0.35}`,
        1970:  `1 1 ${2277.2002*0.35} ${2162.1324*0.35}`,
        1972:  `1 1 ${2277.2002*0.35} ${2162.1324*0.35}`,
        1974: "615 169 2277.2002 2162.1324",
        1976: "615 169 2277.2002 2162.1324",
        1978: "615 169 2277.2002 2162.1324",
        1980: "615 169 2277.2002 2162.1324",
        1982: "610 172 2277.2002 2162.1324",
        1984: "189 130 2345.516206 2226.996372",
        1986: "189 130 2345.516206 2226.996372",
    }


    const window = useWindowDimensions()
    const windowShiftx = window.width/10;
    const windowShifty = window.height/10;


    const [scale, setScale] = useState(0.8)
    const [xShift, setXShift] = useState(0)
    const [yShift, setYShift] = useState(0)

    const [year, setYear] = useState(1986)

    //const startingW = 2277.2002;
    //const startingH = 2162.1324

    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        // Start dragging and record initial position
        setIsDragging(true);
        setOffset({
            x: e.clientX - xShift,
            y: e.clientY - yShift,
        });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        // Calculate new position based on mouse movement
        setXShift( e.clientX - offset.x)
        setYShift(e.clientY - offset.y)
    };

    const handleMouseUp = () => {
        setIsDragging(false); // Stop dragging
    };


    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMoveDiv = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        });
    };

    const [ activeHover , setActiveHover ] = useState(-1)

    return  (
        <div className={" w-screen h-screen fixed flex justify-center overflow-clip "} onMouseMove={handleMouseMoveDiv} >

            <HoverCard activeHover={activeHover} position={position} results={results} year={year}/>

            <div className={"fixed top-1 left-1 z-30 flex flex-row space-x-1 text-white"}>

                <div className={"relative bg-green-800 p-1 flex flex-row rounded"} >
                    <p className={"p-1 text-yellow-400"}><GiTexas /></p>
                </div>
                <div className={"relative bg-stone-800 p-1 flex flex-row rounded"} >
                    <button onClick={()=>setScale(scale+0.1)} className={" p-1 "}><FaPlus /></button>
                    <button onClick={()=>setScale(scale-0.1)} className={" p-1"}><FaMinus /></button>
                </div>

                <div className={"relative bg-stone-800 p-1 flex flex-row rounded "} >
                    <button onClick={()=>setXShift(xShift-windowShiftx)} className={" p-1"}><FaArrowLeft /></button>
                    <button onClick={()=>setXShift(xShift+windowShiftx)} className={" p-1"}><FaArrowRight /></button>
                </div>

                <div className={"relative bg-stone-800 p-1 flex flex-row rounded "} >
                    <button onClick={()=>setYShift(yShift-windowShifty)} className={" p-1"}><FaArrowUp /></button>
                    <button onClick={()=>setYShift(yShift+windowShifty)} className={" p-1"}><FaArrowDown /></button>
                </div>
            </div>


            <div className={"fixed bottom-1 left-1 z-30 flex flex-row space-x-1 text-white"}>

                <Selector
                    leftAction={()=>setYear(year-2 < 1986 ? 1986 : year-2 )}
                    rightAction={()=>setYear(year+2 > 1986 ? 1986 : year+2)}
                    label={`${year}`}>
                </Selector>

            </div>



            <svg
                className={"relative"}
                viewBox={pathAdjusments[`${year}`]}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                style={{

                    top: `${yShift}px`,  // Shift down
                    left: `${xShift-windowShiftx/2}px`, // Shift right
                    transformOrigin: '50% 50%',
                    transform: ` scale(${scale})`,

                }}

                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg"
                {...props}
            >

                    <g >
                        <>{
                            paths[`${year}`].map((path, index)=>{


                                return <D path={ path } results={ results[`${year}`][`${index+1}`] } index={index} setHover={setActiveHover}/>
                            } )
                        }</>
                    </g>

            </svg>
        </div>

    );
}

export default SVGComponent;
