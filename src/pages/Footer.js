import { useEffect } from 'react'
import FormDisplayFooter from '../components/Footer/FormDisplayFooter'

export default function User() {

    // scroll top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main>
            <h1 className="page-header">Footer</h1>

            <section className="content-section">
                <div className="section-header-container">
                    <h4 className="section-header">HIMSI</h4>
                    <button className="section-add-btn hidden">+</button>
                </div>
                <div className="section-body">
                    <FormDisplayFooter />
                </div>
            </section>
        </main >
    )
}