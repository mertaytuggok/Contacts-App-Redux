import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./Slice/contactSlice";

export const Store = configureStore({
    reducer: {
        contacts: contactSlice,
    },
});
