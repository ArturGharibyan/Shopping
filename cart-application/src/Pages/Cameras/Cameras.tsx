// import { product } from '../../data/productdata';
import { productCategory } from '../../ReduxTypeScript/store/data/data';
import { useState,useEffect } from "react"
import FormatCurrency from '../../Cureancy/curency';
import { Link, useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import CircularProgres from '../../component/circularprogress/CircilarProgress';
import Camerasitems from "./camerasitems/Camerasitems";
import "./cameras.css"
import Pager from '../../component/Pager/Pager';



const Cameras = () => {
    
   
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
            productCategory.camera?.find((items: any) => {
                if (items?.id == id) {
                    items.imgUrl = index
                    setColorImage(items.imgUrl)
                    return items
                }
            })
    
        }
      
    
    
        return (
            <div className='cameras'>
                <Pager/>
                {
                  category == null ? <CircularProgres /> :   productCategory.camera?.map((e: any, i) => {
                        return (
                            <div key={i}>
                                <div className='camerasitem'>
                                    <img src={e.imgUrl} />
                                    <div className='camerasitemLinkdiv'>
                                        <p className="camerasModel">{e.model}</p>
                                        <Link className='cameraslink' to={"/shop/" + e?.id + "/" + id}>{e.name}</Link>
                                        <p className="camerasprice" >{FormatCurrency(Number(e?.price))}</p>
                                        <div className='Ratingstars'>
                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                            </div>
                                    </div>
                                    <div>
                                    </div>
                                    {
                                        e?.imgUrlArray?.map((items: any, index: any) => {
                                            return (
                                                <Camerasitems index={index}  key={items} image={items} onChanger={() => changecolorImages(items, e?.id)} items={items} props={items} />
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

export default Cameras;