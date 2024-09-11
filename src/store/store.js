import { configureStore } from "@reduxjs/toolkit"
import gifSlice from './slice/gif'


const store = configureStore({
  reducer: {
    gifs: gifSlice,
  },
})


export default store


