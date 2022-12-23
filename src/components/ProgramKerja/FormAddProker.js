import { Form } from 'react-bootstrap'
import { useState } from 'react'

import { CKEditor } from 'ckeditor4-react';
import InputImage from '../InputImage'

import '../../styles/components/FormLayout.css'

export default function FormAddProker({ addData, editData, idDivisi, currentData }) {
    const [namaProker, setNamaProker] = useState(currentData?.nama)
    const [tanggalProker, setTanggalProker] = useState(currentData?.tanggal)
    const [deskripsiProker, setDeskripsiProker] = useState(currentData?.deskripsi)
    const [headerImageProker, setHeaderImgProker] = useState(currentData?.header)
    const [dokumentasiProker, setDokumentasiProker] = useState(currentData?.dokumentasi)

    function handleAddProker(e) {
        e.preventDefault();
        if (currentData !== null) {
            editData({
                id: currentData.id,
                nama: namaProker,
                tanggal: tanggalProker,
                deskripsi: deskripsiProker,
                header: headerImageProker || '/.png',
                dokumentasi: dokumentasiProker || '/.png'
            }, idDivisi)
        } else {
            const id = Math.floor(Math.random() * 1001)
            addData({
                id,
                nama: namaProker,
                tanggal: tanggalProker,
                deskripsi: deskripsiProker,
                header: headerImageProker || '/.png',
                dokumentasi: dokumentasiProker || '/.png'
            }, idDivisi)
        }

    }

    return (
        <Form onSubmit={(e) => handleAddProker(e)}>
            <InputImage getData={setHeaderImgProker} label="Upload Gambar Heading" currentData={headerImageProker} />
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
                <CKEditor skin="Kama" value={deskripsiProker} onChange={(e) => setDeskripsiProker(e.target.value)} />
            </Form.Group>
            <InputImage getData={setDokumentasiProker} label="Upload Dokumentasi" currentData={dokumentasiProker} />
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}