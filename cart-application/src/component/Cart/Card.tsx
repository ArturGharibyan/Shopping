import React from 'react';
import { ShoppingProductPropertyes } from '../../types/modules';

interface CartProps {
    img: any
    name: any
    price: number
}

const Card = ({ img, name,  price }: CartProps) => {
    return (
        <div style={{width:"300px",height:"300px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
            <img style={{width:"200px",height:"200px",objectFit:"contain"}} src={img} />
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
};

export default Card;