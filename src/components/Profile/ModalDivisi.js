import { Modal, Form } from 'react-bootstrap'
import { useState } from 'react'

import '../../styles/components/FormLayout.css'

export default function ModalDivisi({ show, setShow, getData }) {
    const [namaDivisi, setNamaDivisi] = useState('')

    function addDivisi(e) {
        e.preventDefault()
        const id = Math.floor(Math.random() * 10001)

        const data = {
            id,
            nama: namaDivisi,
            proker: []
        }

        getData(data)

        // Reset Form Fill
        setNamaDivisi('')
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
                <Modal.Title>Tambah Divisi Baru</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => addDivisi(e)} className="form">
                    <Form.Group>
                        <Form.Label>Nama Divisi</Form.Label>
                        <Form.Control required value={namaDivisi} onChange={(e) => setNamaDivisi(e.target.value)} />
                    </Form.Group>
                    <div className="form-cta">
                        <button className="form-submit-button" type="submit">Simpan</button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )
}