import React from 'react';
import { Stack, Button } from "react-bootstrap"
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../ReduxTypeScript/hooks/useTypedSelector';
import FormatCurrency from '../../Cureancy/curency';


interface FetchPrpos{
    id:any,
    name:any
    price:number,
    quantitiy:any
}

const TotalPrice = () => {

    const { userid } = useParams()
    const { cartitems } = useTypedSelector(state => state?.products)
    const userCart = cartitems?.cartitemsAray?.filter((items: any) => items.userId == userid)
    const total = userCart.length !== 0 ? userCart?.map((items: any) => items.preventPrice).reduce((a: any, b: any) => a + b) : null
    

    const checkout = () => {
      fetch("http://localhost:5000/create-checkout-session", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        mode:"cors",
        body: JSON.stringify({
          items: userCart
        })
      })
      .then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
      })
      .then(({url})=>{
        window.location = url
      })
      .catch(e => {
        console.log(e.error)
      })
    }
 
    
    return (
        <>
            {
                total ? <Stack direction='horizontal' gap={1} className=' d-flex justify-content-center p-2 '>
                    <Button onClick={checkout}  className='w-75 p-2 ' variant="outline-danger" size="sm"> Your total amount is {FormatCurrency(total)} </Button>
                </Stack> : <></>

            }

        </>
    );
};

export default TotalPrice;