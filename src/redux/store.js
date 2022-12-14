import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./reducers/tokenSlice";

const store = configureStore({
    reducer: {
        token: tokenSlice,
    },

    middleware: (getDefaulftMiddleware) => 
        getDefaulftMiddleware({
            serializanleCheck: false,

        }),
});

export default store;