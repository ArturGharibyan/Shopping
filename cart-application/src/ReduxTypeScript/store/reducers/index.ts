import {combineReducers} from "redux";
import { productReducer } from "./productReducer";
import { UserReducer } from "./AddUser";
import ProductFilterReducer from "./ProductFilterReducer";

export const rootReducer = combineReducers({
    products: productReducer,
    user:UserReducer,
    filterReducer:ProductFilterReducer
})

export type RootState = ReturnType<typeof rootReducer>
