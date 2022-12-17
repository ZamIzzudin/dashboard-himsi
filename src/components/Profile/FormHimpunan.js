import { Form } from 'react-bootstrap'
import { useState } from 'react'

import InputImage from '../InputImage'

import '../../styles/components/FormLayout.css'

export default function FormHimpunan() {
    const [himpunanNama, setHimpunanNama] = useState("Himpunan Mahasiswa Sistem Informasi")
    const [himpunanUniversitas, setHimpunanUniversitas] = useState("Universitas Islam Syarif Hidayatullah Jakarta")
    const [himpunanLogo, setHimpunanLogo] = useState(null)

    function editDataHimpunan(e) {
        e.preventDefault()

        const data = {
            himpinan: himpunanNama,
            universitas: himpunanUniversitas,
            logo: himpunanLogo
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
            <InputImage label="Upload File" getData={setHimpunanLogo} />
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>

    )
}