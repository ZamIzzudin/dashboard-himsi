import { Form } from 'react-bootstrap'
import { useState } from 'react'

import InputImage from '../InputImage'

import '../../styles/components/FormLayout.css'

export default function FormUpcoming({ addData, editData, currentData }) {
    const [eventTitle, setEventTitle] = useState(currentData?.title)
    const [eventTanggal, setEventTanggal] = useState(currentData?.tanggal)
    const [eventDescription, setEventDescription] = useState(currentData?.description)
    const [eventURL, setEventURL] = useState(currentData?.url)
    const [eventImage, setEventImage] = useState(currentData?.img)


    function handleManageSlider(e) {
        e.preventDefault()
        if (currentData !== null) {
            editData({
                id: currentData.id,
                title: eventTitle,
                description: eventDescription,
                tanggal: eventTanggal,
                img: eventImage,
                url: eventURL
            })
        } else {
            const id = Math.floor(Math.random() * 1001)

            addData({
                id,
                title: eventTitle,
                description: eventDescription,
                tanggal: eventTanggal,
                img: eventImage,
                url: eventURL
            })
        }
    }

    return (
        <Form onSubmit={(e) => handleManageSlider(e)}>
            <InputImage getData={setEventImage} label="Upload Gambar Card Preview" currentData={eventImage} />
            <Form.Group>
                <Form.Label>Judul</Form.Label>
                <Form.Control required value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Tanggal</Form.Label>
                <Form.Control type="date" required value={eventTanggal} onChange={(e) => setEventTanggal(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Deskripsi Singkat</Form.Label>
                <textarea className="semi-text-area" required value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Link</Form.Label>
                <Form.Control required value={eventURL} onChange={(e) => setEventURL(e.target.value)} />
            </Form.Group>
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}