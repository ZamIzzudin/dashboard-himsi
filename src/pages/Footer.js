import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AsyncRemoveTautan } from '../state/tautan/middleware'
import FormTautanFooter from '../components/Footer/FormTautanFooter'

import { ReactComponent as Linking } from '../assets/icons/Link.svg'
import { ReactComponent as Delete } from '../assets/icons/Delete.svg'

import FormDisplayFooter from '../components/Footer/FormDisplayFooter'

export default function User() {
    const { tautan = [] } = useSelector(states => states)
    const dispatch = useDispatch()

    const [showAddTautanForm, setShowAddTautanForm] = useState(false)

    const [selectedData, setSelectedData] = useState(null)

    function deleteTautan(id) {
        dispatch(AsyncRemoveTautan(id))
    }

    // scroll top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (showAddTautanForm) {
        return (
            <main>
                <h1 className="page-header">Footer</h1>
                <section className="content-section">
                    <div className="section-header-container">
                        <h4 className="section-header">Manage Tautan</h4>
                        <button onClick={() => { setShowAddTautanForm(false); setSelectedData(null) }} className="section-add-btn">-</button>
                    </div>
                    <div className="section-body">
                        <FormTautanFooter currentData={selectedData} showForm={setShowAddTautanForm} />
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
                    <h4 className="section-header">Tautan Footer</h4>
                    <button onClick={() => { setShowAddTautanForm(true); setSelectedData(null) }} className="section-add-btn">+</button>
                </div>
                <div className="section-body">
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>URL</th>
                            <th className="text-center">Action</th>
                        </tr>
                        {tautan?.map((link, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{link.nama_link}</td>
                                    <td><Linking /> {link.url}</td>
                                    <td className="table-cta">
                                        <div className="table-cta-container">
                                            <button onClick={() => { setShowAddTautanForm(true); setSelectedData(link) }} className="section-edit-btn">Edit</button>
                                            <button onClick={() => deleteTautan(link._id)} className="section-delete-btn"><Delete /></button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </section>
        </main >
    )
}