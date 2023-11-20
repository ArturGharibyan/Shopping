import React from 'react';
import { Products } from '../../../types/modules';
import "./sportitem.css"
import "../../../index.css"

interface SportProps {
    props?: Products
    onChanger: (index: any, id: any) => void
    image: any
    items: any
}


const Sportitems = ({props,image,items,onChanger}:SportProps) => {
    return (
        <div className="sportitemImgs" >
        <div className="sportitemImagesChildren">
        <img className="sportimgs" src={items} onMouseOver={() => onChanger(items,props?.id)} />
        </div>
    </div>
    );
};

export default Sportitems;