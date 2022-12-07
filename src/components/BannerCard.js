import { Modal, Form } from 'react-bootstrap'
import { useState } from 'react'

import '../styles/components/BannerCard.css'

export default function BannerCard({ data, changeData, deleteData }) {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)

    const [bannerTitle, setBannerTitle] = useState(data.title)
    const [bannerDesc, setBannerDesc] = useState(data.desc)

    function handleEditLink() {
        changeData({
            id: data.id,
            title: bannerTitle,
            desc: bannerDesc,
        })
        setShowEditModal(false)
    }

    function handleDeleteLink() {
        deleteData(data.id)
        setShowDeleteModal(false)
    }

    return (
        <div className="banner-card">
            <span><b>{data.title}</b></span>
            <p>{data.desc}</p>
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
                <Modal.Body>Are you sure want to delete banner "{data.title}"?</Modal.Body>
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
                            <Form.Label>Banner Title</Form.Label>
                            <Form.Control value={bannerTitle} onChange={(e) => { setBannerTitle(e.target.value) }} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Banner Desc</Form.Label>
                            <Form.Control value={bannerDesc} onChange={(e) => { setBannerDesc(e.target.value) }} />
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