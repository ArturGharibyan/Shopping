import React from 'react';
import "./categoryitem.css"
import { Link, useParams } from 'react-router-dom';
import { category } from '../../ReduxTypeScript/store/data/data';
import { useTypedSelector } from '../../ReduxTypeScript/hooks/useTypedSelector';

const CategoryItems = () => {
    const {userid} = useParams()
    const { user } = useTypedSelector(state => state.user)
    const userId= user.find((user:any)=>user.id == userid)

    return (
        < div className="Categoryitems">
        {
            category.category.map((items:any)=>{
                return(
                    <div key={items.name}><Link className="link" to={items.navigate+"/"+userId.id}><p>{items.name}</p></Link></div>
                )
            })
        }
    </ div>
    );
};

export default CategoryItems;