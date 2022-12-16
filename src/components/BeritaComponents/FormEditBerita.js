import { Form } from 'react-bootstrap'
import { useState } from 'react'
import '../../styles/components/FormLayout.css'
import { useRef } from 'react'

export default function FormEditBerita({ getData }) {
    const [judulBerita, setJudulBerita] = useState('')
    const [tanggalBerita, setTanggalBerita] = useState('')
    const [gambarHeadingBerita, setGambarHeadingBerita] = useState(null)
    const [penulisBerita, setPenulisBerita] = useState('')
    const [kategoriBerita, setKategoriBerita] = useState('')
    const [isiBerita, setIsiBerita] = useState('')
    const [uploadFileBerita, setUploadFileBerita] = useState(null)
    const [showImage, setShowImage] = useState(null);

    const fileInputRef = useRef(null);

    function handleAddBerita(e) {
        e.preventDefault()
        const id = Math.floor(Math.random() * 1001)

        getData({
            id,
            gambarHeading: gambarHeadingBerita,
            tanggal: tanggalBerita,
            penulis: penulisBerita,
            kategori: kategoriBerita,
            judul: judulBerita,
            isi: isiBerita,
            uploadFile: uploadFileBerita
        })

        // setLinkJudul('')
        // setLinkTanggal('')
        // setLinkId('')
    }

    const handleDropHeading = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setGambarHeadingBerita(file);

        if(file !== undefined) {
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
    const handleDropUploadGambar = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        setUploadFileBerita(file);

        if(file !== undefined) {
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
    }

    return (
        <Form onSubmit={(e) => handleAddBerita(e)}>
            <Form.Group>
                <div
                    onDrop = {handleDropHeading}
                    onDragOver = {handleDragOver}
                    className="form-image"
                >
                    <Form.Label className='text-org'>Upload Gambar Heading</Form.Label>
                    <input
                        ref={fileInputRef}
                        type="file"
                        style={{display: 'none'}}
                        onChange={handleDropHeading}
                    />    

                    <div className="form-drag-drop-area">
                        {
                            showImage !== null ? (
                                <img src={showImage.src} width="100%" alt='uploaded data' />
                            ) : (
                                "Drag n Drop here"
                            )
                        }
                    </div>
                    <button className='form-image-btn' onClick={addImageButton}>Upload Now</button>
                    </div>
            </Form.Group>
            <Form.Group>
                <Form.Label>Tanggal</Form.Label>
                <Form.Control required value={tanggalBerita} type="date" onChange={(e) => setTanggalBerita(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Penulis</Form.Label>
                <Form.Control required value={penulisBerita} onChange={(e) => setPenulisBerita(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Kategori</Form.Label>
                <Form.Select required value={kategoriBerita} onChange={(e) => setKategoriBerita(e.target.value)}>
                    <option value = "1">1</option>
                    <option value = "2">2</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Judul</Form.Label>
                <Form.Control required value={judulBerita} onChange={(e) => setJudulBerita(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Isi</Form.Label>
                <textarea className="semi-text-area" required value={isiBerita} onChange={(e) => setIsiBerita(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Upload File</Form.Label>
                <div
                    onDrop = {handleDropUploadGambar}
                    onDragOver = {handleDragOver}
                    className="form-image"
                >
                    <Form.Label className='text-org'>Upload Gambar Berita</Form.Label>
                    <input
                        ref={fileInputRef}
                        type="file"
                        style={{display: 'none'}}
                        onChange={handleDropUploadGambar}
                    />    

                    <div className="form-drag-drop-area">
                        {
                            showImage !== null ? (
                                <img src={showImage.src} width="100%" alt='uploaded data' />
                            ) : (
                                "Drag n Drop here"
                            )
                        }
                    </div>
                    <button className='form-image-btn' onClick={addImageButton}>Upload Now</button>
                    </div>
            </Form.Group>
            <Form.Group>
                <Form.Label>Link</Form.Label>
                <Form.Control required value={judulBerita} onChange={(e) => setJudulBerita(e.target.value)} />
            </Form.Group>
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}