import { Link, useParams } from 'react-router-dom';
import "./relatednavigate.css"

const Relatedproducts = () => {
    const {userid}=useParams()
    return (
        <article className='relatedarticle'>
            <p className='related_paragraph'>Related Products</p>
            <div className='related_navigator'>
                <Link to={'/seeallproducts'+"/"+userid} className='relatedNavigate_link'>See all</Link>
                <img className='relatedSvg ' src={"http://localhost:3000/svg/iconmonstr-arrow-right-thin-240.png"} />
            </div>
        </article>
    );
};

export default Relatedproducts;