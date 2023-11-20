import React, { useEffect, useState } from 'react';
import { Provider } from "react-redux";
import { store } from "./ReduxTypeScript/store";
import MyRouter from './Myrouter/MyRouter';
import Navigation from './component/Navigation/Navigation';
import MyShoppingCards from './component/MyShopingCards/MyShoppingCards';
import MyFavoriteProducts from './component/MyFavoriteProducts/MyFavoriteProducts';
import {persistor} from "./ReduxTypeScript/store"
import { PersistGate } from 'redux-persist/integration/react';
import Footer from './component/Footer/Footer';


const Store = () => {

   

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <MyRouter />
            </PersistGate>
        </Provider>

    );
};

export default Store;