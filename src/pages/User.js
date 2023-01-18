import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { AsyncRemoveUser } from '../state/user/middleware'
import { HideError } from '../state/error/middleware'
import { HideSuccess } from '../state/success/middleware'

import FormAddUser from '../components/User/FormAddUser'
import InfoModal from '../components/InfoModal'

import { ReactComponent as Delete } from '../assets/icons/Delete.svg'

export default function User() {
    const { user = [], success, error } = useSelector(states => states)
    const dispatch = useDispatch();

    const [showAddForm, setShowAddForm] = useState(false)
    const [selectedData, setSelectedData] = useState(null)

    function handleModal() {
        dispatch(HideError())
        dispatch(HideSuccess())
    }

    function handleDeleteUser(id) {
        dispatch(AsyncRemoveUser(id))
    }

    // scroll top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [showAddForm]);

    // Form that shown when parameter (true)
    if (showAddForm) {
        return (
            <main>
                <h1 className="page-header">User</h1>
                <section className="content-section">
                    <div className="section-header-container">
                        <h4 className="section-header">Manage User</h4>
                        <button onClick={() => { setShowAddForm(false); setSelectedData(null) }} className="section-add-btn">-</button>
                    </div>
                    <div className="section-body">
                        <FormAddUser showForm={setShowAddForm} currentData={selectedData} />
                    </div>
                </section>
            </main>
        )
    }

    return (
        <main>
            <h1 className="page-header">User</h1>
            <section className="content-section">
                <div className="section-header-container">
                    <h4 className="section-header">Daftar User</h4>
                    <button onClick={() => { setShowAddForm(true); setSelectedData(null) }} className="section-add-btn">+</button>
                </div>
                <div className="section-body">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>Nama</th>
                            <th>Username</th>
                            <th>Role</th>
                            <th className="text-center">Action</th>
                        </tr>
                        {user?.map((link, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{link.nama_admin || 'Anonymous'}</td>
                                <td>{link.username}</td>
                                <td>{link.role}</td>
                                <td className="table-cta">
                                    <div className="table-cta-container">
                                        <button onClick={() => { setShowAddForm(true); setSelectedData(link); }} className="section-edit-btn">Edit</button>
                                        <button onClick={() => handleDeleteUser(link._id)} className="section-delete-btn"><Delete /></button>
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
        </main >
    )
}