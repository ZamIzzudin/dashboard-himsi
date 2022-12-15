import '../styles/components/Sidebar.css'
import { Link, useLocation } from 'react-router-dom'

import '../styles/components/Sidebar.css'

export default function Sidebar() {
    const location = useLocation().pathname

    return (
        <nav>
            <ul className="navbar-link-container">
                <li className="navbar-link-item">
                    <Link to='/' className={location === '/' ? 'active' : null}>Home</Link>
                </li>
                <li className="navbar-link-item">
                    <Link to='/profile' className={location === '/profile' ? 'active' : null}>Profile</Link>
                </li>
                <li className="navbar-link-item">
                    <Link to='/program-kerja' className={location === '/program-kerja' ? 'active' : null}>Program Kerja</Link>
                </li>
                <li className="navbar-link-item">
                    <Link to='/berita' className={location === '/berita' ? 'active' : null}>Berita</Link>
                </li>
                <li className="navbar-link-item">
                    <Link to='/layanan-mahasiswa' className={location === '/layanan-mahasiswa' ? 'active' : null}>Layanan Mahasiswa</Link>
                </li>
                <li className="navbar-link-item">
                    <Link to='/hubungi-kami' className={location === '/hubungi-kami' ? 'active' : null}>Hubungi Kami</Link>
                </li>
            </ul>
        </nav>
    )
}