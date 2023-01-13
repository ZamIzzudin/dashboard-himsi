import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AsyncCreateTautan, AsyncEditTautan } from '../../state/tautan/middleware'

import { ReactComponent as Linking } from '../../assets/icons/Link.svg'

import '../../styles/components/FormLayout.css'

export default function FormTautanFooter({ currentData, showForm }) {
    const dispatch = useDispatch()

    const [linkTitle, setLinkTitle] = useState(currentData?.nama_link)
    const [linkURL, setLinkURL] = useState(currentData?.url)

    function handleAddLink(e) {
        e.preventDefault()
        if (currentData !== null) {
            dispatch(AsyncEditTautan({
                _id: currentData._id,
                nama_link: linkTitle,
                kategori: 'tautan',
                url: linkURL
            }))
            showForm(false)
        } else {
            dispatch(AsyncCreateTautan({
                nama_link: linkTitle,
                kategori: 'tautan',
                url: linkURL
            }))
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
                <Form.Control placeholder="https://" required value={linkURL} onChange={(e) => setLinkURL(e.target.value)} />
            </Form.Group>
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}