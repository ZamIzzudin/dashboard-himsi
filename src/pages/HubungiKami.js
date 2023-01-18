import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { AsyncRemoveContact } from '../state/contact/middleware'
import { HideError } from '../state/error/middleware'
import { HideSuccess } from '../state/success/middleware'

import FormAddLink from '../components/HubungiKami/FormAddLink'
import InfoModal from '../components/InfoModal'

import { ReactComponent as Linking } from '../assets/icons/Link.svg'
import { ReactComponent as Delete } from '../assets/icons/Delete.svg'

export default function Hubungikami() {
    const { contact, success, error } = useSelector(states => states)
    const dispatch = useDispatch()

    const [showAddForm, setShowAddForm] = useState(false)

    const [selectedData, setSelectedData] = useState(null)

    function handleModal() {
        dispatch(HideError())
        dispatch(HideSuccess())
    }

    function deleteLink(id) {
        dispatch(AsyncRemoveContact(id))
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!showAddForm) {
            setSelectedData(null);
        }
    }, [showAddForm]);

    if (showAddForm) {
        return (
            <main>
                <h1 className="page-header">Hubungi Kami</h1>
                <section className="content-section">
                    <div className="section-header-container">
                        <h4 className="section-header">Manage Contact Support</h4>
                        <button onClick={() => setShowAddForm(false)} className="section-add-btn">-</button>
                    </div>
                    <div className="section-body">
                        <FormAddLink showForm={setShowAddForm} currentData={selectedData} />
                    </div>
                </section>
            </main>
        )
    }

    return (
        <main>
            <h1 className="page-header">Hubungi Kami</h1>
            <section className="content-section">
                <div className="section-header-container">
                    <h4 className="section-header">Daftar Kontak</h4>
                    <button onClick={() => { setShowAddForm(true); setSelectedData(null) }} className="section-add-btn">+</button>
                </div>
                <div className="section-body">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Link</th>
                            <th className="text-center">Action</th>
                        </tr>
                        {contact?.map((item, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.nama_link}</td>
                                <td><Linking /> {item.url}</td>
                                <td className="table-cta">
                                    <div className="table-cta-container">
                                        <button onClick={() => { setShowAddForm(true); setSelectedData(item) }} className="section-edit-btn">Edit</button>
                                        <button onClick={() => deleteLink(item._id)} className="section-delete-btn"><Delete /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </table>
                </div>
            </section>
            {/* Error Modal */}
            <InfoModal show={error.status} setShow={handleModal} value={error.message} type="error" />
            {/* Success Draft*/}
            <InfoModal show={success.status} setShow={handleModal} value={success.message} type="success" />
        </main>
    )
}