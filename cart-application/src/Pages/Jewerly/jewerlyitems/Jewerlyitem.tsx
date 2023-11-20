import React from 'react';
import { Link,useParams } from "react-router-dom"
import { useTypedSelector } from "../../../ReduxTypeScript/hooks/useTypedSelector"
import { Products } from "../../../types/modules"
import "./jewerlyitem.css"



interface ProductDataProps {
    props: Products
    onChanger: (index: any,id:any) => void
    image: any
    items:any
    index:any
}

const Jewerlyitem = ({ props,items,onChanger }: ProductDataProps) => {



    
    
    console.log("ksjdh=>", props)
    const params = useParams()
    const { user } = useTypedSelector(state => state.user)

    const userId = user.find((user: any) => user.id == params.id)
    console.log("papakjhgkjp", params)
    
    
    
    
    
        return (
            <div className="jewerlyitemImages"  >
                    <div className="jewerlyitemImagesChildren">
                    <img className="jewerlyimgs" src={items} onMouseOver={() => onChanger(items,props?.id)} />
                    </div>
                </div>
        );
        

};

export default Jewerlyitem;