import "./Pricecanvas.css";
import { allProducts, filterByprices } from "../../../ReduxTypeScript/store/action-creators/productcreator";
import { useDispatch } from "react-redux";
import { ChangeEvent, useState } from "react";
import { useTypedSelector } from "../../../ReduxTypeScript/hooks/useTypedSelector";
import { productCategory } from "../../../ReduxTypeScript/store/data/data";

interface PricePrps {
  onchange: () => void
}




const PriceCanvas = () => {


  const { products } = useTypedSelector(state => state.products)
  const { filteritems } = useTypedSelector(state => state.filterReducer)
  const steps = products.map((items: any) => items.price).sort((a: any, b: any) => a - b).filter((value: any, index: any, array: any) => array.indexOf(value) === index)

  const dispatch = useDispatch()
  const [minimumprice, setMinimumPrice] = useState<any>({ min: "" })
  const [maximumprice, setmaximumPrice] = useState<any>({ max: "" })

  const minimumPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setMinimumPrice({ min: e.target.value })
  }

  const maximumPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setmaximumPrice({ max: e.target.value })
  }

  const go = () => {
    dispatch(filterByprices(minimumprice?.min, maximumprice?.max))
  }



  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>
        <input className="priceInputs" value={minimumprice.min} onChange={(e) => minimumPrice(e)}></input>
        <input className="priceInputs" value={maximumprice.max} onChange={(e) => maximumPrice(e)}></input>
        <button onClick={() => go()} className="buttonGo" >go</button>
      </div>
    </>
  );
};

export default PriceCanvas;
