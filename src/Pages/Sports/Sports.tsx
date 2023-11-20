import React from 'react';
import FormatCurrency from '../../Cureancy/curency';
import { Link, useParams } from 'react-router-dom';
import CircularProgres from '../../component/circularprogress/CircilarProgress';
import { productCategory } from '../../ReduxTypeScript/store/data/data';
import { useState, useEffect } from "react"
import { Rating } from '@mui/material';
import Sportitems from "../Sports/sportitem/Sportitems"
import "./sport.css"
import Pager from '../../component/Pager/Pager';

const Household = () => {
    const [category, setCategory] = useState<any>(null)
    const { id } = useParams()

    useEffect(() => {
        setTimeout(() => {
            setCategory(productCategory)
        }, 1500)
    }, [])


    const [colorImage, setImage] = useState<any>()
    const changeImages = (index: any, id: any) => {
        productCategory.sports?.find((items: any) => {
            if (items?.id == id) {
                items.imgUrl = index
                setImage(items.imgUrl)
                return items
            }
        })

    }

    return (
        <div className='sport'>
            <Pager/>

            {category == null ? <CircularProgres /> : productCategory.sports?.map((e: any, i) => {
                return (
                    <div key={i}>
                        <div className='sportitem'>
                            <img src={e.imgUrl} />
                            <div className='sportitemLinkdiv'>
                                <p className="sportModel">{e.model}</p>
                                <Link className='sportlink' to={"/shop/" + e?.id + "/" + id}>{e.name}</Link>
                                <p className="sportprice" >{FormatCurrency(Number(e.price))}</p>
                                <div className='Ratingstars'>
                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                </div>

                            </div>
                            <div>
                            </div>

                            {
                                e?.imgUrlArray?.map((items: any, index: any) => {
                                    return (
                                        <Sportitems key={items} image={items} onChanger={() => changeImages(items, e?.id)} items={items} props={items} />
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