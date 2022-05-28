import React, { FC, MouseEvent, ReactNode, useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid";

type ButtonVariant = "contained" | "outlined" | "text"

type ButtonSize = "small" | "medium" | "large";

type ButtonColor = "primary" | "secondary" | "default";

interface IButtonProps { 
    /**
     *   used to customize the color of the button
     */ 
    color?: ButtonColor;
    /**
     *   used to customize the size of the button
     */ 
    size?: ButtonSize;
    /**
     *   used to customize the variant of the button
     */ 
    variant?: ButtonVariant;
    /**
     *   used to defined children element of the button
     */ 
    children?: ReactNode;
    /**
     *   used to disable the button
     */ 
    disabled?:boolean;
    /**
     *   used to defined listener for click event of the button
     */ 
    onClick?:(e:React.MouseEvent)=>void
}

interface IClickPosition {
    x:number;
    y:number;
}

const MyButton: FC<IButtonProps> = ({
    color="primary",
    size="medium",
    variant="contained",
    disabled=false,
    onClick,
    children=<></>
}) => {
    const [clickPosition, setClickPosition] = useState<IClickPosition|null>(null);
    const [rippleArr, setRippleArr] = useState<ReactNode[]>([]);
    const handleClick = (e:MouseEvent) => {

        if(!disabled){
            const {offsetX,offsetY} = e.nativeEvent;
            setClickPosition({x:offsetX,y:offsetY});
            onClick?.(e);
        }
        
    }

    useEffect(() => {
        if(clickPosition !== null){
            const newRipple = (
                <div
                    data-testid="ripple-element"
                    key={uuidv4()}
                    style={{
                        position:"absolute",
                        left:clickPosition.x,
                        top:clickPosition.y,
                        borderRadius:"50%",
                        transform:"translate(-50%,-50%)"
                    }}
                    className={`btn-ripple btn-ripple-${variant}`}
                    onAnimationEnd={()=>{
                        console.log("animationend");
                        setRippleArr(prev=>{
                            let nextRippleArr = [...prev];
                            nextRippleArr.pop();
                            return nextRippleArr
                        })
                    }}
                >
                </div>
            )
            setRippleArr(prev=>[newRipple,...prev]);
        }
    },[clickPosition]);

    console.log("rippleArr",rippleArr)

    const composeClassName = () => {
        const colorVariantCls = `btn-${color}-${variant}`;
        const sizeCls = `btn-${size}`;
        const disabledCls = disabled?`btn-disabled`:"";
        return ["btn",colorVariantCls,sizeCls,disabledCls].join(" ");
    }
    return (
        <>
            <button className={composeClassName()} onClick={handleClick} disabled={disabled}>
                <span>{children}</span>{rippleArr}
            </button>
        </>
    )
}


export default MyButton