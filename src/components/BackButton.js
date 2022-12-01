import { Link } from 'react-router-dom'

import '../styles/components/BackButton.css'

export default function BackButton() {
    return (
        <Link to="/" className="back-button">
            back
        </Link>
    )
}