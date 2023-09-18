import { configureStore } from '@reduxjs/toolkit'
import counterReducer from  "../Fetures/Blogerslice"
export default configureStore({
    reducer: {
        Bloger: counterReducer
      }
})