import { Form } from 'react-bootstrap'
import { useState } from 'react'

import InputImage from '../InputImage'

import '../../styles/components/FormLayout.css'

export default function FormAddProker({ getData, idDivisi }) {
    const [namaProker, setNamaProker] = useState('')
    const [tanggalProker, setTanggalProker] = useState('')
    const [deskripsiProker, setDeskripsiProker] = useState('')
    const [headerImageProker, setHeaderImgProker] = useState(null)
    const [dokumentasiProker, setDokumentasiProker] = useState(null)

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

    return (
        <Form onSubmit={(e) => handleAddProker(e)}>
            <InputImage getData={setHeaderImgProker} label="Upload Gambar Heading" />
            <Form.Group>
                <Form.Label>Judul</Form.Label>
                <Form.Control required value={namaProker} onChange={(e) => setNamaProker(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Tanggal</Form.Label>
                <Form.Control type="date" required value={tanggalProker} onChange={(e) => setTanggalProker(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Deskripsi</Form.Label>
                <textarea className="semi-text-area" required value={deskripsiProker} onChange={(e) => setDeskripsiProker(e.target.value)} />
            </Form.Group>
            <InputImage getData={setDokumentasiProker} label="Upload Dokumentasi" />
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}