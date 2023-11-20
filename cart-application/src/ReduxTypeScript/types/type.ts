import { ShoppingProductPropertyes } from "../../types/modules";

export interface ProductState {
    products: ShoppingProductPropertyes[];
    cartQuantity: number
    cartPrice:number
    cartitems: {
        cartitemsAray: Array<any>,
        favoritecartitemsAray: Array<any>
    },
    changeImage: any
    filteritems:any
    filterByprice:any
}

export enum ProductActionTypes {
    LIKE = "LIKE",
    CHANGE = "CHANGE",
    DIS_LIKE = "DIS_LIKE",
    REMOVE_ITEM = 'REMOVE_ITEM',
    ADD_TO_CARD = "ADD_TO_CARD",
    INCREASE_QUANTITY = 'INCREASE_QUANTITY',
    DECREASE_QUANTITY = 'DECREASE_QUANTITY',
    REMOVE_FAVORITE_ITEM = "REMOVE_FAVORITE_ITEM",
    DEFAULT_STATE = "DEFAULT_STATE",
    FILTER_BY_TYPES = "FILTER_BY_TYPES",
    FILTER_BY_PRICES = "FILTER_BY_PRICES",
    FILTER_BY_COLORS = "FILTER_BY_COLORS",
    RECOMMENDED_COMPANYES= "RECOMMENDED_COMPANYES",
    ALL_PRODUCTS ="ALL_PRODUCTS",
    SIGN_UP = "SIGN_UP",
    SIGN_IN = "SIGN_IN",
    LOG_OUT = "LOG_OUT"
}

interface SignUp {
    type: ProductActionTypes.SIGN_UP
    user: any

}

interface SignIn {
    type: ProductActionTypes.SIGN_IN
    payload: any

}

interface LogOut {
    type: ProductActionTypes.LOG_OUT
    isLoading: boolean
    id: any

}

interface Like {
    type: ProductActionTypes.LIKE
    id: number
    payload: Array<any>
    index: any
    userid: any
}

interface DisLike {
    type: ProductActionTypes.DIS_LIKE
    id: number
    userid: any
}


interface IncreaseAction {
    type: ProductActionTypes.INCREASE_QUANTITY;
    id: number
}


interface DecreaseAction {
    type: ProductActionTypes.DECREASE_QUANTITY;
    id: number
}


interface RemoverAction {
    type: ProductActionTypes.REMOVE_ITEM;
    payload?: any[] | number | undefined;
    id: number
}


interface RemoveFavoriteItem {
    type: ProductActionTypes.REMOVE_FAVORITE_ITEM,
    id: any
}


interface Change {
    type: ProductActionTypes.CHANGE
    id: any
    index: any
}


type AddTocard = {
    type: ProductActionTypes.ADD_TO_CARD
    payload: any
    index: any
    id: number
    userid: any
}

type DefaultState ={
type:ProductActionTypes.DEFAULT_STATE
id:number
userid:any
}

type FilterByTypes ={
    type:ProductActionTypes.FILTER_BY_TYPES
    productType:any
}

type FilterByPrices = {
    type:ProductActionTypes.FILTER_BY_PRICES
    minimum:any
    maximum:any
}

type FilterByColors={
    type:ProductActionTypes.FILTER_BY_COLORS
    productType:any
    color:any
}

type RecommendedCompanyes ={
    type:ProductActionTypes.RECOMMENDED_COMPANYES
    company:any
    productType:any
}

type AllProducts={
    type:ProductActionTypes.ALL_PRODUCTS
    payload:any
}



export type UserSlicetypes = {
    payload: any
    type: string
}




export type ProductAction = IncreaseAction |
    DecreaseAction |
    RemoverAction |
    RemoveFavoriteItem |
    Change |
    AddTocard |
    DefaultState |
    FilterByTypes |
    FilterByPrices |
    FilterByColors |
    RecommendedCompanyes |
    AllProducts |
    DisLike |
    SignIn |
    SignUp |
    LogOut |
    Like  
