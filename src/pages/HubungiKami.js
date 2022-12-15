import FormAddLink from '../components/HubungiKamiComponents/FormAddLink'

import { useState } from 'react'

export default function Hubungikami() {
    const [showAddModal, setShowAddModal] = useState(false)

    const links = [
        {
            id: 10293,
            judul: 'Email HIMSI',
            url: 'https://yandex.com/'
        },
        {
            id: 10267,
            judul: 'Whatsapp HIMSI',
            url: 'https://yandex.com/'
        }
    ]

    const [listLink, setListLink] = useState(links)

    function handleAddLink(data) {
        setListLink([...listLink, data])
        setShowAddModal(false)
    }

    function handleDeleteLink(id) {
        const newData = listLink.filter(link => link.id !== id)
        setListLink(newData)
    }
    return (
        <main>
            <h1 className="page-header">Hubungi Kami</h1>
            <section className="content-section">
                <div className="section-header-container">
                    <h4 className="section-header">Daftar Kontak</h4>
                    <button onClick={() => setShowAddModal(true)} className="section-add-btn">+</button>
                </div>
                <div className="section-body">
                    <table>
                        <tr>
                            <th>Judul</th>
                            <th>Link</th>
                            <th className="text-center">Action</th>
                        </tr>
                        {listLink.map(link => (
                            <tr>
                                <td>{link.judul}</td>
                                <td>{link.url}</td>
                                <td className="table-cta">
                                    <div className="table-cta-container">
                                        <button onClick={() => handleDeleteLink(link.id)} className="section-delete-btn">Delete</button>
                                        <button className="section-edit-btn">Edit</button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                    </table>
                </div>
            </section>

            <FormAddLink showAddModal={showAddModal} setShowAddModal={setShowAddModal} getData={handleAddLink} />
        </main>
    )
}