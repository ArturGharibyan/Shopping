import React from 'react';
import Householditems from './householditem/Householditems';
import FormatCurrency from '../../Cureancy/curency';
import { Link ,useParams} from 'react-router-dom';
import CircularProgres from '../../component/circularprogress/CircilarProgress';
import { productCategory } from '../../ReduxTypeScript/store/data/data';
import {useState,useEffect} from "react"
import { Rating } from '@mui/material';
import "./household.css"
import Pager from '../../component/Pager/Pager';

const Household = () => {
    const [category, setCategory] = useState<any>(null)
    const {id} =useParams()

    useEffect(() => {
        setTimeout(() => {
            setCategory(productCategory)
        }, 1500)
    }, [])


    const [colorImage, setImage] = useState<any>()
    const changeImages = (index: any, id: any) => {
        productCategory.householdGods?.find((items: any) => {
            if (items?.id == id) {
                items.imgUrl = index
                setImage(items.imgUrl)
                console.log(items.imgUrl)

                return items
            }
        })

    }

    return (
        <div className='household'>
            <Pager/>

            {category == null ? <CircularProgres /> : productCategory.householdGods?.map((e: any, i) => {
                        return (
                            <div key={i}>
                                <div className='householditem'>
                                    <img src={e.imgUrl} />
                                    <div className='householditemLinkdiv'>
                                        <p className="householdModel">{e.model}</p>
                                        <Link className='householdlink' to={"/shop/" + e?.id + "/" + id}>{e.name}</Link>
                                        <p className="householdprice" >{FormatCurrency(Number(e.price))}</p>
                                        <div className='Ratingstars'>
                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                        </div>

                                    </div>
                                    <div>
                                    </div>

                                    {
                                        e?.imgUrlArray?.map((items: any, index: any) => {
                                            return (
                                                <Householditems key={items} image={items} onChanger={() => changeImages(items, e?.id)} items={items} props={items} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
            }

        </div>
    );
};

export default Household;