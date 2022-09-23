import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";

import dataReducer from "./dataSlice";

const persistConfig = {
    key: 'root',
    storage
};

export const store = configureStore({

    reducer: {
        data: persistReducer(persistConfig, dataReducer),
    },

    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]

});

persistStore(store).purge()
