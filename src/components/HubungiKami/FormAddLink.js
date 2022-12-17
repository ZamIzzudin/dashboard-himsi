import { Form } from 'react-bootstrap'
import { useState } from 'react'

import '../../styles/components/FormLayout.css'

export default function FormAddLink({ addData, editData, currentData }) {
    const [linkTitle, setLinkTitle] = useState(currentData?.judul)
    const [linkURL, setLinkURL] = useState(currentData?.url)

    function handleAddLink(e) {
        e.preventDefault()
        if (currentData !== null) {
            editData({
                id: currentData.id,
                judul: linkTitle,
                url: linkURL
            })
        } else {
            const id = Math.floor(Math.random() * 1001)

            addData({
                id,
                judul: linkTitle,
                url: linkURL
            })
        }
    }

    return (
        <Form onSubmit={(e) => handleAddLink(e)}>
            <Form.Group>
                <Form.Label>Judul</Form.Label>
                <Form.Control required value={linkTitle} onChange={(e) => setLinkTitle(e.target.value)} />
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