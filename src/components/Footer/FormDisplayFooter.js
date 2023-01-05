import { Form } from 'react-bootstrap'
import { useState } from 'react'

import '../../styles/components/FormLayout.css'

export default function FormDisplayFooter({ currentData }) {
    const [alamatFooter, setAlamatFooter] = useState(currentData?.alamat)
    const [emailFooter, setEmailFooter] = useState(currentData?.email)
    const [websiteFooter, setWebsiteFooter] = useState(currentData?.website)

    function handleEditDisplay(e) {
        e.preventDefault()
        const data = {
            _id: currentData._id,
            alamat: alamatFooter,
            email: emailFooter,
            website: websiteFooter
        }
        console.log(data)
    }

    return (
        <Form onSubmit={(e) => handleEditDisplay(e)}>
            <Form.Group>
                <Form.Label>Alamat</Form.Label>
                <textarea value={alamatFooter} onChange={(e) => setAlamatFooter(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control value={emailFooter} onChange={(e) => setEmailFooter(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Website</Form.Label>
                <Form.Control value={websiteFooter} onChange={(e) => setWebsiteFooter(e.target.value)} />
            </Form.Group>
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}