import React from 'react';
import { useTypedSelector } from '../../ReduxTypeScript/hooks/useTypedSelector';
import MyFavoriteProductItem from './MyFavoriteProductItems/MyFavoriteProductItem';
import { useParams } from 'react-router-dom';



const MyFavoriteProducts = () => {
    const { cartitems } = useTypedSelector(state => state?.products)
    const { userid } = useParams()
    const userFavoriteItems = cartitems?.favoritecartitemsAray?.filter((items: any) => items.userId == userid)

    
    return (
        <>
            <div className="offcanvas offcanvas-end" data-bs-backdrop="true" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="staticBackdropLabel">My Liked Products</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                   {
                    userFavoriteItems?.map((item:any,index:any)=>{
                        return(
                            <MyFavoriteProductItem key={index} item={item}/>
                        )
                    })
                   }
                </div>
            </div>
        </>
    );
};

export default MyFavoriteProducts;