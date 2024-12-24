import {React, useState, useEffect} from 'react';

import Component from '../core/Component';

/*----------------------------------------------------------------------------*/

function ShoppingMallState(props) {

    const [stateColor, setStateColor] = useState("");

    const [stateText, setStateText] = useState("");

    useEffect(() => {

      if (props.isMallInMaintenance){
        setStateColor("warning");
        setStateText("ÚDRŽBA");
      }

      else{
        if (props.isMallOpen){
          setStateColor("success");
          setStateText("OTEVŘENO / OPEN");
        }
  
        else if (!props.isMallOpen){
          setStateColor("danger");
          setStateText("ZAVŘENO / CLOSED");
        }
      }  
    })

  return (
    <Component>
        <div className='row px-2'>
        <div className='col-xl verticalHorizonCenter m-2 rounded-1 text-center bg-success text-white'>  
            <span className='fs-5 ls-1 px-2 d-flex justify-content-between'>
                <span><b>Otevírá v {props.shoppingMall.openingTime}</b></span>
                <span><i class="fa-solid fa-door-open"></i></span>
            </span>
        </div>
            <div className='col-xl verticalHorizonCenter m-2 rounded-1 text-center'>
                <div className={"rounded-1 py-2 text-center bg-"+stateColor}>
                    <span className='text-white fs-5 ls-2'><b>{stateText}</b></span>
                </div>
        </div>
        
        <div className='col-xl m-2 verticalHorizonCenter rounded-1 text-center bg-danger text-white'>
          <div className='fs-5 ls-1 px-2 d-flex justify-content-between'>
            <span><b>Zavírá v {props.shoppingMall.closingTime}</b></span>
            <span><i class="fa-solid fa-door-closed"></i></span>
          </div>
        </div>
        </div>
    </Component>
  )
}

/*----------------------------------------------------------------------------*/

export default ShoppingMallState;