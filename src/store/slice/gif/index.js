import { createSlice } from "@reduxjs/toolkit";
import { gifThrunk } from "../../thrunks/gif";

const initialState = {
    assets: [
        
    ]
}


export const gifSlice = createSlice({
    name: 'gifs',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(gifThrunk.fulfilled, (state, action) => {
            state.assets = action.payload
        })
    }
})

export default gifSlice.reducer