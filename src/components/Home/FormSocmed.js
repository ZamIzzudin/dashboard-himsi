import { Form } from 'react-bootstrap'
import { useState } from 'react'

import '../../styles/components/FormLayout.css'

export default function FormUpcoming({ getData, currentData }) {
    const [socmedName, setSocmedName] = useState(currentData.name)
    const [socmedURL, seSocmedURL] = useState(currentData.url)

    function handleAddSlider(e) {
        e.preventDefault()
        getData({
            id: currentData.id,
            name: socmedName,
            url: socmedURL
        })
    }

    return (
        <Form onSubmit={(e) => handleAddSlider(e)}>
            <Form.Group>
                <Form.Label>Nama Socmed</Form.Label>
                <Form.Control required value={socmedName} onChange={(e) => setSocmedName(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Link</Form.Label>
                <Form.Control required value={socmedURL} onChange={(e) => seSocmedURL(e.target.value)} />
            </Form.Group>
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}