import { configureStore } from "@reduxjs/toolkit"
import { loadingBarReducer } from 'react-redux-loading-bar'
import ErrorReducer from './error/reducer'
import AuhtReducer from "./auth/reducer"
import UserReducer from "./user/reducer"
import FAQReducer from "./faq/reducer"
import CollageLinkReducer from "./collageLink/reducer"
import BeritaReducer from "./berita/reducer"
import HimpunanReducer from "./himpunan/reducer"
import VisiMisiReducer from "./visiMisi/reducer"
import ContactReducer from "./contact/reducer"

const store = configureStore({
    reducer: {
        loadingBar: loadingBarReducer,
        error: ErrorReducer,
        auth: AuhtReducer,
        user: UserReducer,
        faq: FAQReducer,
        collageLink: CollageLinkReducer,
        berita: BeritaReducer,
        himpunan: HimpunanReducer,
        visiMisi: VisiMisiReducer,
        contact: ContactReducer,
    },
});

export { store }