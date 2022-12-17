import { Form } from 'react-bootstrap'
import { useState, useRef } from 'react'

import '../styles/components/FormLayout.css'

export default function InputImage({ getData, label, currentData }) {
    const [showImage, setShowImage] = useState(currentData?.detail)

    const fileInputRef = useRef(null);

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const addImageButton = () => {
        fileInputRef.current.click();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file !== undefined) {
            handleFile(file)
        }
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file !== undefined) {
            handleFile(file)
        }
    };

    function handleFile(file) {
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

    function deleteImage() {
        setShowImage(undefined);
    }

    return (
        <Form.Group>
            <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="form-image"
            >
                <Form.Label className="text-org">{label}</Form.Label>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                />
                {showImage !== undefined ? (
                    <div className="image-display-card">
                        <span>
                            <img src={showImage?.src} width="10%" alt="uploaded data" />
                            {showImage?.name}
                        </span>
                        <button onClick={() => deleteImage()}>X</button>
                    </div>
                ) : (
                    <div className="non-image-display-card" onClick={addImageButton}>
                        <span>Drag n Drop here</span>
                        <span>Or</span>
                        <span className="text-browse">Browse</span>
                    </div>
                )}
                <button type="button" className="form-image-btn" onClick={addImageButton}>Select file</button>
            </div>
        </Form.Group>
    )
}