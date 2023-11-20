import React, { useEffect } from 'react';
import Sidebar from '../../component/Sidebar/Sidebar';
import { Products, ShoppingProductPropertyes } from '../../types/modules';
import { useState } from 'react';
import { productCategory } from '../../ReduxTypeScript/store/data/data';
import Card from '../../component/Cart/Card';
import Product from '../../component/Products/Product';
import { ChangeEvent } from 'react';
import { useTypedSelector } from '../../ReduxTypeScript/hooks/useTypedSelector';
import { Rating } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FormatCurrency from '../../Cureancy/curency';
import "./seeallproducts.css"
import Pager from '../../component/Pager/Pager';
import Recommended from './Recommended/Recommended';
import CircularProgres from '../../component/circularprogress/CircilarProgress';
import Price from '../../component/Sidebarcanvas/Pricecanvas/PriceCanvas';
import Category from '../../component/Sidebarcanvas/Categorycanvas/CategoryCanvas';

const SeeallProduct = () => {
  const category = Object.assign([], Object.values(productCategory)).flat(Infinity)
  const localuserId = localStorage.useridData
  const { filteritems, filterByprice } = useTypedSelector(state => state.filterReducer)
  const paramsPathname = window.parent.location.pathname.replace(/[0-9/]/ig, "")
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useTypedSelector(state => state.user)
  const userId = user.find((user: any) => user.id == id)
  const [filteredItems, setFilteredItems] = useState<any>(null)



  useEffect(() => {
    setTimeout(() => {
      setFilteredItems(filterByprice)
    }, 1500)
    setFilteredItems(null)
  }, [filterByprice])


  return (

    <div className='SeeallProduct'>
      <div className='pagerdiv'  >
        <nav className="navbar navbar-light bg-gray">
          <div className="container">
            <a onClick={() => navigate("/" + userId.id)} className="navbar-brand" >
              <img src={"http://localhost:3000/svg/iconmonstr-arrow-right-thin-241.png"} alt="" width="30" height="24" />
            </a>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <h3 className="nav-link  active searchHeader" aria-current="page" >{paramsPathname}</h3>
              </li>
            </ul>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <button className="navbar-toggler collapsed  sidebarcanvas " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> <span className="navbar-toggler-icon"></span></button>
                <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                  <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <section className="sidebars">
                      <div className="logo-containers">
                        <h1>🛒</h1>
                      </div>
                      <Category />
                      <Price />
                    </section>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav >
      </div>
      <Sidebar />
      <div className='filteredItems' style={{ float: "right", marginTop: "80px" }}>
        <Recommended />
        {
          filterByprice.length == 0 ? <div className='Noresults'>No results</div> :
            filteredItems === null ? <div className='progres'><CircularProgres /></div> : filteredItems.map((items: any) => {
              return (
                <div key={items.id}>
                  <div className='householditem'>
                    <img src={items.imgUrl} />
                    <div className='householditemLinkdiv'>
                      <p className="householdModel">{items.model}</p>
                      <Link className='householdlink' to={"/shop/" + items?.id + "/" + localuserId}>{items.name}</Link>
                      <p className="householdprice" >{FormatCurrency(Number(items.price))}</p>
                      <div className='Ratingstars'>
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                      </div>
                    </div>
                    <div>
                    </div>
                  </div>
                </div>
              )
            })
        }
      </div>
    </div>


  );
};

export default SeeallProduct;