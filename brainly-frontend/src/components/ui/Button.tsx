 type Variants = "primary" | "secondary";
 
 interface ButtonProps{
    variant : Variants
    size : "sm" | "md" | "lg";
    text  : string;
    startIcon? : any;
    endIcon? : any;
    onClick? : () => void;
    fullWidth? : boolean;
    loading? : boolean;
}

const VariantStyles= {
    "primary" : "bg-purple-600 text-white",
    "secondary" : "bg-purple-300 text-purple-600"
}

// const sizeStyles ={
//     "sm" : "px-2 py-1",
//     "md" : "px-4 py-2",
//     "lg" : "px-6 py-4 "
// }
const defaultStyles = "rounded-md  px-4 py-2 flex justify-center items-center ";

export const Button=({variant, text, startIcon, endIcon,onClick, fullWidth, loading } : ButtonProps)=>{
    return  <button onClick={onClick} className={`${VariantStyles[variant]} + ${defaultStyles} + ${fullWidth ? " w-full flex justify-center items-center " : ""} + ${loading ? "opacity-35" :""}`}  disabled={loading}>
         <div className="flex items-center ">
         {startIcon ? <div className="pr-2">{startIcon}</div> : null} {text} {endIcon} 
         </div>
         
         </button>
} 


<Button variant="primary" size="md" text="jatin" onClick={()=>{}}></Button>