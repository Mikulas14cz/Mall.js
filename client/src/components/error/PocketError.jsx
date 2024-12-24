import React from 'react';

/*---------------------------------------------------------------------------------------------------------*/

function PocketError(props) {
  return (
    <>
        <div className='mt-5 mb-5 verticalHorizonCenter'>
            {props.awesomeIcon ? <span className='fs-1'>{props.awesomeIcon}</span> : <></>}
            {props.text ? <p className={"fs-4 mt-4 text-" + props.meaning}>{props.text}</p> : <></>}
            {props.subtext ? <span className='text-muted'>{props.subtext}</span> : <></>}
        </div>
    </>
  )
}

/*---------------------------------------------------------------------------------------------------------*/

export default PocketError;