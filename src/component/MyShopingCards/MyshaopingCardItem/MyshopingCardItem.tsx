import React, { useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import { Button } from "react-bootstrap"
import "./MyshopingCardItem.css"
import FormatCurrency from '../../../Cureancy/curency';
import { removeItem } from '../../../ReduxTypeScript/store/action-creators/productcreator';
import { useDispatch } from 'react-redux';
import { ShoppingProductPropertyes } from '../../../types/modules';
import { useParams } from 'react-router-dom';
import { defaultState } from '../../../ReduxTypeScript/store/action-creators/productcreator';


interface ItemProps {
    items: ShoppingProductPropertyes
}


const MyshopingCardItem = ({ items }: ItemProps) => {
    const dispatch = useDispatch()

    return (
        <div className='MyshopingCardItem'>
            <Stack direction='horizontal' gap={1} className=' d-flex align-items-center'>
                <img src={items?.exclusive==true ? items?.imgUrlArray[0] : items?.imgUrl} style={{ width: "120px", height: "70px", objectFit: "contain" }} />
                <div className='me-auto'>
                    <div className='text-muted' style={{ fontSize: ".75rem" }}>{FormatCurrency(items.preventPrice)}</div>
                    <div className='text-muted' style={{ fontSize: ".75rem" }}>{items?.name}</div>
                    <div className='text-muted' style={{ fontSize: ".65rem" }}>Quantity: {items?.cartQuantity}</div>
                </div>
                <Button onClick={() => dispatch(removeItem(items?.id))}    variant="outline-danger" size="sm"> Delete</Button>
            </Stack>
        </div>
    );
};

export default MyshopingCardItem;