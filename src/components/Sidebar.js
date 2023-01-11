import Accordion from './Accordion';
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';

import '../styles/components/Sidebar.css'

export default function Sidebar() {
    const { auth = {} } = useSelector(states => states)
    const location = useLocation().pathname

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <nav>
            {auth?.role === 'admin' ? (
                <ul className="navbar-link-container">
                    <li className="navbar-link-item">
                        <Link to='/' className={location === '/' ? 'active' : null}>Articles</Link>
                    </li>
                    <li className="navbar-link-item">
                        <Accordion isActive={location.includes('/events/') ? true : false} />
                    </li>
                </ul>
            ) : (
                <ul className="navbar-link-container">
                    <li className="navbar-link-item">
                        <Link to='/' className={location === '/' ? 'active' : null}>Home</Link>
                    </li>
                    <li className="navbar-link-item">
                        <Link to='/profile' className={location === '/profile' ? 'active' : null}>Profile</Link>
                    </li>
                    <li className="navbar-link-item">
                        <Accordion isActive={location.includes('/events/') ? true : false} />
                    </li>
                    <li className="navbar-link-item">
                        <Link to='/articles' className={location === '/articles' ? 'active' : null}>Articles</Link>
                    </li>
                    <li className="navbar-link-item">
                        <Link to='/layanan-mahasiswa' className={location === '/layanan-mahasiswa' ? 'active' : null}>Layanan Mahasiswa</Link>
                    </li>
                    <li className="navbar-link-item">
                        <Link to='/hubungi-kami' className={location === '/hubungi-kami' ? 'active' : null}>Hubungi Kami</Link>
                    </li>
                    <li className="navbar-link-item">
                        <Link to='/user' className={location === '/user' ? 'active' : null}>User</Link>
                    </li>
                    <li className="navbar-link-item">
                        <Link to='/footer' className={location === '/footer' ? 'active' : null}>Footer</Link>
                    </li>
                </ul>
            )}
        </nav>
    )
}