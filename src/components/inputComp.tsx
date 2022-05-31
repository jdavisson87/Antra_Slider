import React,{ ReactElement, useState } from "react";
import './inputComp.scss';
type variant = 'default' | 'percentage'| 'numbered';
type color = 'primary' | 'secondary';
type disabled = true|false;
type rangeType = Number; 
type myClassName = `class_${variant}_${color}`
/*
@param myClassName = "class_default_primary"|"class_default_secondary"|etc....
*/
 
interface sliderProps{
    variant?:variant;
    color?: color;
    ISdisabled?: disabled;
    min?: rangeType;
    max?: Number;
}
function Slider({variant,color,ISdisabled,min=0,max=100}: sliderProps):ReactElement {
    const[input, inputChange] = useState<Number>(0);
    const handleChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const {target:{value:result}} = e;
        //configures 
        let process = Math.ceil(Number(max)*(Number(result)/100));

        inputChange(prev=>Number(process));
        console.log(process, max);
    }    
    return ( 
    <div className="container">
        
        <input type='range' min="0" max="100" list='hi' className={`slider progress-${input}`} onChange={handleChange}/> 
        
    </div>
    );
}

export default Slider;