import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AsyncCreateContact, AsyncEditContact } from '../../state/contact/middleware'

import { ReactComponent as Linking } from '../../assets/icons/Link.svg'

import '../../styles/components/FormLayout.css'

export default function FormAddLink({ showForm, currentData }) {
    const dispatch = useDispatch()

    const [linkTitle, setLinkTitle] = useState(currentData?.nama_link)
    const [linkURL, setLinkURL] = useState(currentData?.url)

    function handleAddLink(e) {
        e.preventDefault()
        if (currentData !== null) {
            dispatch(AsyncEditContact({
                _id: currentData._id,
                nama_link: linkTitle,
                kategori: 'contact',
                url: linkURL,
            }))
            showForm(false)
        } else {
            dispatch(AsyncCreateContact({
                nama_link: linkTitle,
                kategori: 'contact',
                url: linkURL,
            }))
            showForm(false)
        }
    }

    return (
        <Form onSubmit={(e) => handleAddLink(e)}>
            <Form.Group>
                <Form.Label>Nama Contact</Form.Label>
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