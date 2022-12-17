import { Modal, Form } from 'react-bootstrap'
import { useState } from 'react'

import InputImage from '../InputImage'

import '../../styles/components/FormLayout.css'

export default function ModalPengurus({ show, setShow, getData }) {
    const [namaPengurus, setNamaPengurus] = useState('')
    const [jabatanPengurus, setJabatanPengurus] = useState('Ketua Bidang')
    const [socmedPengurus, setSocmedPengurus] = useState('')
    const [imagePengurus, setImagePengurus] = useState(null)
    function addPengurus(e) {
        e.preventDefault()
        const id = Math.floor(Math.random() * 10001)

        const data = {
            id,
            nama: namaPengurus,
            jabatan: jabatanPengurus,
            socmed: socmedPengurus,
            image: imagePengurus,
        }

        getData(data)

        // Reset Form Fill
        setNamaPengurus('')
        setJabatanPengurus('Ketua Bidang')
        setSocmedPengurus('')
        setImagePengurus(null)
        setShow(false)
    }

    return (
        <Modal
            size="lg"
            centered
            show={show}
            onHide={() => setShow(false)}
        >
            <Modal.Header>
                <Modal.Title>Tambah Pengurus Baru</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => addPengurus(e)} className="form">
                    <Form.Group>
                        <Form.Label>Nama Pengurus</Form.Label>
                        <Form.Control required value={namaPengurus} onChange={(e) => setNamaPengurus(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Jabatan</Form.Label>
                        <Form.Select value={jabatanPengurus} onChange={(e) => setJabatanPengurus(e.target.value)}>
                            <option value="Ketua Bidang">Ketua Bidang</option>
                            <option value="Wakil Bidang">Wakil Bidang</option>
                            <option value="Bendahara Bidang">Bendahara Bidang</option>
                            <option value="Sekertaris Bidang">Sekertaris Bidang</option>
                            <option value="Ketua Divisi">Ketua Divisi</option>
                            <option value="Staff">Staff</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Social Media (Instargram)</Form.Label>
                        <Form.Control required value={socmedPengurus} onChange={(e) => setSocmedPengurus(e.target.value)} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Foto Pengurus</Form.Label>
                        <InputImage getData={setImagePengurus} label="Upload Foto Pengurus" />
                    </Form.Group>
                    <div className="form-cta">
                        <button className="form-submit-button" type="submit">Simpan</button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}