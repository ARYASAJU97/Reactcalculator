import React, { useState } from 'react'
import './Calculator.css'

function Calculator() {
    const[display , setDisplay] = useState('')
    const handleClick = (value) =>{
        setDisplay(display + value)
    }
    const calculateResult = () =>{
        try{
            const result = eval(display);
            setDisplay(result);
        }catch(error){
            setDisplay('ERROR,Invalid entry')
        }
    }
    const clearDisplay = () =>{

        setDisplay('')
    }
    const ClearEntry = () =>{
        setDisplay(display.slice(0, -1));
    }
    const handleSignChange = () => {
        setDisplay(-1 * parseFloat(display).toString());
      };
  return (
    <div className='calc'>
        <div className="section">
            <div className="display" id="display">{display}</div>
            <div className="buttons">
            <div className="row">
                    <button className="col clear"  onClick={clearDisplay }>C</button>
                    <button className="col clear"  onClick={ClearEntry}>CE</button>
                </div>
                <div className="row">
                    <button className="col" onClick={()=>handleClick('1')}>1</button>
                    <button className="col"  onClick={()=>handleClick('2')}>2</button>
                    <button className="col"  onClick={()=>handleClick('3')}>3</button>
                    <button className="col symbol"  onClick={()=>handleClick('+')}>+</button>
                </div>
                <div className="row">
                    <button className="col" onClick={()=>handleClick('4')}>4</button>
                    <button className="col" onClick={()=>handleClick('5')}>5</button>
                    <button className="col" onClick={()=>handleClick('6')}>6</button>
                    <button className="col symbol" onClick={()=>handleClick('-')}>-</button>
                </div>
                <div className="row">
                    <button className="col"  onClick={()=>handleClick('7')}>7</button>
                    <button className="col" onClick={()=>handleClick('8')}>8</button>
                    <button className="col" onClick={()=>handleClick('9')}>9</button>
                    <button className="col symbol" onClick={()=>handleClick('*')}>*</button>
                </div>
                <div className="row">
                    <button className="col" onClick={()=>handleClick('.')}>.</button>
                    <button className="col" onClick={()=>handleClick('0')}>0</button>
                    <button className="col symbol" onClick={calculateResult}>=</button>
                    <button className="col symbol" onClick={()=>handleClick('/')}>/</button>
                </div> 
                <div className="row">
                    <button className="col symbol" onClick={()=>handleClick('1/x')}>1/x</button>
                    <button className="col symbol" onClick={handleSignChange}>+/-</button>
                    <button className="col symbol" onClick={()=>handleClick('%')}>% </button>
                    <button className="col symbol" onClick={()=>handleClick('x^2')}>x^2</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Calculator