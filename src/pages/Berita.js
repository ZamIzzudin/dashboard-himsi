import React from "react";
import { useState } from "react";
import FormAddBerita from "../components/BeritaComponents/FormAddBerita";
import FormEditBerita from "../components/BeritaComponents/FormEditBerita";

const Berita = () => {
  const [showAddBeritaForm, setShowAddBeritaForm] = useState(false);
  const [showEditBeritaForm, setShowEditBeritaForm] = useState(false);

  const [listDataBerita, setListDataBerita] = useState([]);

  const [selectedData, setSelectedData] = useState(null)

  function handleAddBerita(data) {
    setListDataBerita([...listDataBerita, data])
    setShowAddBeritaForm(false)
  }

  function handleDeleteBerita(id) {
    const newData = listDataBerita.filter((berita) => berita.id !== id)
    setListDataBerita(newData)
  }

  function handleEditBerita(data) {
    const newData = listDataBerita.map((berita) => {
      if (berita.id === data.id) {
        return data
      }
      return berita
    })
    setListDataBerita(newData)
    setSelectedData(null)
    setShowEditBeritaForm(false)
  }

  if (showAddBeritaForm) {
    return (
      <main>
        <h1 className="page-header">Tambah Berita</h1>
        <section className="content-section">
          <div className="section-header-container">
            <h4 className="section-header">Tambah Berita</h4>
            <button onClick={() => setShowAddBeritaForm(false)} className="section-add-btn">-</button>
          </div>
          <div className="section-body">
            <FormAddBerita getData={handleAddBerita} />
          </div>
        </section>
      </main>
    )
  }

  if (showEditBeritaForm) {
    return (
      <main>
        <h1 className="page-header">Edit Berita</h1>
        <section className="content-section">
          <div className="section-header-container">
            <h4 className="section-header">Edit Berita</h4>
            <button onClick={() => setShowEditBeritaForm(false)} className="section-add-btn">-</button>
          </div>
          <div className="section-body">
            <FormEditBerita getData={handleEditBerita} currentData={selectedData} />
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <h1 className="page-header">Berita</h1>
      <section className="content-section mb-5">
        <div className="section-header-container">
          <h4 className="section-header">Berita</h4>
          <button onClick={() => setShowAddBeritaForm(true)} className="section-add-btn">+</button>
        </div>
        <div className="section-body">
          <table>
            <tr>
              <th>No.</th>
              <th>Tanggal</th>
              <th>Judul</th>
              <th className="text-center">Action</th>
            </tr>
            {listDataBerita.map((data, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{data.tanggal}</td>
                <td>{data.judul}</td>
                <td className="table-cta">
                  <div className="table-cta-container">
                    <button onClick={() => { setShowEditBeritaForm(true); setSelectedData(data) }} className="section-edit-btn">Edit</button>
                    <button onClick={() => handleDeleteBerita(data.id)} className="section-delete-btn">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section>
    </main>
  );
}

export default Berita;
