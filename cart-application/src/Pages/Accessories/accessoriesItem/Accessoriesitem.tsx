import React from 'react';
import { Products } from '../../../types/modules';
import "./accessoriesitem.css"

interface AccessoriesProps{
    props: Products
    onChanger: (index: any,id:any) => void
    image: any
    items:any
}


const Accessoriesitem = ({props,image,items,onChanger}:AccessoriesProps) => {
    return (
        <div className="accessoriesitemImages"  >
                <div className="accessoriesitemImagesChildren">
                <img className="accessoriesimgs" src={items} onMouseOver={() => onChanger(items,props?.id)} />
                </div>
            </div>
    );
};

export default Accessoriesitem;