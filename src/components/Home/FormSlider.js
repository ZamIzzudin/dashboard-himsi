import { Form } from 'react-bootstrap'
import { useState, useRef } from 'react'

import '../../styles/components/FormLayout.css'

export default function FormSlider({ getData }) {
    const [sliderTitle, setSliderTitle] = useState('')
    const [sliderURL, setSliderURL] = useState('')
    const [sliderImage, setSliderImage] = useState(null)
    const [showImage, setShowImage] = useState(null)
    const fileInputRef = useRef(null);

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

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setSliderImage(file);

        if (file !== undefined) {
            const reader = new FileReader();
            reader.onload = function () {
                const { result } = reader;
                const detail = {
                    src: result,
                    name: file.name,
                };

                setShowImage(detail);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const addImageButton = () => {
        fileInputRef.current.click();
    };

    return (
        <Form onSubmit={(e) => handleAddSlider(e)}>
            <Form.Group>
                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="form-image"
                >
                    <Form.Label className="text-org">Upload Gambar Slider Information</Form.Label>
                    <input
                        ref={fileInputRef}
                        type="file"
                        style={{ display: 'none' }}
                        onChange={handleDrop}
                    />
                    <div className="form-drag-drop-area">{
                        showImage !== null ? (
                            <img src={showImage.src} width="100%" alt="uploaded data" />
                        ) : (
                            "Drag n Drop here"
                        )
                    }</div>
                    <button className="form-image-btn" onClick={addImageButton}>Select file</button>
                </div>
            </Form.Group>
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