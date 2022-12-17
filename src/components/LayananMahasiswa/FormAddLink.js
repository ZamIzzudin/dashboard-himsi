import { Form } from 'react-bootstrap'
import { useState } from 'react'

import '../../styles/components/FormLayout.css'

export default function FormAddLink({ addData, editData, currentData }) {
    const [linkName, setLinkName] = useState(currentData?.name)
    const [linkURL, setLinkURL] = useState(currentData?.url)
    const [linkCategory, setLinkCategory] = useState(currentData?.category || 'E-Layanan')

    function handleManageLink(e) {
        e.preventDefault()
        if (currentData !== null) {
            editData({
                id: currentData.id,
                name: linkName,
                category: linkCategory,
                url: linkURL,
            })
        } else {
            const id = Math.floor(Math.random() * 1001)

            addData({
                id,
                name: linkName,
                category: linkCategory,
                url: linkURL,
            })
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
                    <option value="E-Layanan">E-Layanan Mahasiswa</option>
                    <option value="Database Materi">Database Materi</option>
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