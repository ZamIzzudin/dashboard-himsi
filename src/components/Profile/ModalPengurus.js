import { Modal, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'

import InputImage from '../InputImage'

import '../../styles/components/FormLayout.css'

export default function ModalPengurus({ show, setShow, addData, editData, currentData }) {
    const [namaPengurus, setNamaPengurus] = useState(currentData?.nama)
    const [jabatanPengurus, setJabatanPengurus] = useState(currentData?.jabatan)
    const [socmedPengurus, setSocmedPengurus] = useState(currentData?.socmed)
    const [imagePengurus, setImagePengurus] = useState(currentData?.image)

    function addPengurus(e) {
        e.preventDefault()
        if (currentData !== null) {
            const data = {
                id: currentData.id,
                nama: namaPengurus,
                jabatan: jabatanPengurus,
                socmed: socmedPengurus,
                image: imagePengurus,
            }

            editData(data)
        } else {
            const id = Math.floor(Math.random() * 10001)

            const data = {
                id,
                nama: namaPengurus,
                jabatan: jabatanPengurus,
                socmed: socmedPengurus,
                image: imagePengurus,
            }

            addData(data)
        }

        // Reset Form Fill
        setNamaPengurus('')
        setJabatanPengurus('Ketua Bidang')
        setSocmedPengurus('')
        setImagePengurus(null)
        setShow(false)
    }

    useEffect(() => {
        setNamaPengurus(currentData?.nama)
        setJabatanPengurus(currentData?.jabatan)
        setSocmedPengurus(currentData?.socmed)
        setImagePengurus(currentData?.image)
    }, [currentData])

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
                        <InputImage getData={setImagePengurus} label="Upload Foto Pengurus" currentData={imagePengurus} />
                    </Form.Group>
                    <div className="form-cta">
                        <button className="form-submit-button" type="submit">Simpan</button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}