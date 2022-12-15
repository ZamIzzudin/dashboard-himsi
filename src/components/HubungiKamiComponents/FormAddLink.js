import { Modal, Form, Col, Row, Button } from 'react-bootstrap'

import { useState } from 'react'

export default function FormAddLink({ showAddModal, setShowAddModal, getData }) {
    const [linkTitle, setLinkTitle] = useState('')
    const [linkURL, setLinkURL] = useState('')

    function handleAddLink(e) {
        e.preventDefault()
        const id = Math.floor(Math.random() * 1001)

        getData({
            id,
            question: linkTitle,
            answer: linkURL
        })

        setLinkTitle('')
        setLinkURL('')
    }

    return (
        <Modal
            size="lg"
            centered
            show={showAddModal}
            onHide={() => setShowAddModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Link</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => handleAddLink(e)}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Judul</Form.Label>
                                <Form.Control required value={linkTitle} onChange={(e) => setLinkTitle(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label>URL</Form.Label>
                                <Form.Control required value={linkURL} onChange={(e) => setLinkURL(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit">Add</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}