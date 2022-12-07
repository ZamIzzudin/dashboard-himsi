import { Modal, Form } from 'react-bootstrap'

import { useState } from 'react'

import pict from '../assets/zeta.jpg'

import '../styles/components/DisplayLinkCard.css'

export default function DisplayLinkCard({ link, changeData, deleteData }) {

    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)

    const [linkName, setLinkName] = useState(link.name)
    const [linkURL, setLinkURL] = useState(link.url)


    function handleEditLink() {
        changeData({
            id: link.id,
            name: linkName,
            url: linkURL,
        })
        setShowEditModal(false)
    }

    function handleDeleteLink() {
        deleteData(link.id)
        setShowDeleteModal(false)
    }

    return (
        <div className="link-card">
            <img src={pict} alt="link logo" height="100" />
            <span>{link.name}</span>
            <span>{link.url}</span>
            <div className="container-cta">
                <button className="delete-btn" onClick={() => setShowDeleteModal(true)}>Delete</button>
                <button className="edit-btn" onClick={() => setShowEditModal(true)}>Edit</button>
            </div>

            <Modal
                size="lg"
                centered
                show={showDeleteModal}
                onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure want to delete link "{link.name}"?</Modal.Body>
                <Modal.Footer>
                    <button className="delete-btn" onClick={() => handleDeleteLink()}>
                        Delete
                    </button>
                </Modal.Footer>
            </Modal>

            <Modal
                size="lg"
                centered
                show={showEditModal}
                onHide={() => setShowEditModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Link Name</Form.Label>
                            <Form.Control value={linkName} onChange={(e) => { setLinkName(e.target.value) }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Link URL</Form.Label>
                            <Form.Control value={linkURL} onChange={(e) => { setLinkURL(e.target.value) }} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="edit-btn" onClick={() => handleEditLink()}>
                        Edit
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}