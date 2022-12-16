import { Form } from 'react-bootstrap'
import { useState, useRef } from 'react'

import '../../styles/components/FormLayout.css'

export default function FormUpcoming({ getData }) {
    const [eventTitle, setEventTitle] = useState('')
    const [eventDescription, setEventDescription] = useState('')
    const [eventURL, setEventURL] = useState('')
    const [eventImage, setEventImage] = useState(null)
    const [showImage, setShowImage] = useState(null)

    const fileInputRef = useRef(null);

    function handleAddSlider(e) {
        e.preventDefault()
        const id = Math.floor(Math.random() * 1001)

        getData({
            id,
            title: eventTitle,
            description: eventDescription,
            img: eventImage,
            url: eventURL
        })
    }

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setEventImage(file);

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
                    <Form.Label className="text-org">Upload Gambar Card Preview</Form.Label>
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
                <Form.Control required value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} />
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