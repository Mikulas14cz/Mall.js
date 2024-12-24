import {React} from 'react';

import Component from '../core/Component';

/*----------------------------------------------------------------------------*/

function ShoppingMallInfo(props) {

  return (
    <Component>
      <div className='row px-1'>
        <div className='col verticalHorizonCenter py-2 mx-2 rounded-1 text-center bg-light text-secondary'>
          <span className='fs-5 ls-1'>
          {props.customersInMallCount} návštěvníků
          </span>
        </div>
        <div className='col verticalHorizonCenter py-2 mx-2 rounded-1 text-center bg-light text-secondary'>
          <span className='fs-5 ls-1'>
          {props.shoppingMall.shops.length} obchody
          </span>
        </div>
      </div>
      </Component>
  )
}

/*----------------------------------------------------------------------------*/

export default ShoppingMallInfo;