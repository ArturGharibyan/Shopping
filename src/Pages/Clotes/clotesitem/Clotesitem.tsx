import React from 'react';
import "./clotesitem.css"
import { Products } from '../../../types/modules';

interface ClotesProps{
    props: Products
    onChanger: (index: any,id:any) => void
    image: any
    items:any
}

const Clotesitem = ({props,image,items,onChanger}:ClotesProps) => {
    return (
        <div className="clotesitemImages"  >
        <div className="clotesitemImagesChildren">
        <img className="clotesimgs" src={items} onMouseOver={() => onChanger(items,props?.id)} />
        </div>
    </div>
    );
};

export default Clotesitem;