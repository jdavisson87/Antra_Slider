import React,{ ReactElement, useEffect, useState } from "react";
import './inputComp.scss';
type variant = 'vardefault' | 'percentage'| 'numbered';
type color = 'primary' | 'secondary' | 'coldefault';
type disabled = true|false;
type rangeType = number; 
type myClassName = `class_${variant}_${color}`
type ticker = boolean;
/*
@param myClassName = "class_default_primary"|"class_default_secondary"|etc....
*/
 
interface sliderProps{
    variant?:variant;
    color?: color;
    ISdisabled?: disabled;
    min?: rangeType;
    Max?: rangeType;
    ticker?: boolean;
    Step?:number;
}
function Slider({variant='vardefault',color='primary',ISdisabled=false,min=0,Max=100,ticker=false,Step=1}: sliderProps):ReactElement {
    const[input, inputChange] = useState<number>(0);
    const[Ticks, setTicks] = useState<Array<boolean>>([]);
    useEffect(()=>{
        let numOfTicks = Math.floor(Max/Step);
        let ticks: boolean[]=[];
        for(let i=0;i<numOfTicks;i++){
            ticks.push(true);
        }
        setTicks(prev=>ticks);
    },[input])
    const handleChange =(e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const {target:{value:_result}} = e;
        let result = _result as any as number;
        //configures 
        let process = Math.floor((result/Max)*100);
    
        inputChange(prev=>Number(process));
        console.log('process: ',process,'Max: ', Max,'result: ',result);
    }    
    return ( 
    <div className="container">
        
        <input type='range' min="0" max={Max} step={Step} className={`slider progress-${input} ${variant} ${color} ${ISdisabled}`} onChange={handleChange}/> 
        <div className='ticker-container'>
        {Ticks.map((element,index)=><div key={index} className='ticks'></div>)}
        </div>
    </div>
    );
}

export default Slider;