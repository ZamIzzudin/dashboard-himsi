import { Form } from 'react-bootstrap'
import { useState, useRef, useEffect } from 'react'

import { ReactComponent as FileOrg } from '../assets/icons/file-org.svg'
import { ReactComponent as Delete } from '../assets/icons/Delete.svg'

import '../styles/components/FormLayout.css'

export default function InputManyImage({ getData, label, currentData }) {
    const [showImage, setShowImage] = useState(currentData?.detail || currentData || [])

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
                file: file
            };
            setShowImage([...showImage, detail]);
            getData([
                ...showImage,
                file
            ])
        };
        reader.readAsDataURL(file);
    }

    function deleteImage(index) {
        const deleted = showImage.filter((image, idx) => index !== idx)
        setShowImage(deleted);
    }

    useEffect(() => {
        setShowImage(currentData?.detail || currentData || null)
    }, [currentData])

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
                {showImage.length > 0 ? (
                    <>
                        {showImage?.map((image, index) => (
                            <div className="image-display-card">
                                <FileOrg />
                                <span>
                                    {image?.name || image?.url}
                                </span>
                                <button onClick={() => deleteImage(index)}>
                                    <Delete />
                                </button>
                            </div>
                        ))}
                    </>

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