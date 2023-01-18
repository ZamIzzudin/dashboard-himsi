import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncEditInfoFooter } from '../../state/footer/middleware'

import { ReactComponent as Linking } from '../../assets/icons/Link.svg'

import '../../styles/components/FormLayout.css'

export default function FormDisplayFooter() {
    const dispatch = useDispatch()
    const { footer = {} } = useSelector(states => states)

    const [alamatFooter, setAlamatFooter] = useState(footer?.alamat)
    const [emailFooter, setEmailFooter] = useState(footer?.email)
    const [websiteFooter, setWebsiteFooter] = useState(footer?.website)

    function handleEditDisplay(e) {
        e.preventDefault()
        dispatch(asyncEditInfoFooter({
            _id: footer._id,
            alamat: alamatFooter,
            email: emailFooter,
            website: websiteFooter
        }))
    }

    return (
        <Form onSubmit={(e) => handleEditDisplay(e)}>
            <Form.Group>
                <Form.Label>Alamat <span className="required">*</span></Form.Label>
                <textarea placeholder="Alamat HIMSI / UIN JAKARTA" value={alamatFooter} onChange={(e) => setAlamatFooter(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email <span className="required">*</span></Form.Label>
                <Form.Control placeholder='Alamat Email HIMSI' value={emailFooter} onChange={(e) => setEmailFooter(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Website <Linking /> <span className="required">*</span></Form.Label>
                <Form.Control placeholder="https://" value={websiteFooter} onChange={(e) => setWebsiteFooter(e.target.value)} />
            </Form.Group>
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}