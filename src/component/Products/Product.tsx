import React, { useEffect } from 'react';
import "./products.css"
interface ResultsProps {
    results:any
}



const Products = ({results}:ResultsProps) => {


  
    return (
        <>
        <section className="card-container">{results}</section>
      </>
    );
};

export default Products;