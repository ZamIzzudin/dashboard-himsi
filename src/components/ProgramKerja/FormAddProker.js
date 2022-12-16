import { Form } from 'react-bootstrap'
import { useState, useRef } from 'react'

export default function FormAddProker({ getData, idDivisi }) {
    const [namaProker, setNamaProker] = useState('')
    const [tanggalProker, setTanggalProker] = useState('')
    const [deskripsiProker, setDeskripsiProker] = useState('')
    const [headerImageProker, setHeaderImgProker] = useState(null)
    const [showHeaderImage, setShowHeaderImage] = useState(null)
    const [dokumentasiProker, setDokumentasiProker] = useState(null)
    const [showDokumentasi, setShowDokumentasi] = useState(null)

    const fileInputRef = useRef(null);

    function handleAddProker(e) {
        e.preventDefault();
        const id = Math.floor(Math.random() * 1001)
        getData({
            id,
            nama: namaProker,
            tanggal: tanggalProker,
            deskripsi: deskripsiProker,
            header: headerImageProker || '/.png',
            dokumentasi: dokumentasiProker || '/.png'
        }, idDivisi)
    }

    function handleDrop(e, type) {
        e.preventDefault();

        const file = e.dataTransfer.files[0];
        if (type === 'dokumentasi') {
            setShowDokumentasi(file);
        } else {
            setShowHeaderImage(file);
        }


        if (file !== undefined) {
            const reader = new FileReader();
            reader.onload = function () {
                const { result } = reader;
                const detail = {
                    src: result,
                    name: file.name,
                };

                if (type === 'dokumentasi') {
                    setDokumentasiProker(detail);
                } else {
                    setHeaderImgProker(detail);
                }
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
        <Form onSubmit={(e) => handleAddProker(e)}>
            <Form.Group>
                <div
                    onDrop={(e) => handleDrop(e, 'header')}
                    onDragOver={handleDragOver}
                    className="form-image"
                >
                    <Form.Label className="text-org">Upload Gambar Heading</Form.Label>
                    <input
                        ref={fileInputRef}
                        type="file"
                        style={{ display: 'none' }}
                        onChange={(e) => handleDrop(e, 'header')}
                    />
                    <div className="form-drag-drop-area">{
                        showHeaderImage !== null ? (
                            <img src={showHeaderImage.src} width="100%" alt="uploaded data" />
                        ) : (
                            "Drag n Drop here"
                        )
                    }</div>
                    <button className="form-image-btn" onClick={addImageButton}>Select file</button>
                </div>
            </Form.Group>
            <Form.Group>
                <Form.Label>Judul</Form.Label>
                <Form.Control required value={namaProker} onChange={(e) => setNamaProker(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Tanggal</Form.Label>
                <Form.Control required value={tanggalProker} onChange={(e) => setTanggalProker(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Deskripsi</Form.Label>
                <textarea className="semi-text-area" required value={deskripsiProker} onChange={(e) => setDeskripsiProker(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <div
                    onDrop={(e) => handleDrop(e, 'dokumentasi')}
                    onDragOver={handleDragOver}
                    className="form-image"
                >
                    <Form.Label className="text-org">Upload Dokumentasi</Form.Label>
                    <input
                        ref={fileInputRef}
                        type="file"
                        style={{ display: 'none' }}
                        onChange={(e) => handleDrop(e, 'dokumentasi')}
                    />
                    <div className="form-drag-drop-area">{
                        showDokumentasi !== null ? (
                            <img src={showDokumentasi.src} width="100%" alt="uploaded data" />
                        ) : (
                            "Drag n Drop here"
                        )
                    }</div>
                    <button className="form-image-btn" onClick={addImageButton}>Select file</button>
                </div>
            </Form.Group>
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}