import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AsyncCreatePartner, AsyncEditPartner } from '../../state/partner/middleware'

import InputImage from '../InputImage'

import '../../styles/components/FormLayout.css'

export default function FormPartner({ showForm, currentData }) {
    const dispatch = useDispatch()

    const [partnerName, setPartnerName] = useState(currentData?.nama_partner)
    const [partnerImage, setPartnerImage] = useState(currentData?.logo_partner.url || null)

    function handleAddSlider(e) {
        e.preventDefault()
        if (currentData !== null) {
            dispatch(AsyncEditPartner({
                _id: currentData._id,
                nama_partner: partnerName,
                logo_partner: partnerImage,
            }))
            showForm(false)
        } else {
            dispatch(AsyncCreatePartner({
                nama_partner: partnerName,
                logo_partner: partnerImage,
            }))
            showForm(false)
        }
    }

    return (
        <Form onSubmit={(e) => handleAddSlider(e)}>
            <InputImage getData={setPartnerImage} label="Upload Logo Partner *" currentData={partnerImage} />
            <Form.Group>
                <Form.Label>Nama <span className="required">*</span></Form.Label>
                <Form.Control required placeholder='Brand Partner' value={partnerName} onChange={(e) => setPartnerName(e.target.value)} />
            </Form.Group>
            <div className="form-cta gap-3">
                <button onClick={() => showForm(false)} className="form-cancel-button" type="button">Cancel</button>
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}