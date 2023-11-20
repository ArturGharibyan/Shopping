import React from 'react';
import "./discounts.css"
import { Link } from 'react-router-dom';
const Discount = () => {
    return (
        <div className='discount_container'>
            <Link to="" className='discount_paragraph'> <p >Get up to  <b style={{color:"#FF5E00FF"}}>20%</b><br></br>OFF Headphones </p></Link>
        </div>
    );
};

export default Discount;