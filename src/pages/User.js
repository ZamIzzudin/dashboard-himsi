import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AsyncGetAllUser } from '../state/user/middleware'

import FormAddUser from '../components/User/FormAddUser'
import { ReactComponent as Delete } from '../assets/icons/Delete.svg'

export default function User() {
    const [showAddForm, setShowAddForm] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(AsyncGetAllUser())
    }, [dispatch])

    const users = [
        {
            id: 10293,
            name: 'Email HIMSI',
            email: 'agusgacor@gmail.com',
            role: 'Admin',
            password: '123456'
        },
        {
            id: 1293,
            name: 'Email HIMSI',
            email: 'agusgacor@gmail.com',
            role: 'Admin',
            password: '123456'
        }
    ]

    const [listUser, setListUser] = useState(users)

    const [selectedData, setSelectedData] = useState(null)

    function handleAddUser(data) {
        setListUser([...listUser, data])
        setShowAddForm(false)
    }

    function handleDeleteUser(id) {
        const newData = listUser.filter(user => user.id !== id)
        setListUser(newData)
    }

    function handleEditUser(data) {
        const newData = listUser.map(user => {
            if (user.id === data.id) {
                return data
            }
            return user
        })
        setListUser(newData)
        setShowAddForm(false)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [showAddForm]);

    if (showAddForm) {
        return (
            <main>
                <h1 className="page-header">User</h1>
                <section className="content-section">
                    <div className="section-header-container">
                        <h4 className="section-header">Tambah User</h4>
                        <button onClick={() => { setShowAddForm(false); setSelectedData(null) }} className="section-add-btn">-</button>
                    </div>
                    <div className="section-body">
                        <FormAddUser addData={handleAddUser} editData={handleEditUser} currentData={selectedData} />
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
                            <th>Email</th>
                            <th>Role</th>
                            <th className="text-center">Action</th>
                        </tr>
                        {listUser.map((link, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{link.name}</td>
                                <td>{link.email}</td>
                                <td>{link.role}</td>
                                <td className="table-cta">
                                    <div className="table-cta-container">
                                        <button onClick={() => { setShowAddForm(true); setSelectedData(link); }} className="section-edit-btn">Edit</button>
                                        <button onClick={() => handleDeleteUser(link.id)} className="section-delete-btn"><Delete /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </section>
        </main >
    )
}