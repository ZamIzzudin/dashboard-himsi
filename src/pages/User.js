import { useState } from 'react'

import FormAddUser from '../components/User/FormAddUser'

export default function User() {
    const [showAddForm, setShowAddForm] = useState(false)

    const users = [
        {
            id: 10293,
            name: 'Email HIMSI',
            email: 'agusgacor@gmail.com',
            role: 'Admin',
            password: '123456'
        },
        {
            id: 10293,
            name: 'Email HIMSI',
            email: 'agusgacor@gmail.com',
            role: 'Admin',
            password: '123456'
        }
    ]

    const [listUser, setListUser] = useState(users)

    function handleAddLink(data) {
        setListUser([...listUser, data])
        setShowAddForm(false)
    }

    function handleDeleteLink(id) {
        const newData = listUser.filter(link => link.id !== id)
        setListUser(newData)
    }

    if (showAddForm) {
        return (
            <main>
                <h1 className="page-header">User</h1>
                <section className="content-section">
                    <div className="section-header-container">
                        <h4 className="section-header">Tambah User</h4>
                        <button onClick={() => setShowAddForm(false)} className="section-add-btn">-</button>
                    </div>
                    <div className="section-body">
                        <FormAddUser getData={handleAddLink} />
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
                    <button onClick={() => setShowAddForm(true)} className="section-add-btn">+</button>
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
                                        <button onClick={() => handleDeleteLink(link.id)} className="section-delete-btn">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </section>
        </main>
    )
}