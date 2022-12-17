import { Form } from 'react-bootstrap'
import { useState, useRef } from 'react'

import '../styles/components/FormLayout.css'

export default function InputImage({ getData, label }) {
    const [showImage, setShowImage] = useState(null)

    const fileInputRef = useRef(null);

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];

        if (file !== undefined) {
            const reader = new FileReader();
            reader.onload = function () {
                const { result } = reader;
                const detail = {
                    src: result,
                    name: file.name,
                };

                setShowImage(detail);
                getData({
                    file,
                    detail,
                })
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
        <Form.Group>
            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="form-image"
            >
                <Form.Label className="text-org">{label}</Form.Label>
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
    )
}