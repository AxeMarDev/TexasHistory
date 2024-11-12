import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import * as React from "react";


type pSelector = { leftAction:()=>void,  rightAction:()=>void, label:string}
export default function Selector({leftAction,rightAction,label}:pSelector){
    return(
        <div className={"relative bg-stone-800 p-1 flex flex-row rounded "} >
            <button onClick={()=>leftAction()} className={" p-1"}><FaArrowLeft /></button>
            <p>{label}</p>
            <button onClick={()=>rightAction()} className={" p-1"}><FaArrowRight /></button>
        </div>
    )
}