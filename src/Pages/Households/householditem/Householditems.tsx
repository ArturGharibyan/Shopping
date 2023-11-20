import React from 'react';
import { Products } from '../../../types/modules';
import "./householditem.css"

interface HouseHoldProps {
    props?: Products
    onChanger: (index: any, id: any) => void
    image: any
    items: any
}


const Householditems = ({props,image,items,onChanger}:HouseHoldProps) => {
    return (
        <div className="householditemImgs" >
        <div className="householditemImagesChildren">
        <img className="householdimgs" src={items} onMouseOver={() => onChanger(items,props?.id)} />
        </div>
    </div>
    );
};

export default Householditems;