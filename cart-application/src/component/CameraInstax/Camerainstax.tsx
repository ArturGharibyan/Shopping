import React from 'react';
import "./camerainstax.css"
import { Link, useParams } from 'react-router-dom';

const Camerainstax = () => {

const {userid} =useParams()

    return (
        <div className='camerainstax'>
        <div className='camerinstax_heading'><p>FujiFilm Instax 11</p></div>
       <div className='camerainstax_items'>
       <Link className='camerainstaxnavigator' to={"/cameras"+"/"+userid}>Shop now</Link>
       </div>
       <div className='caamerainstax_image'>
       <img  src={"http://localhost:3000/imgs/97540d7e-da7e-4319-a559-3bbb9010248b-transformed.png"} />
       </div>
   </div>
    );
};

export default Camerainstax;