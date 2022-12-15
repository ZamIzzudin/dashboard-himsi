import cookies from '../utils/cookies'

import HIMSILogo from '../assets/HIMSI_LOGO.png'
import '../styles/components/Header.css'

export default function Header() {

    function handleLogout() {
        cookies.remove('refreshToken')
        window.location.assign("/")
        window.location.reload()
    }
    return (
        <header>
            <section className="header-cta">
                <img src={HIMSILogo} width="60px" alt="Logo HIMSI" />
                <span className="role-name">Super Admin</span>
                <button onClick={() => handleLogout()} className="logout-button">Logout</button>
            </section>
        </header>
    )
}