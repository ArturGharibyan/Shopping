import React from 'react';
import Accessoriesitem from './accessoriesItem/Accessoriesitem';
import FormatCurrency from '../../Cureancy/curency';
import { Link, useParams } from 'react-router-dom';
import { Rating } from "@mui/material"
import { useState, useEffect } from "react"
import { productCategory } from '../../ReduxTypeScript/store/data/data';
import "./accessories.css"
import CircularProgres from '../../component/circularprogress/CircilarProgress';
import Pager from '../../component/Pager/Pager';

const Accessories = () => {

    const { id } = useParams()
    const [category, setCategory] = useState<any>(null)


    useEffect(() => {
        setTimeout(() => {
            setCategory(productCategory)
        }, 1500)
    }, [])


    const [colorImage, setImage] = useState<any>()
    const changeImages = (index: any, id: any) => {
        productCategory.accsessories?.find((items: any) => {
            if (items?.id == id) {
                items.imgUrl = index
                setImage(items.imgUrl)
                return items
            }
        })

    }

    return (
        <div className='accessories'>
            <Pager />
            {
                category == null ? <CircularProgres /> : productCategory.accsessories?.map((e: any, i) => {
                    return (
                        <div key={i}>
                            <div className='accessoriesitem'>
                                <img src={e.imgUrl} />
                                <div className='accessoriesitemLinkdiv'>
                                    <p className="accessoriesModel">{e.model}</p>
                                    <Link className='accessorieslink' to={"/shop/" + e?.id + "/" + id }>{e.name}</Link>
                                    <p className="accessoriesprice" >{FormatCurrency(Number(e.price))}</p>
                                    <div className='Ratingstars'>
                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                    </div>
                                </div>
                                <div>
                                </div>

                                {
                                    e?.imgUrlArray?.map((items: any, index: any) => {
                                        return (
                                            <Accessoriesitem key={items} image={items} onChanger={() => changeImages(items, e?.id)} items={items} props={items} />
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

export default Accessories;