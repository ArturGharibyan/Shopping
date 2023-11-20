import React from 'react';
import { AddtoCardPropertyes, User } from '../../../types/modules';
import { ProductActionTypes, ProductAction, ProductState } from "../../types/type";
import { productsInitialState } from "../data/data"
import { initialState } from "../data/data";

export const UserReducer = (state = initialState, action: ProductAction) => {
    switch (action.type) {
        case ProductActionTypes.SIGN_UP:
            state?.user?.push(action?.user)
            return { ...state }
        case ProductActionTypes.LOG_OUT:
            state.isLoading = false
            console.log(state.isLoading)
            return state
        default:
            return state
    }
};
