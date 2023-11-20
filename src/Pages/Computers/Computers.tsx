import React from 'react';
import "./computer.css"
import { productCategory } from '../../ReduxTypeScript/store/data/data';
import { Stack } from 'react-bootstrap';
import Computeritems from './computeritems/Computeritems';
import { Link, useParams } from 'react-router-dom';
import FormatCurrency from '../../Cureancy/curency';
import {useState,useEffect} from "react"
import Rating from '@mui/material/Rating';
import CircularProgres from '../../component/circularprogress/CircilarProgress';
import Pager from '../../component/Pager/Pager';


const Computers = () => {

const {id} =useParams()
const [category,setCategory]=useState<any>(null)
   


    useEffect(() => {
        setTimeout(() => {
            setCategory(productCategory)
        }, 1500)
    }, [])

    
const [colorImage, setImage] = useState<any>()
const changeImages = (index: any, id: any) => {
    productCategory.computers?.find((items: any) => {
        if (items?.id == id) {
            items.imgUrl = index
            setImage(items.imgUrl)
            return items
        }
    })

}

    return (
        <div className='computer'>
            <Pager/>
                {
                  category == null ? <CircularProgres /> :   productCategory.computers?.map((e: any, i) => {
                        return (
                            <div  key={i}>
                                <div className='computeritem'>
                                    <img src={e.imgUrl} />
                                    <div className='computeritemLinkdiv'>
                                        <p className="computerModel">{e.model}</p>
                                        <Link className='computerlink' to={"/shop/" + e?.id + "/" + id}>{e.name}</Link>
                                        <p className="computerprice" >{FormatCurrency(Number(e.price))}</p>
                                        <div className='Ratingstars'>
                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                    
                                    {
                                        e?.imgUrlArray?.map((items: any, index: any) => {
                                            return (
                                                <Computeritems key={items} image={items} onChanger={() => changeImages(items, e?.id)} items={items} props={items} />
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

export default Computers;