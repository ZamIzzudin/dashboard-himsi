import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AsyncCreateSlider, AsyncEditSlider } from '../../state/slider/middleware'

import InputImage from '../InputImage'

import '../../styles/components/FormLayout.css'

export default function FormSlider({ showForm, currentData }) {
    const dispatch = useDispatch()

    const [sliderTitle, setSliderTitle] = useState(currentData?.judul_slider)
    const [sliderImage, setSliderImage] = useState(currentData?.gambar_slider.url || null)

    function handleManageSlider(e) {
        e.preventDefault()
        if (currentData !== null) {
            dispatch(AsyncEditSlider({
                _id: currentData._id,
                judul_slider: sliderTitle,
                gambar_slider: sliderImage,
            }))
            showForm(false)
        } else {
            dispatch(AsyncCreateSlider({
                judul_slider: sliderTitle,
                gambar_slider: sliderImage,
            }))
            showForm(false)
        }
    }

    return (
        <Form onSubmit={(e) => handleManageSlider(e)}>
            <InputImage getData={setSliderImage} label="Upload Gambar Slider Information" currentData={sliderImage} />
            <Form.Group>
                <Form.Label>Judul</Form.Label>
                <Form.Control required value={sliderTitle} onChange={(e) => setSliderTitle(e.target.value)} />
            </Form.Group>
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}