import { createSlice } from "@reduxjs/toolkit";
import { addUser } from "./userSlice";

const feedSlice = createSlice({
    name: "feed",
    initialState: null,
    reducers: {
        addFeed: (state, action) => { return action.payload },
        removeFeed: (state, action) =>  {const newArray=state.filter(e=>e._id !== action.payload)
            return newArray}
    }

});

export const { addFeed, removeFeed } = feedSlice.actions;

export default feedSlice.reducer;