import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userFeed from "./feedSlice";
import userConnections from "./connectionSlice";

const appStore=configureStore({
    reducer:{
        user: userReducer,
        feed: userFeed,
        connections: userConnections,
    }
});

export default appStore;