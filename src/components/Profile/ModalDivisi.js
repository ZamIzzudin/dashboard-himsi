import { Modal, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'

import '../../styles/components/FormLayout.css'

export default function ModalDivisi({ show, setShow, addData, editData, currentData }) {
    const [namaDivisi, setNamaDivisi] = useState(currentData?.nama)

    function addDivisi(e) {
        e.preventDefault()
        if (currentData !== null) {
            const data = {
                id: currentData.id,
                nama: namaDivisi,
                proker: currentData.proker
            }

            editData(data)
        } else {
            const id = Math.floor(Math.random() * 10001)

            const data = {
                id,
                nama: namaDivisi,
                proker: []
            }

            addData(data)
        }

        // Reset Form Fill
        setNamaDivisi('')
        setShow(false)
    }

    useEffect(() => {
        setNamaDivisi(currentData?.nama)
    }, [currentData])

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