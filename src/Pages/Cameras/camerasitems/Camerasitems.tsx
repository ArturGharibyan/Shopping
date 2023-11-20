import { Link,useParams } from "react-router-dom"
import { useTypedSelector } from "../../../ReduxTypeScript/hooks/useTypedSelector"
import { Products } from "../../../types/modules"
import React from 'react';
import "./camerasitems.css"

interface ProductDataProps {
    props: Products
    onChanger: (index: any,id:any) => void
    image: any
    items:any
    index:any
}


const Camerasitems = ({ props,items,onChanger }: ProductDataProps) => {
    
    
    const params = useParams()
    const { user } = useTypedSelector(state => state.user)
    const userId = user.find((user: any) => user.id == params.id)
    
    
    
    
    
        return (
            <div className="camerasitemImages"  >
                    <div className="camerasitemImagesChildren">
                    <img className="camerasimgs" src={items} onMouseOver={() => onChanger(items,props?.id)} />
                    </div>
                </div>
        );
        
};

export default Camerasitems;