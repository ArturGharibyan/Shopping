import React from 'react';
import { Link } from 'react-router-dom';
import "./success.css"

const Success = () => {



    return (
      <div className='Success'>
        <div className='Success_parent_div'>
         <div className='Success_text'>
              <span className='Payment_successful'>Payment successful</span>
              <span className='YourOrder_is_in_our_system'>
               Your order is in our system
              </span>
              <div className='Success_image_div'>
               <img src={"http://localhost:3000/svg/success.png"} alt=""/>
              </div>
              <div className='my-10 mx-auto'>
              </div>
         </div>
       </div>
       </div>
    );
};

export default Success;