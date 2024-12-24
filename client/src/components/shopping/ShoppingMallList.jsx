import React from 'react';

/*----------------------------------------------------------------------------*/

import Component from '../core/Component';

import PocketError from '../error/PocketError';

import MallCard from './ShoppingMallCard';

/*----------------------------------------------------------------------------*/

function ShoppingMallList(props) {
  return (
    <>
        <Component h2={"Seznam nakupních center"}>
            {props.shoppingMalls?.length != 0 ? (
                <div className="row">
                {props.shoppingMalls?.map(mall => (
                    <div className='col-xl-4 col-lg-6 mb-3' key={mall._id}>
                        <MallCard mall={mall} />
                    </div>
                ))}
                </div>
            ) : (
            <PocketError                    
              text="Nenašli jsme žádné nákupní seznamy!"
              subtext="Pravděpodobně žádné neexsitují."
              meaning="dark"
              awesomeIcon={<i class="fa-solid text-dark fa-magnifying-glass"></i>}
            />
          )}
        </Component>
    </>
  )
}

/*----------------------------------------------------------------------------*/

export default ShoppingMallList;