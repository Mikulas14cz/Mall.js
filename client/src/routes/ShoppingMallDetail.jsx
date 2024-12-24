import {React, useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
/*----------------------------------------------------------------------------*/

import Menu from '../components/core/Menu';

import Heading from '../components/core/Heading';

import Content from '../components/core/Content';

import ShopsList from '../components/shopping/ShopList';

import ShoppingMallState from '../components/shopping/ShoppingMallState';

import ShoppingMallInfo from '../components/shopping/ShoppingMallInfo';

/*----------------------------------------------------------------------------*/

import shoppingMallDtoOut from "../data/shoppingMall.json";

/*----------------------------------------------------------------------------*/

function MallDetail() {

    const { id } = useParams();

    const [shoppingMall, setShoppingMall] = useState(shoppingMallDtoOut);

    const [shopsArray, setShopsArray] = useState(shoppingMallDtoOut.shops);

    const [openingTime, setOpeningTime] = useState(shoppingMallDtoOut.openingTime);

    const [closingTime, setClosingTime] = useState(shoppingMallDtoOut.closingTime);


    const [isMallOpen, setIsMallOpen] = useState(false);

    const [isMallInMaintenance, setIsMallInMaintenance] = useState(false);
    

    const [customersInMallCount, setCustomersInMallCount] = useState(0);

    let currentHours = new Date().getHours();

    // Deklarace useEffect hooku, který se spouští při každém načtení komponenty App
    useEffect(() => {
        if (openingTime <= currentHours && closingTime > currentHours){
        setIsMallOpen(true);
        } else {
        setIsMallOpen(false);
        }
    }, [])

  return (
    <>
        <Menu /> 
        <Content>
            <Heading h1={shoppingMall.name} center={true} hr={true} />
            <p className='text-muted text-center'>{shoppingMall.description}</p>
            <ShoppingMallState shoppingMall={shoppingMall}  isMallInMaintenance={isMallInMaintenance} isMallOpen={isMallOpen}/>
            <ShoppingMallInfo 
              customersInMallCount={customersInMallCount} 
              shoppingMall={shoppingMall} 
              isMallOpen={isMallOpen}
            />
            <ShopsList
              shopsArray={shopsArray}
              isMallOpen={isMallOpen}
              setCustomersInMallCount={setCustomersInMallCount}  
            />
        </Content>
    </>
  )
}

/*----------------------------------------------------------------------------*/

export default MallDetail;