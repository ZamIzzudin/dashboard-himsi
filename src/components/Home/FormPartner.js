import { Form } from 'react-bootstrap'
import { useState } from 'react'

import InputImage from '../InputImage'

import '../../styles/components/FormLayout.css'

export default function FormPartner({ getData }) {
    const [partnerName, setPartnerName] = useState('')
    const [partnerImage, setPartnerImage] = useState(null)

    function handleAddSlider(e) {
        e.preventDefault()
        const id = Math.floor(Math.random() * 1001)

        getData({
            id,
            name: partnerName,
            img: partnerImage,
        })
    }

    return (
        <Form onSubmit={(e) => handleAddSlider(e)}>
            <InputImage getData={setPartnerImage} label="Upload Logo Partner" />
            <Form.Group>
                <Form.Label>Nama</Form.Label>
                <Form.Control required value={partnerName} onChange={(e) => setPartnerName(e.target.value)} />
            </Form.Group>
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}