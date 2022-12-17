import { useState, useEffect } from 'react'

import FormHimpunan from '../components/Profile/FormHimpunan'
import FormBidang from '../components/Profile/FormBidang'
import FormVisiMisi from '../components/Profile/FormVisiMisi'
import FormStruktur from '../components/Profile/FormStruktur'

import HIMSI from '../utils/HIMSIdummy'

export default function Profile() {
  const [listBidang, setListBidang] = useState(HIMSI)
  const [showBidangForm, setShowBidangForm] = useState(false)

  function addBidang(data) {
    setListBidang([...listBidang, data])
    setShowBidangForm(false)
  }

  function deleteBidang(id) {
    const newData = listBidang.filter(bidang => bidang.id !== id)
    setListBidang(newData)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [showBidangForm]);

  if (showBidangForm) {
    return (
      <main>
        <h1 className="page-header">Profile</h1>
        <section className="content-section">
          <div className="section-header-container">
            <h4 className="section-header">Bidang</h4>
            <button onClick={() => setShowBidangForm(false)} className="section-add-btn">-</button>
          </div>
          <div className="section-body">
            <FormBidang getData={addBidang} />
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <h1 className="page-header">Profile</h1>

      {/* Himpunan */}
      <section className="content-section">
        <div className="section-header-container">
          <h4 className="section-header">Himpunan</h4>
          <button className="section-add-btn hidden">+</button>
        </div>
        <div className="section-body">
          <FormHimpunan />
        </div>
      </section>

      {/* Visi Misi */}
      <section className="content-section">
        <div className="section-header-container">
          <h4 className="section-header">Visi/Misi</h4>
          <button className="section-add-btn hidden">+</button>
        </div>
        <div className="section-body">
          <FormVisiMisi />
        </div>
      </section>

      {/* Bidang */}
      <section className="content-section">
        <div className="section-header-container">
          <h4 className="section-header">Bidang</h4>
          <button onClick={() => setShowBidangForm(true)} className="section-add-btn">+</button>
        </div>
        <div className="section-body">
          <table>
            <tr>
              <th>No.</th>
              <th>Bidang</th>
              <th>Kepanjangan</th>
              <th className="text-center">Action</th>
            </tr>
            {listBidang.map((bidang, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{bidang.bidang}</td>
                <td>{bidang.kepanjangan}</td>
                <td className="table-cta">
                  <div className="table-cta-container">
                    <button onClick={() => deleteBidang(bidang.id)} className="section-delete-btn">Delete</button>
                    <button className="section-edit-btn">Edit</button>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section>

      {/* Struktur */}
      <section className="content-section">
        <div className="section-header-container">
          <h4 className="section-header">Struktur</h4>
          <button className="section-add-btn hidden">+</button>
        </div>
        <div className="section-body">
          <FormStruktur />
        </div>
      </section>

    </main>
  );
}
