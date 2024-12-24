import {React, useState, useEffect} from 'react';

import {Button, Card} from 'react-bootstrap';

/*----------------------------------------------------------------------------*/
function Shop(props) {

    const [isDisabled, setIsDisabled] = useState(true);

    const [customerCount, setCustomerCount] = useState(0);

    // Deklarace funkce, která se stará o funčnost tlačítka přidání návštěvníků
    function handlerCustomerAdd() {
        if (props.isMallOpen){
  
            if (customerCount < props.shop.capacity){
              setCustomerCount((customerCount) => customerCount + 1);
              props.onChangeCount((customerCount) => customerCount + 1);
            } // Konec vnitří podmínky
  
            else{
              
              alert("Obchod je úplně plný!");
  
              } // Konec vnitří podmínky else
        } // Konec vnější podmínky

        else {
            alert("Obchod je zavřený");
  
        } // Konec vnější podmínky else
      } // Konec handleru

    // Deklarace funkce, která se stará o funčnost tlačítka odebírání návštěvníků
    function handlerCustomerRemove() {
      if (props.isMallOpen){
          if (customerCount > 0){
            setCustomerCount((customerCount) => customerCount - 1);
            props.onChangeCount((customerCount) => customerCount - 1);
          } // Konec vnitří podmínky

          else{
            
            alert("Obchod je úplně prázdný!");

            } // Konec vnitří podmínky else
      } // Konec vnější podmínky

      else {
          alert("Obchod je zavřený");
      } // Konec vnější podmínky else
    } // Konec handleru

    useEffect(() => {

      if (props.isMallInMaintenance){
        setIsDisabled(false);
      }

      else{

        if (props.isMallOpen == true){
          setIsDisabled(false);
      }

        if (props.isMallOpen == false) {
          setCustomerCount(0);
          props.onChangeCount(0);
          setIsDisabled(true);
        }
      }
    })

  return (
    <Card className='mb-3'>
      <Card.Header>Obchod</Card.Header>
      <Card.Body>
        <div className='d-flex justify-content-between'>
          <Card.Title>{props.shop.name}</Card.Title>
          <div className='d-flex justify-content-between'>
            <Card.Text>
              <span className='me-4'>{customerCount} / {props.shop.capacity}</span>
            </Card.Text>
            <Button 
              variant='light'
              disabled
              className='d-inline-block btn-tool text-warning m-0 me-1'
              onClick={()=>alert("Ještě není připraveno!")}
            >
              <i className="fa-regular fa-pen-to-square p-0"></i>
            </Button> 
            <Button 
              variant='light'
              disabled
              className='m-0 btn-tool text-danger d-inline-block'
              onClick={()=>alert("Ještě není připraveno!")}
            >
              <i className="fa-solid fa-trash p-0 "></i>
            </Button>  
            <Button 
              variant='light'                       
              className='d-inline-block btn-tool text-danger m-0 me-1'
              disabled={isDisabled}
              onClick={handlerCustomerRemove}
            >
              <i class="fa-solid fa-user-minus p-0"></i>
            </Button>
            <Button 
              variant='light'                       
              className='d-inline-block btn-tool text-primary m-0 me-1'
              disabled={isDisabled}
              onClick={handlerCustomerAdd}
            >
              <i class="fa-solid fa-user-plus p-0"></i>
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

/*----------------------------------------------------------------------------*/

export default Shop;