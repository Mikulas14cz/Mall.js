import React from 'react';

/*----------------------------------------------------------------------------*/

import Menu from '../components/core/Menu';

import Heading from '../components/core/Heading';

import Content from '../components/core/Content';

/*----------------------------------------------------------------------------*/

function About() {
    
  // Nastavení titulku podsdtránky
  document.getElementById("Title").innerHTML =  "Nákupní centra | O produktu";

  return (
    <>
        <Menu /> 
        <Content>
            <Heading h1={"O produktu"} hr={true} />
        </Content>
    </>
  )
}

/*----------------------------------------------------------------------------*/

export default About;