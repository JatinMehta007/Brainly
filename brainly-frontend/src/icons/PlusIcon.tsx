import { iconSizeVariants, type IconProps } from "."

export const PlusIcon=(props : IconProps)=>{
    
return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={iconSizeVariants[props.size]}>
  <path stroke-Linecap="round" stroke-Linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

}



