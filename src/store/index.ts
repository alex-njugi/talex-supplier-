// src/store/index.ts (update reducer map)
import { configureStore } from "@reduxjs/toolkit";
import product from "./slices/productSlice";
import cart from "./slices/cartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({ reducer: { product, cart } });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
