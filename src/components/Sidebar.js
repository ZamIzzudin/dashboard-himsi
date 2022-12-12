import { Link, useLocation } from 'react-router-dom'

import '../styles/components/Sidebar.css'

export default function Sidebar() {
    const location = useLocation().pathname

    function handleLogout() {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <nav>
            <div>
                <h1>HIMSI</h1>
            </div>

            <ul className="navbar-link-container">
                <li className="navbar-link-item">
                    <Link to='/' className={location === '/' ? 'active' : null}>Home</Link>
                </li>
                <li className="navbar-link-item">
                    <Link to='/profile' className={location === '/profile' ? 'active' : null}>Profile</Link>
                </li>
                <li className="navbar-link-item">
                    <Link to='/programkerja' className={location === '/programkerja' ? 'active' : null}>Program Kerja</Link>
                </li>
                <li className="navbar-link-item">
                    <Link to='/berita' className={location === '/berita' ? 'active' : null}>Berita</Link>
                </li>
                <hr />
                <li className="navbar-link-item">
                    <Link to='/layananmahasiswa' className={location === '/layananmahasiswa' ? 'active' : null}>Layanan Mahasiswa</Link>
                </li>
                <li className="navbar-link-item">
                    <Link to='/hubungikami' className={location === '/hubungikami' ? 'active' : null}>Hubungi Kami</Link>
                </li>
            </ul>

            <div className="navbar-login-container">
                <button className="edit-btn" onClick={() => handleLogout()}>Logout</button>
            </div>
        </nav>
    )
}