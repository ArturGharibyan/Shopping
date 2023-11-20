import "./category.css"
import { Link, useParams } from 'react-router-dom';
import { category } from '../../ReduxTypeScript/store/data/data';
import { useTypedSelector } from '../../ReduxTypeScript/hooks/useTypedSelector';


const Category = () => {

    const {userid} = useParams()
    const { user } = useTypedSelector(state => state.user)
    const userId= user.find((user:any)=>user.id == userid)

    return (
        < nav className="Categories">
        <h1>Categories</h1>
        {
            category.category.map((items:any)=>{
                return(
                    <div key={items.name}><Link className="link" to={items.navigate+"/"+userId.id}><p>{items.name}</p></Link></div>
                )
            })
        }
    </ nav>
    );
};

export default Category;