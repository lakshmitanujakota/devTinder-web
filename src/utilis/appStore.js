import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userFeed from "./feedSlice";
import userConnections from "./connectionSlice";
import userRequests from "./requestSlice";

const appStore=configureStore({
    reducer:{
        user: userReducer,
        feed: userFeed,
        connections: userConnections,
        requests: userRequests,
    }
});

export default appStore;