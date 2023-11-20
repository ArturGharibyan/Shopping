import React from 'react';
import { ProductActionTypes, ProductAction, ProductState } from "../../types/type";
import { productsInitialState, productCategory } from "../data/data"
import { initialState } from "../data/data";


const ProductFilterReducer = (state = productsInitialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case ProductActionTypes.FILTER_BY_TYPES:
            const categoryes = Object.assign([], Object.values(productCategory)).flat(Infinity)
            const filteredItems = categoryes.filter((items: any) => items.type == action.productType)
            return { ...state, filteritems: filteredItems, filterByprice: filteredItems }

        case ProductActionTypes.ALL_PRODUCTS:
            const categorytype = Object.assign([], Object.values(productCategory)).flat(Infinity)
            return { ...state, filteritems: categorytype,filterByprice:categorytype }

        case ProductActionTypes.FILTER_BY_PRICES:
            const filterbyprice = state.filteritems.filter((items: any) => items.price >= action.minimum && items.price <= action.maximum)
            return { ...state, filterByprice: filterbyprice }

        case ProductActionTypes.RECOMMENDED_COMPANYES:
            const recomended = state.filteritems.filter((items: any) => items.type == action.productType && items.model == action.company)
            return { ...state, filterByprice: recomended }
        default:
            return state
    }

};

export default ProductFilterReducer;