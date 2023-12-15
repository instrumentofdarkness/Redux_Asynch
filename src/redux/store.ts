
import { configureStore } from "@reduxjs/toolkit";
import productList from "./slices/productSlice";
import { Reducer, AnyAction } from "redux";

const store = configureStore({
    reducer: {
        productList,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
