import { Link, useNavigate, useParams } from 'react-router-dom';
import { productCategory } from '../../../ReduxTypeScript/store/data/data';
import { useEffect, useState } from "react"
import CircularProgres from '../../circularprogress/CircilarProgress';
import "./searchitemview.css"
import { Rating } from '@mui/material';
import FormatCurrency from '../../../Cureancy/curency';
import Pager from '../../Pager/Pager';

const Searchitemsview = () => {
    const navigate = useNavigate()
    const params = useParams()
    const category = Object.assign([], Object.values(productCategory)).flat(Infinity)
    let [data, setData] = useState<any>(null)

    
    useEffect(() => {
        setTimeout(() => {
            data = category.filter((item: any) => item.type == params.name)
            setData(data)
        }, 1200)
        setData(null)
    }, [params])


    return (
        <>
            <nav className="navbar navbar-light bg-gray">
                <div className="container">
                    <a onClick={() => navigate("/" + params.userid)} className="navbar-brand" >
                        <img src={"http://localhost:3000/svg/iconmonstr-arrow-right-thin-241.png"} alt="" width="30" height="24" />
                    </a>
                </div>
            </nav>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <h3 className="nav-link active searchHeader" aria-current="page" >{params.name}</h3>
                </li>
            </ul>
            <div className='Searching' >






                {data == null ? <CircularProgres /> : data.map((e: any) => {

                    return (

                        <div className='Searchitemsview' key={e.id}>
                            <img className='SearchitemsviewImg' src={e.imgUrl} />
                            <p className="Model">{e.model}</p>
                            <Link to={"/shop/" + e.id + "/" + params?.userid} className='SearchitemsviewLink'>{e.name}</Link>
                            <p className="SearchItemprice" >{FormatCurrency(Number(e?.price))}</p>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        </div>
                    )
                })}

            </div>
        </>
    );
};

export default Searchitemsview;