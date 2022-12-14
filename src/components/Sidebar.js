import { Link, useLocation } from 'react-router-dom'
import cookies from '../utils/cookies'
import '../styles/components/Sidebar.css'

export default function Sidebar() {
    const location = useLocation().pathname

    function handleLogout() {
        cookies.remove('refreshToken')
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
                    <Link to='/event' className={location === '/event' ? 'active' : null}>Event</Link>
                </li>
                <li className="navbar-link-item">
                    <Link to='/article' className={location === '/article' ? 'active' : null}>Article</Link>
                </li>
                <hr />
                <li className="navbar-link-item">
                    <Link to='/link' className={location === '/link' ? 'active' : null}>Link</Link>
                </li>
                <li className="navbar-link-item">
                    <Link to='/banner' className={location === '/banner' ? 'active' : null}>Banner</Link>
                </li>
                <li className="navbar-link-item">
                    <Link to='/faq' className={location === '/faq' ? 'active' : null}>FAQ</Link>
                </li>
            </ul>

            <div className="navbar-login-container">
                <button className="edit-btn" onClick={() => handleLogout()}>Logout</button>
            </div>
        </nav>
    )
}