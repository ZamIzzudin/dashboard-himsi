import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AsyncEditSocmed } from '../../state/socmed/middleware'

import { ReactComponent as Linking } from '../../assets/icons/Link.svg'

import '../../styles/components/FormLayout.css'

export default function FormUpcoming({ currentData, showForm }) {
    const dispatch = useDispatch()

    const [socmedName, setSocmedName] = useState(currentData.nama_link)
    const [socmedURL, seSocmedURL] = useState(currentData.url)

    function handleAddSlider(e) {
        e.preventDefault()
        dispatch(AsyncEditSocmed({
            _id: currentData._id,
            nama_link: socmedName,
            url: socmedURL,
            kategori: "sosmed"
        }))
        showForm(false)
    }

    return (
        <Form onSubmit={(e) => handleAddSlider(e)}>
            <Form.Group>
                <Form.Label>Nama Socmed</Form.Label>
                <Form.Control required value={socmedName} onChange={(e) => setSocmedName(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Link <Linking /></Form.Label>
                <Form.Control required value={socmedURL} onChange={(e) => seSocmedURL(e.target.value)} />
            </Form.Group>
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}