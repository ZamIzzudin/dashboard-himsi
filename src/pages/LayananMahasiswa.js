import FormAddLink from '../components/LayananMahasiswa/FormAddLink'
import FormAddFAQ from '../components/LayananMahasiswa/FormAddFAQ'
import { useState, useEffect } from 'react'

export default function LayananMahasiswa() {
    const [showAddLinkForm, setShowAddLinkForm] = useState(false)
    const [showAddFAQForm, setShowAddFAQForm] = useState(false)

    const plainDataLink = [
        {
            id: 1,
            name: 'Database Himsi',
            category: 'E-Layanan',
            url: '/',
        },
        {
            id: 2,
            name: 'Data Dosen',
            category: 'E-Layanan',
            url: '/',
        },
        {
            id: 3,
            name: 'Instagram HIMSI',
            category: 'Database Materi',
            url: '/',
        },
        {
            id: 4,
            name: 'AIS',
            category: 'Database Materi',
            url: '/',
        }
    ]

    const plainDataFAQ = [
        {
            id: 1,
            question: 'ban apa yang menguasai negara?',
            answer: 'banteng mer....'
        },
        {
            id: 2,
            question: 'nilai satuan apa yang lebih berkuasa daripada presiden?',
            answer: 'megawat....'
        }
    ]

    const [dataLink, setDataLink] = useState(plainDataLink)
    const [listFAQ, setListFAQ] = useState(plainDataFAQ)

    const [selectedData, setSelectedData] = useState(null)

    function handleAddFAQ(data) {
        setListFAQ([...listFAQ, data])
        setShowAddFAQForm(false)
    }

    function addDataLink(data) {
        setDataLink([...dataLink, data])
        setShowAddLinkForm(false)
    }

    function editLink(data) {
        const newData = dataLink.map((link) => {
            if (data.id === link.id) {
                return data
            }
            return link
        })
        setDataLink(newData)
        setShowAddLinkForm(false)
    }

    function editFAQ(data) {
        const newData = listFAQ.map((faq) => {
            if (data.id === faq.id) {
                return data
            }
            return faq
        })
        setDataLink(newData)
        setShowAddFAQForm(false)
    }

    function deleteFAQ(id) {
        const newData = listFAQ.filter(FAQ => FAQ.id !== id)
        setListFAQ(newData)
    }

    function deleteLink(id) {
        const newData = dataLink.filter((link) => link.id !== id)
        setDataLink(newData)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [showAddLinkForm, showAddFAQForm]);

    if (showAddLinkForm) {
        return (
            <main>
                <h1 className="page-header">Layanan Mahasiswa</h1>
                <section className="content-section">
                    <div className="section-header-container">
                        <h4 className="section-header">Tambah Link</h4>
                        <button onClick={() => { setShowAddLinkForm(false); setSelectedData(null) }} className="section-add-btn">-</button>
                    </div>
                    <div className="section-body">
                        <FormAddLink addData={addDataLink} editData={editLink} currentData={selectedData} />
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
                        <h4 className="section-header">Tambah FAQ</h4>
                        <button onClick={() => { setShowAddFAQForm(false); setSelectedData(null) }} className="section-add-btn">-</button>
                    </div>
                    <div className="section-body">
                        <FormAddFAQ addData={handleAddFAQ} editData={editFAQ} currentData={selectedData} />
                    </div>
                </section>
            </main>
        )
    }

    return (
        <main>
            <h1 className="page-header">Layanan Mahasiswa</h1>

            {/* E-Layanan Display */}
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
                        {dataLink.map((link, index) => {
                            return (
                                link.category === 'E-Layanan' && (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{link.name}</td>
                                        <td>{link.url}</td>
                                        <td className="table-cta">
                                            <div className="table-cta-container">
                                                <button onClick={() => { setShowAddLinkForm(true); setSelectedData(link) }} className="section-edit-btn">Edit</button>
                                                <button onClick={() => deleteLink(link.id)} className="section-delete-btn">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )
                        })}
                    </table>
                </div>
            </section >

            {/* Database Materi Display */}
            <section className="content-section mb-5">
                <div className="section-header-container">
                    <h4 className="section-header">Database Materi</h4>
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
                        {dataLink.map((link, index) => {
                            return (
                                link.category === 'Database Materi' && (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{link.name}</td>
                                        <td>{link.url}</td>
                                        <td className="table-cta">
                                            <div className="table-cta-container">
                                                <button onClick={() => { setShowAddLinkForm(true); setSelectedData(link) }} className="section-edit-btn">Edit</button>
                                                <button onClick={() => deleteLink(link.id)} className="section-delete-btn">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            )
                        })}
                    </table>
                </div>
            </section >

            {/* FAQ Display */}
            <section className="content-section mb-5">
                <div className="section-header-container">
                    <h4 className="section-header">FAQ</h4>
                    <button onClick={() => setShowAddFAQForm(true)} className="section-add-btn">+</button>
                </div>
                <div className="section-body">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>Judul</th>
                            <th>Link</th>
                            <th className="text-center">Action</th>
                        </tr>
                        {listFAQ.map((FAQ, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{FAQ.question}</td>
                                <td>{FAQ.answer}</td>
                                <td className="table-cta">
                                    <div className="table-cta-container">
                                        <button onClick={() => { setShowAddFAQForm(true); setSelectedData(FAQ) }} className="section-edit-btn">Edit</button>
                                        <button onClick={() => deleteFAQ(FAQ.id)} className="section-delete-btn">Delete</button>
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