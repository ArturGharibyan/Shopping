import React from 'react';
import "./electronicitem.css"
import { Products } from '../../../types/modules';

interface ElectroncProps{
    props:Products
    onChanger: (index: any,id:any) => void
    image: any
    items:any
}


const ElectronicItem = ({props,onChanger,image,items}:ElectroncProps) => {
    return (
        <div className="electronicitemImages"  >
                <div className="electronicitemImagesChildren">
                <img className="electronicimgs" src={items} onMouseOver={() => onChanger(items,props?.id)} />
                </div>
            </div>
    );
};

export default ElectronicItem;