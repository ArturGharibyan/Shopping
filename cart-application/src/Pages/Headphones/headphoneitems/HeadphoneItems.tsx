import React from 'react';
import { Link,useParams } from 'react-router-dom';
import {  Products} from "../../../types/modules"
import { useEffect, useState } from 'react';
import { useTypedSelector } from '../../../ReduxTypeScript/hooks/useTypedSelector';
import "./headphoneitem.css"

interface HeadphoneProps{
    props: Products
    onChanger: (index: any, id: any) => void
    image: any
    items: any
}

const HeadphoneItems = ({items,image,props, onChanger}:HeadphoneProps) => {
    const params = useParams()
    const {user} =useTypedSelector(state=>state.user)
    const userId= user.find((user:any)=>user.id==params.id )

    return (
        <div className="headphoneitemImages" >
        <div className="headphoneitemImagesChildren">
        <img className="headphoneimgs" src={items} onMouseOver={() => onChanger(items,props?.id)} />
        </div>
    </div>
    );
};

export default HeadphoneItems;