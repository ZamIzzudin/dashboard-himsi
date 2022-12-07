import BackButton from '../components/BackButton'
import DisplayLinkCard from '../components/DisplayLinkCard'
import { Modal, Form } from 'react-bootstrap'
import { useState } from 'react'

export default function Links() {
  let plainData = [
    {
      id: 1,
      name: 'Database Himsi',
      url: '/',
    },
    {
      id: 2,
      name: 'Data Dosen',
      url: '/',
    },
    {
      id: 3,
      name: 'Instagram HIMSI',
      url: '/',
    },
    {
      id: 4,
      name: 'AIS',
      url: '/',
    }
  ]
  const [dataLink, setDataLink] = useState(plainData)

  const [showAddModal, setShowAddModal] = useState(false)
  const [linkName, setLinkName] = useState('')
  const [linkURL, setLinkURL] = useState('')

  function addData() {
    const newData = {
      id: Math.floor(Math.random() * 1001),
      name: linkName,
      url: linkURL
    }

    setDataLink([...dataLink, newData])

    setShowAddModal(false)
    setLinkName('')
    setLinkURL('')
  }

  function changeData(data) {
    const newData = dataLink.map((link) => {
      if (data.id === link.id) {
        return data
      }
      return link
    })
    setDataLink(newData)
  }

  function deleteData(id) {
    const newData = dataLink.filter((link) => link.id !== id)
    console.log(newData)
    setDataLink(newData)
  }

  return (
    <main>
      <BackButton />
      <h2>Link</h2>
      <section>
        <button className="edit-btn" onClick={() => setShowAddModal(true)}>Add</button>
      </section>

      <section className="home-link-container">
        {dataLink.map((data) => (
          <DisplayLinkCard key={`link ${data.id}`} link={data} deleteData={deleteData} changeData={changeData} />
        ))}
      </section>

      <Modal
        size="lg"
        centered
        show={showAddModal}
        onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add</Modal.Title>
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
          <button className="edit-btn" onClick={() => addData()}>
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </main>
  );
}
