import { createSlice } from "@reduxjs/toolkit";

const ConnectionSlice = createSlice({
    name: "connections",
    initialState: [],
    reducers: {
        addConnections: (state, action) => action.payload,
        removeConnections: (state, action) => ()=>[],
    }
});

export const { addConnections, removeConnections } = ConnectionSlice.actions;
export default ConnectionSlice.reducer;