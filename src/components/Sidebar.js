import { Link } from 'react-router-dom'

import '../styles/components/Sidebar.css'

import UINLogo from '../assets/UIN_LOGO.png'

export default function Sidebar() {
    return (
        <nav>
            <div>
                <h1>HIMSI</h1>
            </div>

            <ul>
                <li>
                    <Link to='/'>Profile</Link>
                </li>
                <li>
                    <Link to='/event'>Event</Link>
                </li>
                <li>
                    <Link to='/article'>Article</Link>
                </li>
                <hr />
                <li>
                    <Link to='/link'>Link</Link>
                </li>
                <li>
                    <Link to='/banner'>Banner</Link>
                </li>
                <li>
                    <Link to='/faq'>FAQ</Link>
                </li>
            </ul>

            <div className="navbar-login-container">
                <img src={UINLogo} alt="avatar" width="50" />
                <span>Admin</span>
            </div>
        </nav>
    )
}