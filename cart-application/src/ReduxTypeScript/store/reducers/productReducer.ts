import { stat } from "fs";
import { ProductActionTypes, ProductAction, ProductState } from "../../types/type";
import { productsInitialState } from "../data/data"
import { initialState } from "../data/data";


export const productReducer = (state = productsInitialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionTypes.INCREASE_QUANTITY:
            const item = state.products?.find((e: any,) => e.id === action.id)
            if (item) {
                item.cartQuantity = item.cartQuantity += 1
                item.preventPrice = item.cartQuantity * item.price
            }
            return state


        case ProductActionTypes.DECREASE_QUANTITY:
            const items = state.products.find((item: any) => item.id === action.id)
            if (items?.cartQuantity === 1) {
                return { ...state, cartQuantity: items.cartQuantity = 1 }
            }
            else if (items) {
                items.cartQuantity = items.cartQuantity - 1
                items.preventPrice = items.cartQuantity * items.price
            }
            return state


        case ProductActionTypes.CHANGE:
            const locaStorageuserid = JSON.parse(localStorage.useridData)
            const exclusiveModel = state.products.find((e: any) => e.id === action.id && e.exclusive === true)
            if (exclusiveModel) {
                if (state?.cartitems?.cartitemsAray.find((e) => e.imgUrl == exclusiveModel?.imgUrl)) {
                    return state
                }
            }


            const changeEventFunction = (index: any) => {
                const locaStorageuserid = JSON.parse(localStorage.useridData)
                const exclusiveModel = state.products.find((e: any) => e.id === action.id && e.exclusive === true)
                if (index) {
                    const changeitem = state?.products?.find((item: any) => item.id === action.id)
                    if (changeitem) {
                        const currentItem = state.cartitems.cartitemsAray.find((e: any) => e.imgUrl == index && e?.userId == locaStorageuserid)
                        if (currentItem) {
                            changeitem.cartQuantity = currentItem.cartQuantity
                            changeitem.preventPrice = currentItem.cartQuantity * changeitem.price
                            return state
                        }
                        else if (exclusiveModel) {
                            exclusiveModel.cartQuantity = exclusiveModel.cartQuantity
                            exclusiveModel.preventPrice = exclusiveModel.cartQuantity * exclusiveModel.price
                            return state
                        }
                        else {
                            changeitem.cartQuantity = 1
                            changeitem.preventPrice = changeitem.cartQuantity * changeitem.price
                            return state
                        }
                    }
                }
                return { ...state }
            }
            changeEventFunction(action.index)
            return state

        case ProductActionTypes.ADD_TO_CARD:
            const localuserid = JSON.parse(localStorage.useridData)
            const itemss = state.products.find((itemss: any) => itemss?.id === action?.id)
            const exclusiveModelitem = state?.products?.find((e: any) => e?.id === action?.id && e?.exclusive === true && e?.userId == action?.userid)
            if (itemss) {
                const addTocart = (index: any, id: any) => {
                    const newObj = {
                        imgUrl: index,
                        id: Math.random(),
                        name: itemss?.name,
                        userId: localuserid,
                        currentid: itemss.id,
                        price: itemss?.price,
                        exclusive: itemss?.exclusive,
                        imgUrlArray: itemss.imgUrlArray,
                        cartQuantity: itemss.cartQuantity,
                        preventPrice: itemss?.preventPrice,
                    }
                    const updaterItem = state?.cartitems?.cartitemsAray?.find((e: any) => e?.imgUrl === newObj?.imgUrl && e?.userId == newObj?.userId)
                    state.cartitems.cartitemsAray.find((item: any) => {
                        if (item.exclusive == true && item.currentid == newObj.currentid && item.imgUrl !== newObj?.imgUrl) {
                            item.cartQuantity = itemss.cartQuantity
                            item.preventPrice = item.cartQuantity * itemss.price
                        }
                    })
                    if (updaterItem) {
                        updaterItem.cartQuantity = itemss.cartQuantity
                        updaterItem.preventPrice = updaterItem.cartQuantity * itemss.price
                        return state
                    }
                    else if (state.cartitems.cartitemsAray.find((item: any) => item.exclusive == true && item.currentid == newObj.currentid && item.imgUrl !== newObj?.imgUrl)) {
                        return state
                    }
                    else if (exclusiveModelitem) {
                        exclusiveModelitem.cartQuantity = itemss.cartQuantity
                        exclusiveModelitem.price = exclusiveModelitem.cartQuantity * itemss.price
                    }
                    else {
                        state?.cartitems?.cartitemsAray?.push(newObj)
                        return state
                    }
                    return { ...state }
                }
                addTocart(action.index, action.id)
                return { ...state }
            }
            return state



        case ProductActionTypes.REMOVE_ITEM:
            const removeitem = state.cartitems.cartitemsAray.filter((cartittem: any) => cartittem.id !== action.id)
            if (removeitem) {
                state.cartitems.cartitemsAray = removeitem
                return { ...state }
            }
            return state



        case ProductActionTypes.REMOVE_FAVORITE_ITEM:
            const removeFavoriteItem = state.cartitems.favoritecartitemsAray.filter((cartittem: any) => cartittem.id !== action.id)
            if (removeFavoriteItem) {
                state.cartitems.favoritecartitemsAray = removeFavoriteItem
                return { ...state }
            }
            return state



        case ProductActionTypes.LIKE:
            const localSuserid = JSON.parse(localStorage.useridData)
            const favorite = state?.products?.find((cartittem: any) => cartittem?.id === action?.id)
            if (favorite?.isFollow === false) {
                favorite.isFollow = true
            }
            const newFaworite = {
                id: favorite?.id,
                name: favorite?.name,
                isFollow: favorite?.isFollow,
                imgUrlArray: favorite?.imgUrlArray,
                price: favorite?.price, userId: localSuserid
            }
            if (newFaworite?.isFollow === true && !state?.cartitems?.favoritecartitemsAray?.includes(newFaworite?.userId)) {
                state?.cartitems?.favoritecartitemsAray?.push(newFaworite)
                return { ...state }
            }
            return state



        case ProductActionTypes.DIS_LIKE:
            const localSusersid = JSON.parse(localStorage.useridData)
            const currentFavorite = state?.cartitems?.favoritecartitemsAray?.find((cartittem: any) => cartittem?.id === action?.id && cartittem?.userId == localSusersid)
            if (currentFavorite?.isFollow === true) {
                currentFavorite.isFollow = false
                if (currentFavorite?.isFollow === false && state?.cartitems?.favoritecartitemsAray?.includes(currentFavorite)) {
                    const removeFavoriteItem = state?.cartitems?.favoritecartitemsAray?.filter((cartittem: any) => cartittem?.id !== action?.id)
                    if (removeFavoriteItem) {
                        state.cartitems.favoritecartitemsAray = removeFavoriteItem
                        return { ...state }
                    }
                }
                return { ...state }
            }
            return state

        case ProductActionTypes.DEFAULT_STATE:


            const localSusersids = JSON.parse(localStorage.useridData)
            const addedProduct = state.cartitems.cartitemsAray.find((item: any) => item.userId !== localSusersids)
            const addedProductTwo = state?.cartitems?.cartitemsAray?.find((item: any) => item?.userId == localSusersids && item?.exclusive == true && item?.id !== addedProduct?.id )
            const main = state.products.find((e: any) => e.id === action.id && e.exclusive !== true)
            const main2 = state.cartitems.cartitemsAray.find((e: any) => e.exclusive !== true && e.imgUrl == main?.imgUrl && e.userId == localSusersids)




            if (addedProduct) {
                state.products.find((item: any) => {
                    if (item.id == addedProduct.currentid) {
                        item.cartQuantity = 1
                        item.preventPrice = item.cartQuantity * item.price
                        return state
                    }
                })
            }

             if (addedProductTwo) {
               const mainexclusiv = state.products.find((item: any) => item.id == action.id && item.exclusive == true && item.id == addedProductTwo?.currentid)
                    if(mainexclusiv){
                        mainexclusiv.cartQuantity = addedProductTwo.cartQuantity
                        mainexclusiv.preventPrice = mainexclusiv.cartQuantity * mainexclusiv.price
                        return state
                    }
            }else if(!addedProductTwo){
                const mainexclusiv = state.products.find((item: any) => item.id == action.id && item.exclusive == true )
                    if(mainexclusiv){
                        mainexclusiv.cartQuantity =1
                        mainexclusiv.preventPrice = mainexclusiv.cartQuantity * mainexclusiv.price
                        return state
                    }
            }

            if (main2) {
                const mains = state.products.find((e: any) => e.id === action.id && e.exclusive !== true)
                if (mains) {
                    mains.cartQuantity = main2.cartQuantity
                    mains.preventPrice = mains.cartQuantity * mains.price
                    return state
                }
            } else if (!main2) {
                const mains = state.products.find((e: any) => e.id === action.id && e.exclusive !== true)
                if (mains) {
                    mains.cartQuantity = 1
                    mains.preventPrice = mains.cartQuantity * mains.price
                    return state
                }
            }

            return state
        default:
            return state
    }
}
