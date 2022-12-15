import { Modal, Form } from 'react-bootstrap'
import { useState } from 'react'

export default function FormAddLink({ showAddModal, setShowAddModal, getData }) {
    const [linkName, setLinkName] = useState('')
    const [linkURL, setLinkURL] = useState('')

    function handleAddFAQ(e) {
        e.preventDefault()
        const id = Math.floor(Math.random() * 1001)

        getData({
            id,
            name: linkName,
            url: linkURL,
        })

        setLinkName('')
        setLinkURL('')
    }

    return (
        <Modal
            size="md"
            centered
            show={showAddModal}
            onHide={() => setShowAddModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Link</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => handleAddFAQ(e)} className="form">
                    <Form.Control placeholder="Name" required value={linkName} onChange={(e) => setLinkName(e.target.value)} />
                    <Form.Control placeholder="URL" required value={linkURL} onChange={(e) => setLinkURL(e.target.value)} />
                    <button type="submit">Add</button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}