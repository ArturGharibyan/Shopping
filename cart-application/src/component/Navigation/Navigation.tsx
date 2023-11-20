import "./navigation.css"
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useTypedSelector } from '../../ReduxTypeScript/hooks/useTypedSelector';
import { logOut } from "../../ReduxTypeScript/store/action-creators/productcreator";
import { useDispatch } from 'react-redux';
import Search from "../Search/Search";
import { useEffect, useState } from "react"
import DropDown from "./DropDown";

const Navigation = () => {
    const [updateCounts, setUpdatecounts] = useState<any>()
    const dispatch = useDispatch()
    const { userid } = useParams()
    const { cartitems } = useTypedSelector(state => state.products)
    const{user}=useTypedSelector(state=>state.user)
    const userProfileName = user.find((user:any)=>user.id==userid)
    const productuser = cartitems?.cartitemsAray?.filter((item: any) => item.userId == userid)
    const favoriteProductuser = cartitems?.favoritecartitemsAray?.filter((item: any) => item.userId == userid)
    const navigate =useNavigate()

    

   

    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <div className="divsvg"> <img className="svg" onClick={()=>navigate("/"+userid)}src={"http://localhost:3000/imgs/logo.png"} />
                        </div>
                    <Search />
                </div>
                <div className="dropps">
                    <DropDown/>
                </div>
                <div className="CardState">
                    <div data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" className="card">
                        <img src={"http://localhost:3000/svg/6861315.png"} />
                        {productuser?.length > 0 &&
                            <span className="rounded-circle bg-light border d-flex justify-content-center align-items-center">{productuser.length}</span>}
                    </div>
                    <div className="liked" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" >
                        <img src={"http://localhost:3000/svg/Instagram-Like-Icon-03brf3.png"} />
                        {favoriteProductuser?.length > 0 &&
                            <span className="rounded-circle bg-light border  d-flex justify-content-center align-items-center">{favoriteProductuser.length}</span>}
                    </div>
                    <div  className="Profil" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <div  className="Profilname"> {userProfileName.name ? userProfileName.name.charAt(0).toUpperCase() : ""}</div>
                    </div>
                </div>
                <ul className="nav-links">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label htmlFor="checkbox_toggle" className="span  ">&#9776;</label>
                    <div className="menu">
                        <li><Link to={"/"+ userid}>Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link onClick={()=>dispatch(logOut(userid))} to="/">Log Out</Link></li>
                        
                    </div>
                </ul>
            </nav>
        </>
    );
};

export default Navigation;