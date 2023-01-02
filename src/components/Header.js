import { useDispatch } from 'react-redux'
import { asyncLogout } from '../state/auth/middleware'

import { useEffect } from 'react'

import Loading from './Loading'
import HIMSILogo from '../assets/HIMSI_LOGO.png'
import { ReactComponent as Logout } from '../assets/icons/logout.svg'
import '../styles/components/Header.css'

import { asyncGetDataHimpunan } from '../state/himpunan/middleware'
import { AsyncGetAllBerita } from '../state/berita/middleware'
import { AsyncGetAllUser } from '../state/user/middleware'
import { AsyncGetAllFAQ } from '../state/faq/middleware'
import { AsyncGetAllLink } from '../state/collageLink/middleware'
import { AsyncGetVisiMisi } from '../state/visiMisi/middleware'
// import { AsyncGetContact } from '../state/contact/middleware'

export default function Header() {
    const dispatch = useDispatch()

    function handleLogout() {
        dispatch(asyncLogout())
    }

    useEffect(() => {
        dispatch(asyncGetDataHimpunan())
        dispatch(AsyncGetAllBerita())
        dispatch(AsyncGetAllUser())
        dispatch(AsyncGetAllFAQ())
        dispatch(AsyncGetAllLink())
        dispatch(AsyncGetVisiMisi())
        // dispatch(AsyncGetContact())
    }, [dispatch]);

    return (
        <header>
            <Loading />
            <section className="header-cta">
                <img src={HIMSILogo} width="60px" alt="Logo HIMSI" />
                <span className="role-name">Super Admin</span>
                <button onClick={() => handleLogout()} className="logout-button"><Logout /></button>
            </section>
        </header>
    )
}