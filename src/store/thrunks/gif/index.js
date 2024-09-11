import { createAsyncThunk } from "@reduxjs/toolkit";
import { gifInstanse } from "../../../utils/axios/axios";


export const gifThrunk = createAsyncThunk(
    'gif/get-gif',
    async (_, {rejectWithValue})  => {
        try {
           const gif = await gifInstanse.get('/gifs/trending?api_key=sivakGAQ3PsHrWMX64dtojbt1BJwwNOE&limit=25&offset=0&rating=g&bundle=messaging_non_clips')
            return gif.data.data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            }  else {
                return rejectWithValue(error.message)
            }
        }
    }
)

