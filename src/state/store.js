import { configureStore } from "@reduxjs/toolkit"
import { loadingBarReducer } from 'react-redux-loading-bar'
import ErrorReducer from './error/reducer'
import SuccessReducer from './success/reducer'
import AuhtReducer from "./auth/reducer"
import UserReducer from "./user/reducer"
import FAQReducer from "./faq/reducer"
import CollageLinkReducer from "./collageLink/reducer"
import ContactReducer from "./contact/reducer"
import BeritaReducer from "./berita/reducer"
import HimpunanReducer from "./himpunan/reducer"
import VisiMisiReducer from "./visiMisi/reducer"
import BidangReducer from "./bidang/reducer"
import DivisiReducer from "./divisi/reducer"
import PengurusReducer from "./pengurus/reducer"
import EventReducer from "./event/reducer"
import SocmedReducer from "./socmed/reducer"
import PartnerReducer from "./partner/reducer"
import SliderReducer from "./slider/reducer"
import TautanReducer from "./tautan/reducer"
import FooterReducer from "./footer/reducer"

const store = configureStore({
    reducer: {
        loadingBar: loadingBarReducer,
        error: ErrorReducer,
        success: SuccessReducer,
        auth: AuhtReducer,
        user: UserReducer,
        faq: FAQReducer,
        collageLink: CollageLinkReducer,
        contact: ContactReducer,
        berita: BeritaReducer,
        himpunan: HimpunanReducer,
        visiMisi: VisiMisiReducer,
        bidang: BidangReducer,
        divisi: DivisiReducer,
        pengurus: PengurusReducer,
        event: EventReducer,
        socmed: SocmedReducer,
        partner: PartnerReducer,
        slider: SliderReducer,
        tautan: TautanReducer,
        footer: FooterReducer,
    },
});

export { store }