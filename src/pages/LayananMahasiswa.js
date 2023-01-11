import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AsyncRemoveFAQ } from '../state/faq/middleware'
import { AsyncRemoveLink } from '../state/collageLink/middleware'

import FormAddLink from '../components/LayananMahasiswa/FormAddLink'
import FormAddDBMateri from '../components/LayananMahasiswa/FormAddDBMateri'
import FormAddFAQ from '../components/LayananMahasiswa/FormAddFAQ'

import { ReactComponent as Linking } from '../assets/icons/Link.svg'
import { ReactComponent as Delete } from '../assets/icons/Delete.svg'

export default function LayananMahasiswa() {
    const { faq = [], collageLink = [] } = useSelector(states => states)
    const dispatch = useDispatch()

    // parameter to handle showed form
    const [showAddLinkForm, setShowAddLinkForm] = useState(false)
    const [showAddFAQForm, setShowAddFAQForm] = useState(false)
    const [showAddDBMateriForm, setSowAddDBMateriForm] = useState(false)

    const [selectedData, setSelectedData] = useState(null)

    // scroll top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [showAddLinkForm, showAddFAQForm]);

    function deleteFAQ(id) {
        dispatch(AsyncRemoveFAQ(id))
    }

    function deleteLink(id) {
        dispatch(AsyncRemoveLink(id))
    }

    // Form that shown when parameter (true)
    if (showAddLinkForm) {
        return (
            <main>
                <h1 className="page-header">Layanan Mahasiswa</h1>
                <section className="content-section">
                    <div className="section-header-container">
                        <h4 className="section-header">Manage E-Layanan</h4>
                        <button onClick={() => { setShowAddLinkForm(false); setSelectedData(null) }} className="section-add-btn">-</button>
                    </div>
                    <div className="section-body">
                        <FormAddLink currentData={selectedData} showForm={setShowAddLinkForm} />
                    </div>
                </section>
            </main>
        )
    }

    if (showAddDBMateriForm) {
        return (
            <main>
                <h1 className="page-header">Layanan Mahasiswa</h1>
                <section className="content-section">
                    <div className="section-header-container">
                        <h4 className="section-header">Manage Database Materi</h4>
                        <button onClick={() => { setSowAddDBMateriForm(false); setSelectedData(null) }} className="section-add-btn">-</button>
                    </div>
                    <div className="section-body">
                        <FormAddDBMateri currentData={selectedData} showForm={setSowAddDBMateriForm} />
                    </div>
                </section>
            </main>
        )
    }

    if (showAddFAQForm) {
        return (
            <main>
                <h1 className="page-header">Layanan Mahasiswa</h1>
                <section className="content-section">
                    <div className="section-header-container">
                        <h4 className="section-header">Manage FAQ</h4>
                        <button onClick={() => { setShowAddFAQForm(false); setSelectedData(null) }} className="section-add-btn">-</button>
                    </div>
                    <div className="section-body">
                        <FormAddFAQ currentData={selectedData} showForm={setShowAddFAQForm} />
                    </div>
                </section>
            </main>
        )
    }

    return (
        <main>
            <h1 className="page-header">Layanan Mahasiswa</h1>

            {/* E-Layanan Display **possible to be component** */}
            <section className="content-section mb-5">
                <div className="section-header-container">
                    <h4 className="section-header">E-Layanan Mahasiswa</h4>
                    <button onClick={() => { setShowAddLinkForm(true); setSelectedData(null); }} className="section-add-btn">+</button>
                </div>
                <div className="section-body">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>URL</th>
                            <th className="text-center">Action</th>
                        </tr>
                        {collageLink?.e_layanan.map((link, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{link.nama_link}</td>
                                    <td><Linking /> {link.url}</td>
                                    <td className="table-cta">
                                        <div className="table-cta-container">
                                            <button onClick={() => { setShowAddLinkForm(true); setSelectedData(link) }} className="section-edit-btn">Edit</button>
                                            <button onClick={() => deleteLink(link._id)} className="section-delete-btn"><Delete /></button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </section >

            {/* Database Materi Display **possible to be component** */}
            <section className="content-section mb-5">
                <div className="section-header-container">
                    <h4 className="section-header">Database Materi</h4>
                    <button onClick={() => { setSowAddDBMateriForm(true); setSelectedData(null); }} className="section-add-btn">+</button>
                </div>
                <div className="section-body">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>URL</th>
                            <th className="text-center">Action</th>
                        </tr>
                        {collageLink?.database_materi.map((link, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{link.nama_link}</td>
                                    <td><Linking /> {link.url}</td>
                                    <td className="table-cta">
                                        <div className="table-cta-container">
                                            <button onClick={() => { setSowAddDBMateriForm(true); setSelectedData(link) }} className="section-edit-btn">Edit</button>
                                            <button onClick={() => deleteLink(link._id)} className="section-delete-btn"><Delete /></button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </section >

            {/* FAQ Display **possible to be component** */}
            <section className="content-section mb-5">
                <div className="section-header-container">
                    <h4 className="section-header">FAQ</h4>
                    <button onClick={() => setShowAddFAQForm(true)} className="section-add-btn">+</button>
                </div>
                <div className="section-body">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>Pertanyaan</th>
                            <th>Jawaban</th>
                            <th className="text-center">Action</th>
                        </tr>
                        {faq?.map((FAQ, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{FAQ.pertanyaan}</td>
                                <td>{FAQ.jawaban}</td>
                                <td className="table-cta">
                                    <div className="table-cta-container">
                                        <button onClick={() => { setShowAddFAQForm(true); setSelectedData(FAQ) }} className="section-edit-btn">Edit</button>
                                        <button onClick={() => deleteFAQ(FAQ._id)} className="section-delete-btn"><Delete /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </section >

        </main>
    )
}