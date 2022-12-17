import { Form } from 'react-bootstrap'
import { useState } from 'react'

import InputImage from '../InputImage'

import '../../styles/components/FormLayout.css'

export default function FormSlider({ getData }) {
    const [sliderTitle, setSliderTitle] = useState('')
    const [sliderURL, setSliderURL] = useState('')
    const [sliderImage, setSliderImage] = useState(null)

    function handleAddSlider(e) {
        e.preventDefault()
        const id = Math.floor(Math.random() * 1001)

        getData({
            id,
            title: sliderTitle,
            img: sliderImage,
            url: sliderURL
        })
    }

    return (
        <Form onSubmit={(e) => handleAddSlider(e)}>
            <InputImage getData={setSliderImage} label="Upload Gambar Slider Information" />
            <Form.Group>
                <Form.Label>Judul</Form.Label>
                <Form.Control required value={sliderTitle} onChange={(e) => setSliderTitle(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Link</Form.Label>
                <Form.Control required value={sliderURL} onChange={(e) => setSliderURL(e.target.value)} />
            </Form.Group>
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}