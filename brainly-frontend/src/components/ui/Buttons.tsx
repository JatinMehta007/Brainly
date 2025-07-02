import type { ReactElement } from "react";

type Vairants = "primary" | "secondary";

 interface ButtonStyles{
    variant : Vairants
    size : "sm" | "md" | "lg";
    text : string;
    StartIcon? : ReactElement;
    EndIcon? : ReactElement;
}

 const VariantStyles ={
    "primary" : "bg-purple-300 text-white",
    "secondary" : "bg-purple-500 text-purple-300"
} 

const sizeStyles={
    "sm" : "px-2 py-1",
    "md" : "px-4 py-2",
    "lg" : "px-6 py-3"
}

const defaultStyles= "text-center  m-10 ";

export const Buttons=(props : ButtonStyles)=>{
    return <button className={`${VariantStyles[props.variant]} + ${sizeStyles[props.size]} + ${defaultStyles}`}>
       {props.StartIcon} {props.text} {props.EndIcon}
        </button>
       
    
}