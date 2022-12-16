import React from "react";
import { useState } from "react";
import FormAddBerita from "./FormAddBerita";

const ShowBerita = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const plainData = [
    {
      id : 1,
      tanggal: '15-12-2022',
      judul: 'Multicollege Department to Bridge'
    },
    {
      id : 2,
      tanggal: '15-12-2022',
      judul: 'Judul Artikel'
    },
    {
      id : 3,
      tanggal: '15-12-2022',
      judul: 'Judul Artikel'
    },
    {
      id : 4,
      tanggal: '15-12-2022',
      judul: 'Judul Artikel'
    },
  ]

  const [dataLink, setDataLink] = useState(plainData);

  function addData(data) {
    setDataLink([...dataLink, data])
    setShowAddModal(false)
  }

  function deleteData(id) {
    const newData = dataLink.filter((link) => link.id !== id)
    setDataLink(newData)
  }
  return (
      <section>
          <section className="content-section mb-5">
            <div className="section-header-container">
              <h4 className="section-header">Berita</h4>
              <button onClick={() => setShowAddModal(true)} className="section-add-btn">+</button>
            </div>
            <div className="section-body">
              <table>
                <tr>
                  <th>No</th>
                  <th>Tanggal</th>
                  <th>Judul</th>
                  <th className="text-center">Action</th>
                </tr>
                {dataLink.map(link => (
                  <tr>
                    <td>{link.id}</td>
                    <td>{link.tanggal}</td>
                    <td>{link.judul}</td>
                    <td className="table-cta">
                      <div className="table-cta-container">
                        <button onClick={() => deleteData(link.id)} className="section-delete-btn">Delete</button>
                        <button className="section-edit-btn ">Edit</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </section>

          <FormAddBerita showAddModal={showAddModal} setShowAddModal={setShowAddModal} getData={addData} />
      </section>
  );
}

export default ShowBerita;