import BackButton from '../components/BackButton'
import { Modal, Form } from 'react-bootstrap'
import { useState } from 'react'

import BannerCard from '../components/BannerCard'

export default function Banner() {
  let plainData = [
    {
      id: 1,
      title: 'HIMSI Goes To School',
      desc: 'lorem ipsum dolor sit am lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      id: 2,
      title: 'Reuni Dosen',
      desc: 'lorem ipsum dolor sit am lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      id: 3,
      title: 'Wisuda HIMSI',
      desc: 'lorem ipsum dolor sit am lorem ipsum dolor sit amet, consectetur adipiscing',
    }
  ]
  const [dataBanner, setDataBanner] = useState(plainData)

  const [showAddModal, setShowAddModal] = useState(false)
  const [bannerTitle, setBannerTitle] = useState('')
  const [bannerDesc, setBannerDesc] = useState('')

  function addData() {
    const newData = {
      id: Math.floor(Math.random() * 1001),
      title: bannerTitle,
      desc: bannerDesc
    }

    setDataBanner([...dataBanner, newData])

    setShowAddModal(false)
    setBannerTitle('')
    setBannerDesc('')
  }

  function changeData(data) {
    const newData = dataBanner.map((banner) => {
      if (data.id === banner.id) {
        return data
      }
      return banner
    })
    setDataBanner(newData)
  }

  function deleteData(id) {
    const newData = dataBanner.filter((banner) => banner.id !== id)
    console.log(newData)
    setDataBanner(newData)
  }

  return (
    <main>
      <BackButton />
      <h2>Banner</h2>
      <section>
        <button className="edit-btn" onClick={() => setShowAddModal(true)}>Add</button>
      </section>

      <section className="home-link-container">
        {dataBanner.map((data) => (
          <BannerCard data={data} deleteData={deleteData} changeData={changeData} />
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
          <button className="edit-btn" onClick={() => addData()}>
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </main>
  );
}
