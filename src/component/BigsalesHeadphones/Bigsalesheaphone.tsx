import React from 'react';
import "./bigsalesheadphone.css"
import { Link, useParams } from "react-router-dom"
import { useTypedSelector } from '../../ReduxTypeScript/hooks/useTypedSelector';

const Bigsalesheaphone = () => {
    const params = useParams()
    const { user } = useTypedSelector(state => state.user)
    const userId = user.find((user: any) => user.id == params.userid)

    return (
        <div className='Bigsalescontainer'>
            <div className='Bigsalescontainer_img_container'>< img src={"http://localhost:3000/imgs/headphone.png"} /></div>
            <div className='Bigsalescontainer_items'>
                <div className='Bigsalescontainer_items_child'>
                    <p className='heading_paragraph'>BIG SALE!</p>
                    <p className='Bigsalescontainer_paragraph'>Wireless Headphone<br></br>with noice canceling</p>
                </div>
                <div className='headphonesNavigator'>
                    <Link to={"/headphones" + "/" + userId.id} className='linkheadPhones'>Headphones</Link>
                </div>
            </div>
        </div>
    );
};

export default Bigsalesheaphone;