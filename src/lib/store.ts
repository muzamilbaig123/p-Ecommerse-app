import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themecolor/theme'
import cartFun from "./slices/cart/cart"
import loaderReducer from "./slices/loader/loader"


export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeReducer,
      cart: cartFun,
      loader: loaderReducer,
    },
    devTools: true
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']