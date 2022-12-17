import { Form } from 'react-bootstrap'
import { useState } from 'react'

import InputImage from '../InputImage'

import '../../styles/components/FormLayout.css'

export default function FormPartner({ addData, editData, currentData }) {
    const [partnerName, setPartnerName] = useState(currentData?.name)
    const [partnerImage, setPartnerImage] = useState(currentData?.img)

    function handleAddSlider(e) {
        e.preventDefault()
        if (currentData !== null) {
            editData({
                id: currentData.id,
                name: partnerName,
                img: partnerImage,
            })
        } else {
            const id = Math.floor(Math.random() * 1001)

            addData({
                id,
                name: partnerName,
                img: partnerImage,
            })
        }
    }

    return (
        <Form onSubmit={(e) => handleAddSlider(e)}>
            <InputImage getData={setPartnerImage} label="Upload Logo Partner" currentData={partnerImage} />
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