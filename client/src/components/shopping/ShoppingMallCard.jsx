import {React, useState} from 'react';

import {Card, Button} from 'react-bootstrap';

import {
    useLocation,
    useNavigate,
    useParams
  } from "react-router-dom";

/*----------------------------------------------------------------------------*/

function ShoppingMallCard(props) {

    const navigate = useNavigate();

  return (
    <Card className='mall-card'>
        <Card.Header className='bg-primary text-white'>
            <i class="fa-solid fa-shop me-2 mt-0 mb-0"></i>
            <span>Nákupní centrum</span>
        </Card.Header>
      <Card.Body>
        <div className='d-flex justify-content-between'>
            <div className='verticalHorizonCenter'>
                <span className='list-title pb-2 pt-2 m-0'>     
                    {props.mall.nickname}
                </span>
            </div>   
            <div className='shopping-list-card-tools'>
                <div>
                    <Button 
                        variant='light'
                        className='d-inline-block text-primary btn-tool me-1 m-0'
                        onClick={() => navigate(`/shoppingMalls/${props.mall._id}`)}
                    >
                    <i className="fa-solid p-0 fa-expand"></i>
                    </Button>
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
                </div>  
            </div>       
        </div>  
      </Card.Body>
    </Card>
  )
}

/*----------------------------------------------------------------------------*/

export default ShoppingMallCard;