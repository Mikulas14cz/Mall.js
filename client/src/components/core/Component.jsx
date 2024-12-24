import React from 'react';

/*---------------------------------------------------------------------------------------------------------*/

function Component(props) {
  return (
    <section id='Component'>
        <div className='d-flex justify-content-between'>
          <div>
            {props.h2 ? (
              <h2 className='mb-3'><b>{props.h2}</b></h2>
            ) : <></>}
          </div>
          <div>
            <span className={props.secret ? "text-light" : ""}>{props.corner}</span>
          </div>
        </div>
        {props.hr ? <hr className='mt-0' /> : <></>}
        <div>
          {props.children}
        </div>
    </section>
  )
}

/*---------------------------------------------------------------------------------------------------------*/

export default Component;