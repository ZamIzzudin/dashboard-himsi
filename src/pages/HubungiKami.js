import FormAddLink from '../components/HubungiKami/FormAddLink'

import { ReactComponent as Delete } from '../assets/icons/Delete.svg'
import { useState, useEffect } from 'react'

export default function Hubungikami() {
    const [showAddForm, setShowAddForm] = useState(false)

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

    const [selectedData, setSelectedData] = useState(null)

    function AddLink(data) {
        setListLink([...listLink, data])
        setShowAddForm(false)
    }

    function deleteLink(id) {
        const newData = listLink.filter(link => link.id !== id)
        setListLink(newData)
    }

    function editLink(data) {
        const newData = listLink.map(link => {
            if (link.id === data.id) {
                return data
            }
            return link
        })
        setListLink(newData)
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
                        <button onClick={() => setShowAddForm(false)} className="section-add-btn">-</button>
                    </div>
                    <div className="section-body">
                        <FormAddLink addData={AddLink} editData={editLink} currentData={selectedData} />
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
                            <th>Judul</th>
                            <th>Link</th>
                            <th className="text-center">Action</th>
                        </tr>
                        {listLink.map((link, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{link.judul}</td>
                                <td>{link.url}</td>
                                <td className="table-cta">
                                    <div className="table-cta-container">
                                        <button onClick={() => { setShowAddForm(true); setSelectedData(link) }} className="section-edit-btn">Edit</button>
                                        <button onClick={() => deleteLink(link.id)} className="section-delete-btn"><Delete /></button>
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