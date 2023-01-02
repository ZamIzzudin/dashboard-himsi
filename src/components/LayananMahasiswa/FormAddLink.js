import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AsyncCreateLink, AsyncEditLink } from '../../state/collageLink/middleware'

import '../../styles/components/FormLayout.css'

export default function FormAddLink({ currentData, showForm }) {
    const dispatch = useDispatch()

    const [linkName, setLinkName] = useState(currentData?.name)
    const [linkURL, setLinkURL] = useState(currentData?.url)
    const [linkCategory, setLinkCategory] = useState(currentData?.category || 'e-layanan')

    function handleManageLink(e) {
        e.preventDefault()
        // checking ? action with current data
        if (currentData !== null) {
            // handle edit Link
            dispatch(AsyncEditLink({
                _id: currentData._id,
                nama_link: linkName,
                kategori: linkCategory,
                url: linkURL,
            }))
            showForm(false)
        } else {
            // handle add Link
            dispatch(AsyncCreateLink({
                nama_link: linkName,
                kategori: linkCategory,
                url: linkURL,
            }))
            showForm(false)
        }
    }

    return (
        <Form onSubmit={(e) => handleManageLink(e)}>
            <Form.Group>
                <Form.Label>Nama</Form.Label>
                <Form.Control required value={linkName} onChange={(e) => setLinkName(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Kategori</Form.Label>
                <Form.Select required value={linkCategory} onChange={(e) => setLinkCategory(e.target.value)}>
                    <option value="e-layanan">E-Layanan Mahasiswa</option>
                    <option value="database-materi">Database Materi</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>URL</Form.Label>
                <Form.Control required value={linkURL} onChange={(e) => setLinkURL(e.target.value)} />
            </Form.Group>
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}