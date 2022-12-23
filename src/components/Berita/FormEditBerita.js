import { Form, InputGroup } from 'react-bootstrap'
import { useState } from 'react'

import { CKEditor } from 'ckeditor4-react';
import InputImage from '../InputImage'

import '../../styles/components/FormLayout.css'

export default function FormEditBerita({ getData, currentData }) {
    const [judulBerita, setJudulBerita] = useState(currentData?.judul)
    const [tanggalBerita, setTanggalBerita] = useState(currentData?.tanggal)
    const [penulisBerita, setPenulisBerita] = useState(currentData?.penulis)
    const [kategoriBerita, setKategoriBerita] = useState(currentData?.kategori || [])
    const [isiBerita, setIsiBerita] = useState(currentData?.isi)
    const [linkBerita, setLinkBerita] = useState(currentData?.link)
    const [gambarHeadingBerita, setGambarHeadingBerita] = useState(currentData?.gambarHeading)
    const [uploadFileBerita, setUploadFileBerita] = useState(currentData?.uploadFile)

    const [kategori, setKategori] = useState('')

    function handleAddBerita(e) {
        e.preventDefault()

        getData({
            id: currentData.id,
            gambarHeading: gambarHeadingBerita,
            tanggal: tanggalBerita,
            penulis: penulisBerita,
            kategori: kategoriBerita,
            judul: judulBerita,
            isi: isiBerita,
            uploadFile: uploadFileBerita,
            link: linkBerita
        })
    }

    function addKategori() {
        setKategoriBerita([...kategoriBerita, kategori])
        setKategori('')
    }

    function deleteKategori(data) {
        const newData = kategoriBerita.filter(item => item !== data)
        setKategoriBerita(newData)
    }

    return (
        <Form onSubmit={(e) => handleAddBerita(e)}>
            <Form.Group>
                <InputImage getData={setGambarHeadingBerita} label="Upload Gambar Heading" currentData={gambarHeadingBerita} />
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
                <div className="display-list-bubble">
                    {kategoriBerita.map(item => (
                        <div className="bubble-item">
                            {item}
                            <button onClick={() => deleteKategori(item)}>X</button>
                        </div>
                    ))}
                </div>
                <InputGroup>
                    <Form.Control value={kategori} onChange={(e) => setKategori(e.target.value)} />
                    <button type="button" className="section-add-btn" onClick={() => addKategori()}>+</button>
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <Form.Label>Judul</Form.Label>
                <Form.Control required value={judulBerita} onChange={(e) => setJudulBerita(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Isi</Form.Label>
                <CKEditor skin="Kama" value={isiBerita} onChange={(e) => setIsiBerita(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Upload File</Form.Label>
                <InputImage getData={setUploadFileBerita} label="Upload Gambar Berita" currentData={uploadFileBerita} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Link</Form.Label>
                <Form.Control required value={linkBerita} onChange={(e) => setLinkBerita(e.target.value)} />
            </Form.Group>
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}