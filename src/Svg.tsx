import * as React from "react";
import {useEffect, useState} from "react";
import pathsByDistrict from "./1974paths.tsx";
import resultsF from "./1974results.ts";
import {FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp, FaMinus, FaPlus} from "react-icons/fa";

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


type pD = { path:string, results:number[]}
const D = ({path, results }:pD) =>{

    const opacity = ((results[1] - results[0])/100)

    const window = useWindowDimensions()

    const bgColor = ((results[0] - results[1] <= 0) ? ( "#ff7373"):("#6f9bff"))
    const [bgOver,setBgOver] = useState( false )
    const handleMouseEnter = ()=>{
        console.log("in")
        setBgOver(true)
    }

    const handleMouseLeave = ()=>{
        console.log("out")
        setBgOver(false)
    }




    return(
        <path onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}

            fillRule="evenodd"
            d={path}
            vectorEffect="none"
            id="d1"
            style={{
                stroke: ("#000000"),
                strokeWidth: 1,
                strokeMiterlimit: 4,
                strokeDasharray: "none",
                strokeOpacity: 1,
                fill: !bgOver ? bgColor : ("#252525") ,
                fillOpacity:  !bgOver ? (1- (opacity < 0 ? opacity * -1 : opacity) + 0.5) : 1
            }}
        />
    )
}
const SVGComponent = (props) => {

    const paths = pathsByDistrict();
    const results = resultsF();

    const window = useWindowDimensions()

    const [scale, setScale] = useState(0.8)
    const [xShift, setXShift] = useState(0)
    const [yShift, setYShift] = useState(0)

    const startingW = 2277.2002;
    const startingH = 2162.1324

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



    return  (
        <div className={" w-screen h-screen fixed flex justify-center overflow-clip "}>

            <div className={"fixed top-1 left-1 z-30 flex flex-row space-x-1 text-white"}>
                <div className={"relative bg-stone-800 p-1 flex flex-row rounded"} >
                    <button onClick={()=>setScale(scale+0.1)} className={" p-1 "}><FaPlus /></button>
                    <button onClick={()=>setScale(scale-0.1)} className={" p-1"}><FaMinus /></button>
                </div>


                <div className={"relative bg-stone-800 p-1 flex flex-row rounded "} >
                    <button onClick={()=>setXShift(xShift-100)} className={" p-1"}><FaArrowLeft /></button>
                    <button onClick={()=>setXShift(xShift+100)} className={" p-1"}><FaArrowRight /></button>
                </div>

                <div className={"relative bg-stone-800 p-1 flex flex-row rounded "} >
                    <button onClick={()=>setYShift(yShift-100)} className={" p-1"}><FaArrowUp /></button>
                    <button onClick={()=>setYShift(yShift+100)} className={" p-1"}><FaArrowDown /></button>
                </div>
            </div>



            <svg
                className={""}
                viewBox={"615 169 2277.2002 2162.1324"}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                style={{
                    position: 'relative',
                    top: `${yShift}px`,  // Shift down
                    left: `${xShift}px`, // Shift right
                    transformOrigin: '50% 50%',
                    transform: ` scale(${scale})`,

                }}
                sodipodi:docname="1976 Texas US House.svg"
                inkscape:version="1.1.1 (3bf5ae0d25, 2021-09-20)"
                xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:cc="http://creativecommons.org/ns#"
                xmlns:dc="http://purl.org/dc/elements/1.1/"
                {...props}
            >
                    <g >
                        <D path={ paths["1"].path} results={ results["1"] } />
                        <D path={ paths["2"].path} results={ results["2"] }/>
                        <D path={ paths["3"].path} results={ results["3"] }/>
                        <D path={ paths["4"].path} results={ results["4"] }/>
                        <D path={ paths["5"].path} results={ results["5"] }/>
                        <D path={ paths["6"].path} results={ results["6"] }/>
                        <D path={ paths["7"].path} results={ results["7"] }/>
                        <D path={ paths["8"].path} results={ results["8"] }/>
                        <D path={ paths["9"].path} results={ results["9"] }/>
                        <D path={ paths["10"].path} results={ results["10"] }/>
                        <D path={ paths["11"].path} results={ results["11"] }/>
                        <D path={ paths["12"].path} results={ results["12"] }/>
                        <D path={ paths["13"].path} results={ results["13"] }/>
                        <D path={ paths["14"].path} results={ results["14"] }/>
                        <D path={ paths["15"].path} results={ results["15"] }/>
                        <D path={ paths["16"].path} results={ results["16"] }/>
                        <D path={ paths["17"].path} results={ results["17"] }/>
                        <D path={ paths["18"].path} results={ results["18"] }/>
                        <D path={ paths["19"].path} results={ results["19"] }/>
                        <D path={ paths["20"].path} results={ results["20"] }/>
                        <D path={ paths["21"].path} results={ results["21"] }/>
                        <D path={ paths["22"].path} results={ results["22"] }/>
                        <D path={ paths["23"].path} results={ results["23"] }/>
                        <D path={ paths["24"].path} results={ results["24"] }/>
                    </g>

            </svg>
        </div>

    );
}

export default SVGComponent;
