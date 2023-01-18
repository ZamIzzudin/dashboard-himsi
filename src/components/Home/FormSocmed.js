import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AsyncEditSocmed } from '../../state/socmed/middleware'

import { ReactComponent as Linking } from '../../assets/icons/Link.svg'

import '../../styles/components/FormLayout.css'

export default function FormUpcoming({ currentData, showForm }) {
    const dispatch = useDispatch()

    const [socmedURL, seSocmedURL] = useState(currentData?.url)

    function handleAddSlider(e) {
        e.preventDefault()
        dispatch(AsyncEditSocmed({
            _id: currentData._id,
            nama_link: currentData.nama_link,
            url: socmedURL,
            kategori: "sosmed"
        }))
        showForm(false)
    }

    return (
        <Form onSubmit={(e) => handleAddSlider(e)}>
            <Form.Group>
                <Form.Label>Social Media <span className="required">*</span></Form.Label>
                <Form.Control required value={currentData?.nama_link} disable />
            </Form.Group>
            <Form.Group>
                <Form.Label>Link <span className="required">*</span> <Linking /></Form.Label>
                <Form.Control required value={socmedURL} placeholder="https://" onChange={(e) => seSocmedURL(e.target.value)} />
            </Form.Group>
            <div className="form-cta gap-3">
                <button onClick={() => showForm(false)} className="form-cancel-button" type="button">Cancel</button>
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}