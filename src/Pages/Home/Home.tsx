import React from 'react';
import "./home.css"
import Productitemwiev from '../../component/ProductItemwiev/Productitemwiev';
import Seeall from '../../component/SeeAll/Seeall';
import Camerainstax from '../../component/CameraInstax/Camerainstax';
import Discount from '../../component/Discounts/Discount';
import Bigsalesheaphone from '../../component/BigsalesHeadphones/Bigsalesheaphone';
import Category from '../../component/Category/Category';
import { useTypedSelector } from '../../ReduxTypeScript/hooks/useTypedSelector';
import { useParams } from 'react-router-dom';
import MyShoppingCards from '../../component/MyShopingCards/MyShoppingCards';
import MyFavoriteProducts from '../../component/MyFavoriteProducts/MyFavoriteProducts';
import Navigation from '../../component/Navigation/Navigation';
import { useEffect, useState } from "react"
import CircularProgres from '../../component/circularprogress/CircilarProgress';
import Profile from '../../component/Profile/Profile';
import CategoryItems from '../../component/Category/CategoryItems';

const Home = () => {


    const params = useParams()
    const [userid, setuserId] = useState<any>(null)
    const {user}=useTypedSelector(state=>state.user)

    
    useEffect(() => {
        setTimeout(() => {
            setuserId(params.userid)
        }, 1800)
        
    }, [])



   

    return (
        <>{
            userid == null ? <CircularProgres /> : <>

                <Navigation />
                <MyShoppingCards />
                <MyFavoriteProducts />
                <Profile/>


                <div className="categoryChilds">
                <CategoryItems/>
                </div>
                <div className="HomeApp">
                    <Category />
                    
                    <section className='Home'>
                        <Bigsalesheaphone />
                    </section>
                    <aside className='homechild'>
                        <Discount />
                        <Camerainstax />
                    </aside>
                    <Seeall />
                    <div className='SealProductnavigates'>
                    <Productitemwiev />
                    </div>

                </div>
            </>
        }
        </>
    );
};

export default Home;
