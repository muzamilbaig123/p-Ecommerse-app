import { configureStore } from '@reduxjs/toolkit'
import themeColors from './slices/themecolor/theme'


export const makeStore = () => {
  return configureStore({
    reducer: {
      theCol: themeColors
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']