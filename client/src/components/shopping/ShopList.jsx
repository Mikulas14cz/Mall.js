import React from 'react';

import Shop from './Shop.jsx';

import Component from '../core/Component.jsx';

function ShopList(props) {
  return (
    <div className='mt-4'>
        <h2>Seznam obchodů</h2><hr />
        <div className='row'>
          {/* Specifická JSX syntaxe pro projetí pole, podobá se for cyklu */}
          {props.shopsArray?.length > 0 && props.shopsArray.map((shop, index) => {
            {/* Generování komponenty Shop pro každý obchod/objekt v poli */}  
              return (    
                <div className='col-xl-6 col-lg-6 mb-3' key={shop}>
                    <Shop
                      key={index} 
                      shop={shop}
                      isMallOpen={props.isMallOpen}
                      onChangeCount={value => props.setCustomersInMallCount(value)}
                  />
                </div>
              )
          })}
        </div>
    </div>
  )
}

export default ShopList;