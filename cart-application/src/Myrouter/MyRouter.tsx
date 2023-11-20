import React from 'react';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Furniture from '../Pages/Frniture/Furniture';
import ToysGames from '../Pages/ToysGames/ToysGames';
import Shop from '../Pages/Shop/Shop';
import Sports from '../Pages/Sports/Sports';
import Jewerly from '../Pages/Jewerly/Jewerly';
import Headphones from '../Pages/Headphones/Headphones';
import Electronic from '../Pages/Electronic/Electronic';
import Computers from '../Pages/Computers/Computers';
import Clotes from '../Pages/Clotes/Clotes';
import ArtCraft from '../Pages/ArtCraft/ArtCraft';
import Home from '../Pages/Home/Home';
import Gamecontroiler from '../Pages/Gamecontroiler/Gamecontroiler';
import Error from '../component/errorComponent/Error';
import Accessories from '../Pages/Accessories/Accessories';
import Household from '../Pages/Households/Household';
import Searchitemsview from '../component/Search/searchitemswiew/Searchitemsview';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/Signup/SignUp';
import Success from '../component/paymentPages/succes/Success';
import Cancel from '../component/paymentPages/cancel/Cancel';
import Authentificate from '../component/Authentificate/Authentificate';
import Cameras from '../Pages/Cameras/Cameras';
import About from '../Pages/About/About';
import SeeallProduct from '../Pages/SeeallProducts/SeeallProduct';

const MyRouter = () => {


    return (



        <Routes>
            <Route path='/' element={<Authentificate/>}/>
            <Route index path="/:userid" element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/art&craft/:id' element={<ArtCraft />} />
            <Route path='/clotes/:id' element={<Clotes />} />
            <Route path='/computers/:id' element={<Computers />} />
            <Route path='/electronic/:id' element={<Electronic />} />
            <Route path='/headphones/:id' element={<Headphones />} />
            <Route path='/jewerly/:id' element={<Jewerly />} />
            <Route path='/sports/:id' element={<Sports />} />
            <Route path='/shop/:id/:userid' element={<Shop />} />
            <Route path='/toysgames/:id' element={<ToysGames />} />
            <Route path='/furniture/:id' element={<Furniture />} />
            <Route path='/gamecontroiler/:id' element={<Gamecontroiler />} />
            <Route path='/accessories/:id' element={<Accessories />} />
            <Route path='/household/:id' element={<Household />} />
            <Route path='/cameras/:id' element={<Cameras/>}/>
            <Route path='/searchitemsview/:name/:userid' element={<Searchitemsview />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path='/about' element={<About/>}/>
            <Route path="/seeallproducts/:id" element={<SeeallProduct/>}/>
            <Route path='*' element={<Error />} />
        </Routes>
        
    );
};

export default MyRouter;