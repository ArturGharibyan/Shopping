import React from 'react';
import "./seeall.css"
import { Link, useParams } from 'react-router-dom';

const Seeall = () => {
    const {userid} =useParams()


    return (
        <article className='Seemorearticle'>
            <p className='explorePopular_paragraph'>Explore Popular Categories</p>
            <div className='seemore_navigator'>
                <Link to={'/seeallproducts'+"/"+userid} className='seemoreNavigate_link'>See all</Link>
                <img className='seemoreSvg ' src={"http://localhost:3000/svg/iconmonstr-arrow-right-thin-240.png"} />
            </div>
        </article>
    );
};

export default Seeall;