import FormAddLink from './FormAddLink'
import { useState } from 'react'

export default function Links() {
  const [showAddModal, setShowAddModal] = useState(false)

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

  function addData(data) {
    setDataLink([...dataLink, data])
    setShowAddModal(false)
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
    setDataLink(newData)
  }

  return (
    <section>
      <section className="content-section mb-5">
        <div className="section-header-container">
          <h4 className="section-header">E-Layanan Mahasiswa</h4>
          <button onClick={() => setShowAddModal(true)} className="section-add-btn">+</button>
        </div>
        <div className="section-body">
          <table>
            <tr>
              <th>Name</th>
              <th>URL</th>
              <th className="text-center">Action</th>
            </tr>
            {dataLink.map(link => (
              <tr>
                <td>{link.name}</td>
                <td>{link.url}</td>
                <td className="table-cta">
                  <div className="table-cta-container">
                    <button onClick={() => deleteData(link.id)} className="section-delete-btn">Delete</button>
                    <button className="section-edit-btn">Edit</button>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section >

      <section className="content-section mb-5">
        <div className="section-header-container">
          <h4 className="section-header">Database Materi</h4>
          <button onClick={() => setShowAddModal(true)} className="section-add-btn">+</button>
        </div>
        <div className="section-body">
          <table>
            <tr>
              <th>Name</th>
              <th>URL</th>
              <th className="text-center">Action</th>
            </tr>
            {dataLink.map(link => (
              <tr>
                <td>{link.name}</td>
                <td>{link.url}</td>
                <td className="table-cta">
                  <div className="table-cta-container">
                    <button onClick={() => deleteData(link.id)} className="section-delete-btn">Delete</button>
                    <button className="section-edit-btn">Edit</button>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section >

      <FormAddLink showAddModal={showAddModal} setShowAddModal={setShowAddModal} getData={addData} />

    </section>
  );
}
