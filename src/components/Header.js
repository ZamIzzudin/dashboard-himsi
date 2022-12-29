import { useDispatch } from 'react-redux'
import { asyncLogout } from '../state/auth/middleware'

import Loading from './Loading'
import HIMSILogo from '../assets/HIMSI_LOGO.png'
import { ReactComponent as Logout } from '../assets/icons/logout.svg'
import '../styles/components/Header.css'

export default function Header() {
    const dispatch = useDispatch()

    function handleLogout() {
        dispatch(asyncLogout())
    }

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