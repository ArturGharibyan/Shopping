
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../ReduxTypeScript/hooks/useTypedSelector';
import MyshopingCardItem from './MyshaopingCardItem/MyshopingCardItem';
import { useEffect, useState } from "react"
import TotalPrice from '../TotalPrice/TotalPrice';
import "./myshoppingcard.css"



const MyShoppingCards = () => {
    const [updater, setUpdater] = useState<any>([])
    const { cartitems } = useTypedSelector(state => state?.products)
    const user = useTypedSelector<any>(state => state?.user?.user)
    const { userid } = useParams()
    const userCart = cartitems?.cartitemsAray?.filter((items: any) => items?.userId == userid)





    return (

        <section className="container mt-5">
            <div className="offcanvas offcanvas-end" data-bs-scroll="true" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">My Shopping Crads</h5>
                    <button type="button" className="btn-close  text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {
                        userCart?.map((item: any, index: any) => {
                            return (
                                <MyshopingCardItem key={item?.id} items={item} />
                            )
                        })
                    }
                </div>
                    <TotalPrice/>
            </div>
        </section >

    )
};

export default MyShoppingCards;