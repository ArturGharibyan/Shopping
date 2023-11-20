import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "main-root",
    storage,

}

const persisteReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persisteReducer, applyMiddleware())

export const persistor = persistStore(store)

