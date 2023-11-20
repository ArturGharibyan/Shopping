import React from 'react';
import { Products } from "../../../types/modules";
import { Link, useParams } from 'react-router-dom';
import "./furnitureitems.css"
import { useTypedSelector } from '../../../ReduxTypeScript/hooks/useTypedSelector';
import FormatCurrency from '../../../Cureancy/curency';

interface ProductDataProps {
    props: Products
    onChanger: (index: any,id:any) => void
    image: any
    items:any
    index:any
}

const Furnitureitems = ({ props, onChanger, image ,items,index}: ProductDataProps) => {

    const params = useParams()
    const { user } = useTypedSelector(state => state.user)
    const userId = user.find((user: any) => user.id == params.id)

    return (
            <div  className="itemImages"  >
                <div  className="frnitureItemImagesChildren">
                <img className="frnitureitemImgs" src={items} onMouseOver={() => onChanger(items,props?.id)} />
                </div>
            </div>
    );
};

export default Furnitureitems;