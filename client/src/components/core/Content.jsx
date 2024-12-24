import React from 'react';

import {Container} from 'react-bootstrap';

/*******************************************************************************/

function Content(props) {
  return (
    <Container className='pt-xl-5 pb-xl-5 p-xl-0 p-4'>
        {props.children}
    </Container>
  )
}

/*******************************************************************************/

export default Content;