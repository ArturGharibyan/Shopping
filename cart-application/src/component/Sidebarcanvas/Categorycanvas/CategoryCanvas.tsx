import "./Categorycanvas.css";
import { filterByTypes, allProducts} from "../../../ReduxTypeScript/store/action-creators/productcreator";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../ReduxTypeScript/hooks/useTypedSelector";
import { productCategory } from "../../../ReduxTypeScript/store/data/data";


const CategoryCanvas = () => {
  const category = Object.assign([], Object.keys(productCategory)).flat(Infinity)
  const { products } = useTypedSelector(state => state.filterReducer)
  const dispatch = useDispatch()

  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label onClick={()=>dispatch(allProducts())}  className="sidebar-label-container">
          <input type="radio" value="" name="test" />All
          <span className="checkmark"></span>
        </label>
        {
          category?.map((items: any) => {
            return (
              <label onClick={() => dispatch(filterByTypes(items))} key={items} className="sidebar-label-container">
                <input type="radio" value={items} name="test" />{items}
                <span className="checkmark"></span>
              </label>
            )
          })
        }

      </div>
    </div>
  );
}

export default CategoryCanvas;
