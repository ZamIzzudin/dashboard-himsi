import { Modal, Form } from 'react-bootstrap'
import { useState } from 'react'

export default function FormAddBerita({ showAddModal, setShowAddModal, getData }) {
    const [linkJudul, setLinkJudul] = useState('')
    const [linkTanggal, setLinkTanggal] = useState('')
    const [linkId, setLinkId] = useState('')

    function handleAddBerita(e) {
        e.preventDefault()
        // const id = Math.floor(Math.random() * 1001)

        getData({
            id: linkId,
            judul: linkJudul,
            tanggal: linkTanggal,
        })

        setLinkJudul('')
        setLinkTanggal('')
        setLinkId('')
    }

    return (
        <Modal
            size="md"
            centered
            show={showAddModal}
            onHide={() => setShowAddModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Berita</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => handleAddBerita(e)} className="form">
                    <Form.Control placeholder="Nomor" required value={linkId} onChange={(e) => setLinkId(e.target.value)} />
                    <Form.Control placeholder="Judul" required value={linkJudul} onChange={(e) => setLinkJudul(e.target.value)} />
                    <Form.Control placeholder="Tanggal" type="date" required value={linkTanggal} onChange={(e) => setLinkTanggal(e.target.value)} />
                    <button type="submit">Add</button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}