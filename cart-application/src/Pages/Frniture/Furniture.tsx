import React from 'react';
import "./furniture.css"
import Furnitureitems from './furnitureitems/Furnitureitems';
import { productCategory } from '../../ReduxTypeScript/store/data/data';
import { useState,useEffect } from "react"
import FormatCurrency from '../../Cureancy/curency';
import { Link, useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import CircularProgres from '../../component/circularprogress/CircilarProgress';
import Pager from '../../component/Pager/Pager';



const Furniture = () => {
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
        productCategory.furniture?.find((items: any) => {
            if (items?.id == id) {
                items.imgUrl = index
                setColorImage(items.imgUrl)
                return items
            }
        })

    }
    


    return (
        <div className='furniture'>
            <Pager/>
            {
              category == null ? <CircularProgres /> :   productCategory.furniture?.map((e: any, i) => {
                    return (
                        <div key={i}>
                            <div className='furnitureitem'>
                                <img src={e.imgUrl} />
                                <div className='furnitureitemLinkdiv'>
                                    <p className="furnitureModel">{e.model}</p>
                                    <Link className='furniturelink' to={"/shop/" + e?.id + "/" + id}>{e.name}</Link>
                                    <p className="Frnitureprice" >{FormatCurrency(Number(e?.price))}</p>
                                    <div className='Ratingstars'>
                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                        </div>
                                </div>
                                <div>
                                </div>
                                {
                                    e?.imgUrlArray?.map((items: any, index: any) => {
                                        return (
                                            <Furnitureitems index={index}  key={items} image={items} onChanger={() => changecolorImages(items, e?.id)} items={items} props={items} />
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

export default Furniture;