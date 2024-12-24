import {React, useEffect, useState } from 'react';

/*----------------------------------------------------------------------------*/

import Menu from '../components/core/Menu';

import Heading from '../components/core/Heading';

import Content from '../components/core/Content';

import MallList from '../components/shopping/ShoppingMallList';

/*----------------------------------------------------------------------------*/

import shoppingMallDtoOut from "../data/shoppingMalls.json";

/*----------------------------------------------------------------------------*/

function Malls() {

    // Nastavení titulku podsdtránky
    document.getElementById("Title").innerHTML =  "Nákupní centra";

    // Deklarace stavů pomocí pro ovládání nákupního centra pomocí React hooku useState
    const [shoppingMalls, setShoppingMalls] = useState(shoppingMallDtoOut);

  return (
    <>
        <Menu /> 
        <Content>
            <Heading h1={"Nákupní centra"} hr={true} />
            <MallList shoppingMalls={shoppingMalls} />
        </Content>
    </>
  )
}

/*----------------------------------------------------------------------------*/

export default Malls;