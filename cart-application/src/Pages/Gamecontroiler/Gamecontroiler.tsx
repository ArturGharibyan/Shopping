import './gamecontroiler.css';
import Gamecontroileritems from './gamecontroileritems/Gamecontroileritems';
import { productCategory } from '../../ReduxTypeScript/store/data/data';
import { useState, useEffect } from 'react';
import CircularProgres from '../../component/circularprogress/CircilarProgress';
import FormatCurrency from '../../Cureancy/curency';
import { Link, useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Pager from '../../component/Pager/Pager';


const Gamecontroiler = () => {
    const { id } = useParams()
    const [category, setCategory] = useState<any>(null)

    useEffect(() => {
        setTimeout(() => {
            setCategory(productCategory)
        }, 1500)
    }, [])


    const [colorImage, setImage] = useState<any>()
    const changeImages = (index: any, id: any) => {
        productCategory.gamecantroler?.find((items: any) => {
            if (items?.id == id) {
                items.imgUrl = index
                setImage(items.imgUrl)
                return items
            }
        })

    }

    return (
        <div className='gamecontroilers'>
            <Pager/>
            {category == null ? <CircularProgres /> :
                productCategory.gamecantroler?.map((e: any, i) => {
                    return (
                        <div key={i}>
                            <div className='gameitem'>
                                <img src={e.imgUrl} />
                                <div className='gameitemLinkdiv'>
                                    <p className="gameModel">{e.model}</p>
                                    <Link className='gamelink' to={"/shop/" + e?.id + "/" + id}>{e.name}</Link>
                                    <p className="gameprice" >{FormatCurrency(Number(e.price))}</p>
                                    <div className='Ratingstars'>
                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                    </div>

                                </div>
                                <div>
                                </div>

                                {
                                    e?.imgUrlArray?.map((items: any, index: any) => {
                                        return (
                                            <Gamecontroileritems key={items} image={items} onChanger={() => changeImages(items, e?.id)} items={items} props={items} />
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

export default Gamecontroiler;