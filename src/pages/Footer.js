import { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { AsyncRemoveUser } from '../state/user/middleware'

import FormInformasiFooter from '../components/Footer/FormInformasiFooter'
import FormTautanFooter from '../components/Footer/FormTautanFooter'
import FormDisplayFooter from '../components/Footer/FormDisplayFooter'

// import { ReactComponent as Delete } from '../assets/icons/Delete.svg'

export default function User() {
    // const { user = [] } = useSelector(states => states)
    // const dispatch = useDispatch();

    const [showInformasiForm, setShowInformasiForm] = useState(false)
    const [showTautanForm, setShowTautanForm] = useState(false)
    const [selectedData, setSelectedData] = useState(null)

    // function handleDeleteUser(id) {
    //     dispatch(AsyncRemoveUser(id))
    // }

    // scroll top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [showInformasiForm, showTautanForm]);

    // Form that shown when parameter (true)
    if (showInformasiForm) {
        return (
            <main>
                <h1 className="page-header">Footer</h1>
                <section className="content-section">
                    <div className="section-header-container">
                        <h4 className="section-header">Manage Informasi</h4>
                        <button onClick={() => { setShowInformasiForm(false); setSelectedData(null) }} className="section-add-btn">-</button>
                    </div>
                    <div className="section-body">
                        <FormInformasiFooter currentData={selectedData} showForm={setShowInformasiForm} />
                    </div>
                </section>
            </main>
        )
    }

    if (showTautanForm) {
        return (
            <main>
                <h1 className="page-header">Footer</h1>
                <section className="content-section">
                    <div className="section-header-container">
                        <h4 className="section-header">Manage Tautan Penting</h4>
                        <button onClick={() => { setShowTautanForm(false); setSelectedData(null) }} className="section-add-btn">-</button>
                    </div>
                    <div className="section-body">
                        <FormTautanFooter currentData={selectedData} showForm={setShowTautanForm} />
                    </div>
                </section>
            </main>
        )
    }

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

            <section className="content-section">
                <div className="section-header-container">
                    <h4 className="section-header">Informasi</h4>
                    <button onClick={() => { setShowInformasiForm(true); setSelectedData(null) }} className="section-add-btn">+</button>
                </div>
                <div className="section-body">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>Judul</th>
                            <th>Link</th>
                            <th>Role</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </table>
                </div>
            </section>

            <section className="content-section">
                <div className="section-header-container">
                    <h4 className="section-header">Tautan Penting</h4>
                    <button onClick={() => { setShowTautanForm(true); setSelectedData(null) }} className="section-add-btn">+</button>
                </div>
                <div className="section-body">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>Judul</th>
                            <th>Link</th>
                            <th>Role</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </table>
                </div>
            </section>
        </main >
    )
}