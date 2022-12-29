import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from 'react-redux-loading-bar';
import AuhtReducer from "./auth/reducer";
import UserReducer from "./user/reducer";
import FAQReducer from "./faq/reducer";
import CollageLinkReducer from "./collageLink/reducer";
import BeritaReducer from "./berita/reducer";

const store = configureStore({
    reducer: {
        loadingBar: loadingBarReducer,
        auth: AuhtReducer,
        user: UserReducer,
        faq: FAQReducer,
        collageLink: CollageLinkReducer,
        berita: BeritaReducer,
    },
});

export { store }