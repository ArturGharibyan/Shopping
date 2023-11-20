import React from 'react';
import "./about.css"
const About = () => {
    return (
        <div className='about d-flex justify-content-center align-items-center flex-column'>
            <div className="container w-50   "><div className="page-header"><h1 className="page-title text text-center">About</h1></div><div className="page-content mt-5"><p>There's the main page with product categories (all and most popular), search & filters, and a place for banners with top sale offers and new items.
                Users can complete the purchase from their shopping cart or look through their wishlist first. Both available at the top right corner of the page.
                Also, there's the product card. It comes with a description, price tag, rating, size & color info, and a list of related products buyers may like. Users have an option to add the product to their shopping cart or wishlist.
            </p><div className="support-license" style={{ marginTop: "20px" }}><ul><li>Need support? Check our <a href="">support options</a></li><li> <a href="">licensing options</a></li></ul></div></div></div>
        </div>
    );
};

export default About;