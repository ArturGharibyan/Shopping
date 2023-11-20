import "./shop.css"
import ReactImageMagnify from 'react-image-magnify';
import Relatedproducts from './Shopitems/relatedproductnavigate/Relatedproducts';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Coloritems from "./Shopitems/relatedproductnavigate/coloritems/Coloritems";
import React, { useEffect, useState } from "react";
import CircularProgres from "../../component/circularprogress/CircilarProgress";
import { useTypedSelector } from "../../ReduxTypeScript/hooks/useTypedSelector";
import { increaseQuantity, decreaseQuantity, addTocart, like, disLike, change, defaultState } from "../../ReduxTypeScript/store/action-creators/productcreator";
import { useDispatch } from "react-redux";
import MyFavoriteButon from "../../component/MyFavoriteProducts/MyfavoriteButton/MyFavoriteButon";
import Navigation from "../../component/Navigation/Navigation";
import MyShoppingCards from "../../component/MyShopingCards/MyShoppingCards";
import MyFavoriteProducts from "../../component/MyFavoriteProducts/MyFavoriteProducts";
import Ratingstars from "../../component/Ratingstars/Ratingstars";
import { productCategory } from "../../ReduxTypeScript/store/data/data";
import BuynowButton from "./BuynowButton/BuynowButton";
import Profile from "../../component/Profile/Profile";
import Footer from "../../component/Footer/Footer";
import Rating from '@mui/material/Rating';
import FormatCurrency from "../../Cureancy/curency";


const Shop: React.FC = () => {

    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [quantity, setquantity] = useState<any>()
    const [addupdate, setaddupdate] = useState<any>()
    const { products } = useTypedSelector(state => state.products)
    const { cartitems } = useTypedSelector(state => state?.products)
    const { user } = useTypedSelector(state => state.user)
    const userid = user.find((user: any) => user.id == params.userid)
    let [data, setData] = useState<any>(null)
    const [dataPrice, setDataprice] = useState<any>()
    const [colorImage, setColorImage] = useState<any>({ data: null })
    let cartdata = cartitems?.cartitemsAray?.find((e: any) => e.imgUrl == colorImage.data && e.userId == params.userid)

    const increaseQuantityAction = () => {
        dispatch(increaseQuantity(data?.id));
        setquantity(data?.cartQuantity);
    }
    const decreaseQuantityAction = () => {
        dispatch(decreaseQuantity(data?.id));
        setquantity(data?.cartQuantity);
    }
    const addTocartAction = () => {
        dispatch(addTocart(data?.id, colorImage?.data, userid?.id));
        setaddupdate(cartitems)
    }

    const changecolorImages: React.MouseEventHandler<MouseEvent> = (index: any) => {
        setColorImage({ data: index })

    }
    const category = Object.assign([], Object.values(productCategory)).flat(Infinity)
    const types = category?.filter((items: any) => items.type == data?.type)




    useEffect(() => {
        setTimeout(() => {
            data = products?.find((e: any) => e.id?.toString() == params?.id)
            setData(data)
            setColorImage({ data: data?.imgUrlArray[0] })
            setDataprice(cartdata)
            dispatch(defaultState(data?.id, data?.userId))
        }, 1200)
        setData(null)

    }, [params])





    const hoverHandler = (index: any) => {
        for (let i = 0; i < refs.current.length; i++) {
            refs.current[i].classList.add('active');
        }
        for (let j = 0; j < data.imgUrlArray.length; j++) {
            if (index !== j) {
                refs.current[j].classList.remove('active');
            }
        }
    };
    const refs = React.useRef<any>([]);
    refs.current = [];
    const addRefs = (el: any) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };




    return (
        <>

            <Navigation />
            <MyShoppingCards />
            <MyFavoriteProducts />
            <Profile />

            {data == null ? <CircularProgres /> : <>

                <div className='Shop'>

                    <aside className='Infocolectionaside'>
                        <h1 className='productTitle'>{data?.name}</h1>
                        <p className='seriaCode'>{data?.hashCode}</p>
                        <div className='produtcInformationContainer'>
                            <p >{data?.informationText}</p>
                        </div>

                        <div className="productImageContainer">

                            <div className="magnify">
                                <ReactImageMagnify    {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: colorImage?.data,
                                        sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                                    },
                                    largeImage: {
                                        src: colorImage?.data,
                                        width: 1200,
                                        height: 1000
                                    },
                                    enlargedImageContainerDimensions: {
                                        width: '380%',
                                        height: '350%',
                                    },
                                }} /></div>
                            <div><img src={colorImage.data} /></div>
                        </div>
                    </aside>
                    <section className='imageitem'>
                        <div className='imageWiewContainer'>
                            <img src={data?.imgUrlArray[0] ? colorImage.data : colorImage.data} />
                        </div>
                    </section>
                    <aside className='CartControl'>
                        <div className="productInfo">
                            <h1 className='productPrice'>{FormatCurrency(data?.preventPrice ? data?.preventPrice : cartdata?.preventPrice)}</h1> {/*cartdata ? <p>Completed:{cartdata.cartQuantity}</p> : <></>*/}
                        </div>
                        <div className="rating"><Ratingstars /></div>
                        <div className='colorCantroiler'>
                            <p className='colorTitle'>Colors</p>
                            <div className='colorcircleContainer'>
                                {
                                    data?.color || data?.imgUrlArray ? data?.imgUrlArray.map((e: any, i: any) => {
                                        return (
                                            <div key={i}  >
                                                <Coloritems index={i} adref={addRefs} onblur={() => hoverHandler(i)} key={i} images={e} onClick={() => changecolorImages(e)} imgs={e} onchange={() => dispatch(change(data?.id, e))} />
                                            </div>
                                        )
                                    }) : <h1 className="dangerText">Not Colors </h1>
                                }
                            </div>
                        </div>
                        <div className='dimensions'>
                            <p className='dimensiusTitle'>Dimensions</p>
                            <div className='dimensionsChilds' >
                                <div><img src={"http://localhost:3000/svg/arrow3.png"} />{data?.dimensius?.length}</div>
                                <div><img src={"http://localhost:3000/svg/arrow2.png"} />{data?.dimensius?.width}</div>
                                <div><img src={"http://localhost:3000/svg/arrow1.png"} />{data?.dimensius?.height}</div>
                            </div>
                        </div>
                        <div className="addTocartContainers">
                            <div className='cartButtonsContainer'>
                                <div className='inreaseDecrease'>
                                    <img onClick={() => decreaseQuantityAction()} src={"http://localhost:3000/svg/minus.png"} />{data?.cartQuantity}<img onClick={() => increaseQuantityAction()} src={"http://localhost:3000/svg/plus.png"} />
                                </div>
                                <div className="productPricetwodiv"><h1 className='productPricetwo'>{FormatCurrency(data?.preventPrice ? data?.preventPrice : cartdata?.preventPrice)}</h1></div>
                                <div className='Favorites'>
                                    <MyFavoriteButon propes={data} cartitems={cartitems} onClickLike={() => dispatch(like(data?.id, data?.isFollow, colorImage?.data, userid.id))} onClickDisLike={() => (dispatch(disLike(data?.id, data?.isFollow, userid.id)))} />
                                </div>
                            </div>
                            <div className='cardbuttonContainer'>
                                <BuynowButton data={data} />
                                <div className="ratingtwo"><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></div>
                                <button className="addToocartButton" onClick={() => addTocartAction()} ><div><img className='buttonSvg' src={"http://localhost:3000/svg/bag.png"} />Add to Crad</div></button>
                            </div>
                        </div>
                    </aside>
                    <div className="relateditem">
                        <Relatedproducts />
                    </div>

                </div>
                <div className="SimilarProducts">
                    <div className="SimilarProductsStore">
                        {
                            types?.map((items: any, i) => {

                                return (

                                    <div onClick={() => navigate("/shop" + "/" + items.id + "/" + params.userid)} key={i} className='SimilarProductscontainers'>
                                        <img className="SimilarProductsimg" src={items.typeimage} />
                                        <div className="SimilarProductsnavigatelinkdiv">
                                            <Link className='SimilarProductsnavigatelink' to={"/shop" + "/" + items.id + "/" + params.userid}>{items.name}</Link>
                                        </div>

                                    </div>
                                )

                            })
                        }
                    </div>
                </div>
                <Footer />

            </>}
        </>
    )
};

export default Shop;