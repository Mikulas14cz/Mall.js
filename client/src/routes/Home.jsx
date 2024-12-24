import {React, useState} from 'react';

import { Button } from 'react-bootstrap';

/*----------------------------------------------------------------------------*/

import Menu from '../components/core/Menu';

import Heading from '../components/core/Heading'

import Content from '../components/core/Content'

/*----------------------------------------------------------------------------*/



/*----------------------------------------------------------------------------*/

function Home() {

  // Nastavení titulku podsdtránky
  document.getElementById("Title").innerHTML =  "Nákupní centra | Dashboard";

  return (
    <>
        <Menu />
        <Content>
          <Heading h1={"Domovská stránka"} hr={true} />
          <Button variant="primary">Button</Button>
        </Content>
    </>
  )
}

export default Home;