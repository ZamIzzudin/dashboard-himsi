import { Form } from 'react-bootstrap'
import { useState } from 'react'

import InputImage from '../InputImage'

import '../../styles/components/FormLayout.css'

export default function FormSlider({ addData, editData, currentData }) {
    const [sliderTitle, setSliderTitle] = useState(currentData?.title)
    const [sliderURL, setSliderURL] = useState(currentData?.url)
    const [sliderImage, setSliderImage] = useState(currentData?.img)

    function handleManageSlider(e) {
        e.preventDefault()
        if (currentData !== null) {
            editData({
                id: currentData.id,
                title: sliderTitle,
                img: sliderImage,
                url: sliderURL
            })
        } else {
            const id = Math.floor(Math.random() * 1001)
            addData({
                id,
                title: sliderTitle,
                img: sliderImage,
                url: sliderURL
            })
        }
    }

    return (
        <Form onSubmit={(e) => handleManageSlider(e)}>
            <InputImage getData={setSliderImage} label="Upload Gambar Slider Information" currentData={sliderImage} />
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