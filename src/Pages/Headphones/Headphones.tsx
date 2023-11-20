import React, { useEffect, useState } from 'react';
import { productCategory } from '../../ReduxTypeScript/store/data/data';
import { Link, useParams } from 'react-router-dom';
import CircularProgres from '../../component/circularprogress/CircilarProgress';
import HeadphoneItems from './headphoneitems/HeadphoneItems';
import FormatCurrency from '../../Cureancy/curency';
import { Rating } from '@mui/material';
import "./headphones.css"
import Pager from '../../component/Pager/Pager';

const Headphones = () => {
    const [category, setCategory] = useState<any>(null)
    const {id} =useParams()

    useEffect(() => {
        setTimeout(() => {
            setCategory(productCategory)
        }, 1500)
    }, [])


    const [colorImage, setImage] = useState<any>()
    const changeImages = (index: any, id: any) => {
        productCategory.headphones?.find((items: any) => {
            
            if (items?.id == id) {
                items.imgUrl = index
                setImage(items.imgUrl)
                return items
            }
            
        })

    }

    


    return (
        <div className='headphone'>
            <Pager/>

            {category == null ? <CircularProgres /> : productCategory?.headphones?.map((e: any, i) => {
                        return (
                            <div key={i}>
                                <div className='headphoneitem'>
                                    <img src={e.imgUrl} />
                                    <div className='headphoneitemLinkdiv'>
                                        <p className="headphoneModel">{e.model}</p>
                                        <Link className='headphonelink' to={"/shop/" + e?.id + "/" + id}>{e.name}</Link>
                                        <p className="headphoneprice" >{FormatCurrency(Number(e.price))}</p>
                                        <div className='Ratingstars'>
                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                        </div>

                                    </div>
                                    <div>
                                    </div>

                                    {
                                        e?.imgUrlArray?.map((items: any, index: any) => {
                                            return (
                                                <HeadphoneItems key={items} image={items} onChanger={() => changeImages(items, e?.id)} items={items} props={items} />
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

export default Headphones;