import { type } from "os";
import { ProductAction, ProductActionTypes } from "../../types/type";








export const like = (id: any, isFollow: any, index: any, userid: any) => { return { type: ProductActionTypes.LIKE, id, isFollow, index, userid } }
export const disLike = (id: any, isFollow: any, userid: any) => { return { type: ProductActionTypes.DIS_LIKE, id, isFollow, userid } }
export const addTocart = (id: any, index: any, userid: any) => { return { type: ProductActionTypes.ADD_TO_CARD, id, index, userid } }
export const removeFavoriteItem = (id: any) => { return { type: ProductActionTypes.REMOVE_FAVORITE_ITEM, id } }
export const increaseQuantity = (id: any) => { return { type: ProductActionTypes.INCREASE_QUANTITY, id } }
export const decreaseQuantity = (id: any) => { return { type: ProductActionTypes.DECREASE_QUANTITY, id } }
export const change = (id: any, index: any) => { return { type: ProductActionTypes.CHANGE, id, index } }
export const removeItem = (id: any) => { return { type: ProductActionTypes.REMOVE_ITEM, id } }
export const filterByprices = (minimum: any, maximum: any) => { return { type: ProductActionTypes.FILTER_BY_PRICES, minimum, maximum } }
export const filterByColor = (productType: any, color: any) => { return { type: ProductActionTypes.FILTER_BY_COLORS, productType, color } }
export const recomended = (company: any, productType: any) => { return { type: ProductActionTypes.RECOMMENDED_COMPANYES, company, productType } }
export const filterByTypes = (productType: any) => { return { type: ProductActionTypes.FILTER_BY_TYPES, productType } }
export const defaultState = (id: any, userid: any) => { return { type: ProductActionTypes.DEFAULT_STATE, id, userid } }
export const loginUser = (user: any) => { return { type: ProductActionTypes.SIGN_UP, user } }
export const logOut = (id: any) => { return { type: ProductActionTypes.LOG_OUT, id } }
export const allProducts = () => { return { type: ProductActionTypes.ALL_PRODUCTS } }