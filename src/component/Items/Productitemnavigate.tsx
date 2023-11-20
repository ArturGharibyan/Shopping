import React from 'react';
import { Products } from '../../types/modules';
import { Link, useParams } from 'react-router-dom';
import "./productnavigateitems.css"
import { useTypedSelector } from '../../ReduxTypeScript/hooks/useTypedSelector';


interface Productprops {
    props: Products
}


const Productitemnavigate = (props: Productprops) => {
    const params = useParams()
    const { user } = useTypedSelector(state => state.user)
   const userId= user.find((user:any)=>user.id == params.userid)


    return (
        <div className='productitemnavitagecontainers'>
            <img className="productimg" src={props.props.imgUrl} />
            <Link className='productnavigatelink' to={props.props.navigate + "/"+ userId.id  }>{props.props.name}</Link>
        </div>
    );
};

export default Productitemnavigate;