import { Modal, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'

import '../../styles/components/FormLayout.css'

export default function ModalDivisi({ show, setShow, addData, editData, currentData }) {
    const [namaDivisi, setNamaDivisi] = useState('')

    function addDivisi(e) {
        e.preventDefault()
        if (currentData !== null) {
            const data = {
                _id: currentData._id,
                nama_divisi: namaDivisi,
            }

            editData(data)
        } else {
            const data = {
                nama_divisi: namaDivisi,
            }

            addData(data)
        }

        // Reset Form Fill
        setNamaDivisi('')
        setShow(false)
    }

    useEffect(() => {
        setNamaDivisi(currentData?.nama_divisi || '')
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