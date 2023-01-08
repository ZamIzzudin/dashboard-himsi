import { Form } from 'react-bootstrap'
import { useState } from 'react'

import { ReactComponent as Linking } from '../../assets/icons/Link.svg'

import '../../styles/components/FormLayout.css'

export default function FormInformasiFooter({ currentData, showForm }) {
    const [linkTitle, setLinkTitle] = useState(currentData?.judul)
    const [linkURL, setLinkURL] = useState(currentData?.url)

    function handleAddLink(e) {
        e.preventDefault()
        if (currentData !== null) {
            const data = {
                _id: currentData._id,
                judul: linkTitle,
                url: linkURL
            }

            console.log(data)
            showForm(false)
        } else {
            const data = {
                judul: linkTitle,
                url: linkURL
            }

            console.log(data)
            showForm(false)
        }
    }

    return (
        <Form onSubmit={(e) => handleAddLink(e)}>
            <Form.Group>
                <Form.Label>Judul</Form.Label>
                <Form.Control required value={linkTitle} onChange={(e) => setLinkTitle(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>URL <Linking /></Form.Label>
                <Form.Control required value={linkURL} onChange={(e) => setLinkURL(e.target.value)} />
            </Form.Group>
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}