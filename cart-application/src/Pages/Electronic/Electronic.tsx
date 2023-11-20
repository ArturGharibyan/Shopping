import React from 'react';
import "./electronic.css"
import { productCategory } from '../../ReduxTypeScript/store/data/data';
import { Stack } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import FormatCurrency from '../../Cureancy/curency';
import {useState,useEffect} from "react"
import Rating from '@mui/material/Rating';
import ElectronicItem from './electronicItem/ElectronicItem';
import CircularProgres from '../../component/circularprogress/CircilarProgress';
import Pager from '../../component/Pager/Pager';

const Electronic = () => {



    const {id} =useParams()
    const [category,setCategory]=useState<any>(null)
   


    useEffect(() => {
        setTimeout(() => {
            setCategory(productCategory)
        }, 1500)
    }, [])


const [colorImage, setImage] = useState<any>()
const changeImages = (index: any, id: any) => {
    productCategory.electronics?.find((items: any) => {
        if (items?.id == id) {
            items.imgUrl = index
            setImage(items.imgUrl)
            return items
        }
    })

}

    return (
        <div className='electronic'>
            <Pager/>
                {
                  category == null ? <CircularProgres /> :    productCategory.electronics?.map((e: any, i) => {
                        return (
                            <div  key={i}>
                                <div className='electronicitem'>
                                    <img src={e.imgUrl} />
                                    <div className='electronicitemLinkdiv'>
                                        <p className="electronicModel">{e.model}</p>
                                        <Link className='electroniclink' to={"/shop/" + e?.id + "/" + id}>{e.name}</Link>
                                        <p className="electronicprice" >{FormatCurrency(Number(e.price))}</p>
                                        <div className='Ratingstars'>
                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                        </div>
                                    
                                    </div>
                                    <div>
                                    </div>
                                    
                                    {
                                        e?.imgUrlArray?.map((items: any, index: any) => {
                                            return (
                                                <ElectronicItem key={items} image={items} onChanger={() => changeImages(items, e?.id)} items={items} props={items} />
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

export default Electronic;