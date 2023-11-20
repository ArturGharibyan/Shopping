import React from 'react';
import "./jewerly.css"
import { productCategory } from '../../ReduxTypeScript/store/data/data';
import { useState,useEffect } from "react"
import FormatCurrency from '../../Cureancy/curency';
import { Link, useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import CircularProgres from '../../component/circularprogress/CircilarProgress';
import Jewerlyitem from "../Jewerly/jewerlyitems/Jewerlyitem"
import Pager from '../../component/Pager/Pager';

const Jewerly = () => {

    
        const { id } = useParams()
    
        const [colorImage, setColorImage] = useState<any>()
        const [category,setCategory]=useState<any>(null)
        const [data,setdata] = useState<any>([])
       
    
    
        useEffect(() => {
            setTimeout(() => {
                setCategory(productCategory)
            }, 1500)
        }, [])
    
    
        const changecolorImages = (index: any, id: any) => {
            productCategory.jewerly?.find((items: any) => {
                if (items?.id == id) {
                    items.imgUrl = index
                    setColorImage(items.imgUrl)
                    return items
                }
            })
    
        }
       
    
        return (
            <div className='jewerly'>
                <Pager/>
                {
                  category == null ? <CircularProgres /> :   productCategory.jewerly?.map((e: any, i) => {
                        return (
                            <div key={i}>
                                <div className='jewerlyitem'>
                                    <img src={e.imgUrl} />
                                    <div className='jewerlyitemLinkdiv'>
                                        <p className="jewerlyModel">{e.model}</p>
                                        <Link className='jewerlylink' to={"/shop/" + e?.id + "/" + id}>{e.name}</Link>
                                        <p className="jewerlyprice" >{FormatCurrency(Number(e?.price))}</p>
                                        <div className='Ratingstars'>
                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                            </div>
                                    </div>
                                    <div>
                                    </div>
                                    {
                                        e?.imgUrlArray?.map((items: any, index: any) => {
                                            return (
                                                <Jewerlyitem index={index}  key={items} image={items} onChanger={() => changecolorImages(items, e?.id)} items={items} props={items} />
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

export default Jewerly;