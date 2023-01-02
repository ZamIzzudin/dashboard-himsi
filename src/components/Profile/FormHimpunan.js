import { Form } from 'react-bootstrap'
import { useState } from 'react'

import InputImage from '../InputImage'

import '../../styles/components/FormLayout.css'

export default function FormHimpunan({ currentData }) {
    const [himpunanNama, setHimpunanNama] = useState(currentData?.nama_himpunan)
    const [himpunanUniversitas, setHimpunanUniversitas] = useState(currentData?.nama_universitas)
    const [himpunanLogo, setHimpunanLogo] = useState(currentData?.logo_himpunan.url)
    const [gambarStruktur, setGambarStruktur] = useState(currentData?.gambar_struktur.url)

    function editDataHimpunan(e) {
        e.preventDefault()

        const data = {
            nama_himpunan: himpunanNama,
            nama_Universitas: himpunanUniversitas,
            logo_himpunan: himpunanLogo,
            gambar_struktur: gambarStruktur
        }
        console.log(data)
    }

    return (
        <Form onSubmit={(e) => editDataHimpunan(e)}>
            <Form.Group>
                <Form.Label>Nama Himpunan</Form.Label>
                <Form.Control required value={himpunanNama} onChange={(e) => setHimpunanNama(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Nama Universitas</Form.Label>
                <Form.Control required value={himpunanUniversitas} onChange={(e) => setHimpunanUniversitas(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Logo Himpunan</Form.Label>
                <InputImage label="Upload File" getData={setHimpunanLogo} currentData={himpunanLogo} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Gambar Struktur</Form.Label>
                <InputImage label="Upload File" getData={setGambarStruktur} currentData={gambarStruktur} />
            </Form.Group>
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>

    )
}