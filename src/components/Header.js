/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux'
import { asyncLogout } from '../state/auth/middleware'
import { useEffect } from 'react'

import Loading from './Loading'
import HIMSI_LOGO from '../assets/HIMSI_LOGO.webp'
import { ReactComponent as Logout } from '../assets/icons/logout.svg'
import '../styles/components/Header.css'

import { asyncGetDataHimpunan } from '../state/himpunan/middleware'
import { AsyncGetAllBerita } from '../state/berita/middleware'
import { AsyncGetAllUser } from '../state/user/middleware'
import { AsyncGetAllFAQ } from '../state/faq/middleware'
import { AsyncGetAllLink } from '../state/collageLink/middleware'
import { AsyncGetContact } from '../state/contact/middleware'
import { AsyncGetVisiMisi } from '../state/visiMisi/middleware'
import { AsyncGetAllBidang } from '../state/bidang/middleware'
import { AsyncGetAllSocmed } from '../state/socmed/middleware'
import { AsyncGetAllPartner } from '../state/partner/middleware'
import { AsyncGetAllSlider } from '../state/slider/middleware'
import { asyncGetInfoFooter } from '../state/footer/middleware'

export default function Header() {
    const { auth = {} } = useSelector(states => states)
    const dispatch = useDispatch()

    function handleLogout() {
        dispatch(asyncLogout())
    }

    useEffect(() => {
        if (auth?.role === 'admin') {
            dispatch(AsyncGetAllBidang())
            dispatch(AsyncGetAllBerita())
        } else {
            dispatch(asyncGetDataHimpunan())
            dispatch(AsyncGetAllBerita())
            dispatch(AsyncGetAllUser())
            dispatch(AsyncGetAllFAQ())
            dispatch(AsyncGetContact())
            dispatch(AsyncGetAllLink())
            dispatch(AsyncGetVisiMisi())
            dispatch(AsyncGetAllBidang())
            dispatch(AsyncGetAllSocmed())
            dispatch(AsyncGetAllPartner())
            dispatch(AsyncGetAllSlider())
            dispatch(asyncGetInfoFooter())
        }
    }, [dispatch]);

    return (
        <header>
            <Loading />
            <section className="header-cta">
                <span className="role-name">{auth.role}</span>
                <img src={HIMSI_LOGO} width="60px" alt="Logo HIMSI" />
                <button onClick={() => handleLogout()} className="logout-button"><Logout /></button>
            </section>
        </header>
    )
}