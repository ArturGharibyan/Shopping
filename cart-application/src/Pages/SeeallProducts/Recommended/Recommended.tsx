import { useTypedSelector } from "../../../ReduxTypeScript/hooks/useTypedSelector";
import { productCategory, recomendedcompany } from "../../../ReduxTypeScript/store/data/data";
import { recomended } from "../../../ReduxTypeScript/store/action-creators/productcreator";
import { useDispatch } from "react-redux";
import CircularProgres from "../../../component/circularprogress/CircilarProgress";
import "./recomended.css"

const Recommended = () => {

    const { filterByprice,filteritems } = useTypedSelector(state => state.filterReducer)
    const dispatch = useDispatch()
    const steps =filteritems.filter((value:any, index:any, self:any) =>index === self.findIndex((t:any) => (t.model === value.model )))
    

    return (
        <>
            <div className="recommended">
                <h2 className="recommended-title">Recommended</h2>
                <div className="recommended-flex">
                    {
                       steps.map((items: any, index: any) => {
                            return (
                                <button onClick={()=>dispatch(recomended(items.model,items.type))} className="recomendedButtons" key={index}   >{items.model}</button>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Recommended;