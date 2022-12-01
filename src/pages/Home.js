import HomeLinkCard from "../components/HomeLinkCard"

import '../styles/pages/Home.css'

export default function Home() {
    return (
        <main className="home-content">
            <h1>Welcome to HIMSI Dashboard</h1>
            <span>What you wanna manage?</span>

            <section className="home-link-container">

                {homeLink.map(link => (
                    <HomeLinkCard cardData={link} />
                ))}

            </section>

        </main>
    )
}

const homeLink = [
    {
        name: 'Profile',
        path: '/profile'
    },
    {
        name: 'Event',
        path: '/event'
    },
    {
        name: 'Article',
        path: '/article'
    },
    {
        name: 'Link',
        path: '/link'
    },
    {
        name: 'Banner',
        path: '/banner'
    },
    {
        name: 'FAQ',
        path: '/faq'
    },
]