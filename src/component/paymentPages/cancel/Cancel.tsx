import React from 'react';
import { Link, useParams } from 'react-router-dom';
import "./cancel.css"
import { useTypedSelector } from '../../../ReduxTypeScript/hooks/useTypedSelector';



const Cancel = () => {

  const {user}=useTypedSelector(state=>state.user)
  const users = JSON.parse(localStorage.useridData)


    return (
      <div className='Cancel' >
        <div className='Cancel_parent_div'>
        <div className='Cancel_text'>
          <span className='Something_went_wrong'>Something went wrong!!</span>
          <span className='Please_retry_after_sometime'>
            Please retry after sometime
          </span>
          <div className='Cancel_image_div'>
            <img src={"http://localhost:3000/svg/cancel.png"} alt=""/>
          </div>
          <div className='Back_to_home_div'>
            <Link to={"/"+users} className='Back_to_Home'>Back to Home</Link>
          </div>
        </div>
      </div>
      </div>
    );
};

export default Cancel;