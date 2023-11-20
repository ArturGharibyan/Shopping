import "./productitemwiev.css"
import { allProducts } from "../../ReduxTypeScript/store/data/data"; 
import Productitemnavigate from '../Items/Productitemnavigate';



const Productitemwiev = () => {

    
    return (
        <div className="Productitemwiev">
            {allProducts.seeAllproduct?.map((e, i) => {
                return (
                    <div className='items' key={i} >
                        <Productitemnavigate props={e} />
                    </div>
                )
            })}
            </div>
    );
};

export default Productitemwiev;