import * as React from "react";
import GOPi from "../assets/REP.png"
import DEMi from "../assets/dem.png"
import {MdVerified} from "react-icons/md";
import {BsAwardFill} from "react-icons/bs";
import {IoMdTrophy} from "react-icons/io";

type pHoverCard = {activeHover: number, position: {x:number, y:number}, results:any, year:number }
export default function HoverCard({activeHover, position, results,year}:pHoverCard){

    const winnerIndex = activeHover != -1 ? (
        results[`${year}`][ `${activeHover+1}`].results[0] > results[`${year}`][ `${activeHover+1}`].results[1] ? 0 : 1
        ):(0)

    const handleTopOffset =() =>{
        return (position.y - ( 224 * (position.y/window.innerHeight) ) )
    }

    const handleLeftOffset =()=>{
        if( position.x < window.innerWidth/2){
            return position.x + 10
        } else{
            return position.x - 176 - 10
        }
    }


    return(
        <div
            className={`z-50 w-44 h-56 bg-gray-600 rounded   ${ activeHover < 0 && "hidden"} px-1`}
            style={{
                position: 'fixed',
                top: handleTopOffset(),
                left: handleLeftOffset(),
                pointerEvents: "none",
                boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.5)"
            }}
        >
            { activeHover != -1 && <div className={"flex flex-col justify-between h-full pb-2"}>
                <div className={"flex flex-row text-white"}>
                    <img  className={"w-4 h-4 mr-1 mt-1 "} src={ winnerIndex === 0 ? DEMi : GOPi}/>
                    <p>{ results[`${year}`][ `${activeHover+1}`].candidates[ winnerIndex]} </p>
                </div>

                <div className={"w-full h-44 rounded-sm flex justify-end p-1"} style={{
                    backgroundImage: `url(${ results[`${year}`][ `${activeHover+1}`].images[0] })`,
                    backgroundSize: "cover"
                }}>  <IoMdTrophy className={"text-orange-500"} /> </div>

                <div className={"bg-gray-900 w-full h-1 mt-2 flex flex-row justify-between"}>

                    <div className={` h-1 `}
                         style={{
                             width: `${results[`${year}`][ `${activeHover+1}`].results[winnerIndex]}%`,
                             backgroundColor: winnerIndex === 0 ? "#5362c9" : "#c95353"
                    }}></div>

                    <div className={` h-1 `}
                         style={{
                             width: `${results[`${year}`][ `${activeHover+1}`].results[ winnerIndex === 0 ? 1 : 0]}%`,
                             backgroundColor: winnerIndex === 0  ?   "#c95353" : "#5362c9"
                    }}></div>

                </div>
            </div> }
        </div>
    )
}