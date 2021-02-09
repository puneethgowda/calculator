import React from 'react';
import Output from "./Output";
import InputKey from "./InputKey";
import "./calculator.scss"

const keys = [
    [1,2,3,"+"],
    [4,5,6,"-"],
    [7,8,9,"*"],
    ["clear",0,"=","/"],
    ["+/-","√","3√"]
];

const Calculator = () => {
    return (
        <div className="calculator">
            <div className="calculator__output">
                <Output output={0}/>
            </div>
            {
                keys.map(row=>(
                    row.map(item=> <InputKey onClick={()=>{}} key={item} input={item} />)
                ))
            }
        </div>
    );
};

export default Calculator;