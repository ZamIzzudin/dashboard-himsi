import { Link } from 'react-router-dom'

import UINLogo from '../assets/UIN_LOGO.png'

import '../styles/components/HomeLinkCard.css'

export default function HomeLinkCard({ cardData }) {
    return (
        <Link to={cardData.path} className="home-link-card">
            <img src={UINLogo} alt='card-logo' width='100' />
            <h5>{cardData.name}</h5>
        </Link>
    )
}