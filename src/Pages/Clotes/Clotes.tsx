import React from 'react';
import FormatCurrency from '../../Cureancy/curency';
import { Link, useParams } from 'react-router-dom';
import { Rating } from "@mui/material"
import { useState,useEffect } from "react"
import { productCategory } from '../../ReduxTypeScript/store/data/data';
import "./clotes.css"
import CircularProgres from '../../component/circularprogress/CircilarProgress';
import Clotesitem from './clotesitem/Clotesitem';
import Pager from '../../component/Pager/Pager';

const Clotes = () => {

    const { id } = useParams()
    const [category,setCategory]=useState<any>(null)
   


    useEffect(() => {
        setTimeout(() => {
            setCategory(productCategory)
        }, 1500)
    }, [])

    const [colorImage, setImage] = useState<any>()
    const changeImages = (index: any, id: any) => {
        productCategory.clotes?.find((items: any) => {
            if (items?.id == id) {
                items.imgUrl = index
                setImage(items.imgUrl)
                return items
            }
        })

    }

    return (
        <div className='clotes'>
            <Pager/>
            {
               category == null ? <CircularProgres /> :   productCategory.clotes?.map((e: any, i) => {
                    return (
                        <div key={i}>
                            <div className='clotesitem'>
                                <img src={e.imgUrl} />
                                <div className='clotesitemLinkdiv'>
                                    <p className="clotesModel">{e.model}</p>
                                    <Link className='cloteslink' to={"/shop/" + e?.id + "/" + id}>{e.name}</Link>
                                    <p className="clotesprice" >{FormatCurrency(Number(e.price))}</p>
                                    <div className='Ratingstars'>
                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                    </div>

                                </div>
                                <div>
                                </div>

                                {
                                    e?.imgUrlArray?.map((items: any, index: any) => {
                                        return (
                                            <Clotesitem key={items} image={items} onChanger={() => changeImages(items, e?.id)} items={items} props={items} />
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

export default Clotes;