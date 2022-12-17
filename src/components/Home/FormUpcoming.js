import { Form } from 'react-bootstrap'
import { useState } from 'react'

import InputImage from '../InputImage'

import '../../styles/components/FormLayout.css'

export default function FormUpcoming({ getData }) {
    const [eventTitle, setEventTitle] = useState('')
    const [eventTanggal, setEventTanggal] = useState('')
    const [eventDescription, setEventDescription] = useState('')
    const [eventURL, setEventURL] = useState('')
    const [eventImage, setEventImage] = useState(null)


    function handleAddSlider(e) {
        e.preventDefault()
        const id = Math.floor(Math.random() * 1001)

        getData({
            id,
            title: eventTitle,
            description: eventDescription,
            tanggal: eventTanggal,
            img: eventImage,
            url: eventURL
        })
    }

    return (
        <Form onSubmit={(e) => handleAddSlider(e)}>
            <InputImage getData={setEventImage} label="Upload Gambar Card Preview" />
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