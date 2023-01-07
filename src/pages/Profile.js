import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AsyncRemoveBidang } from '../state/bidang/middleware';

import FormHimpunan from '../components/Profile/FormHimpunan'
import FormBidang from '../components/Profile/FormBidang'
import FormVisiMisi from '../components/Profile/FormVisiMisi'
import { ReactComponent as Delete } from '../assets/icons/Delete.svg'

// import HIMSI from '../utils/HIMSIdummy'

export default function Profile() {
  const { bidang = [] } = useSelector(states => states)
  const dispatch = useDispatch()

  const [showBidangForm, setShowBidangForm] = useState(false)

  const [selectedData, setSelectedData] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [showBidangForm]);

  function deleteBidang(id) {
    dispatch(AsyncRemoveBidang(id))
  }

  if (showBidangForm) {
    return (
      <main>
        <h1 className="page-header">Profile</h1>
        <section className="content-section">
          <div className="section-header-container">
            <h4 className="section-header">Bidang</h4>
            <button onClick={() => { setShowBidangForm(false); setSelectedData(null); }} className="section-add-btn">-</button>
          </div>
          <div className="section-body">
            <FormBidang currentData={selectedData} showForm={setShowBidangForm} />
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
          <button onClick={() => { setShowBidangForm(true); setSelectedData(null); }} className="section-add-btn">+</button>
        </div>
        <div className="section-body">
          <table>
            <tr>
              <th>No.</th>
              <th>Bidang</th>
              <th>Kepanjangan</th>
              <th className="text-center">Action</th>
            </tr>
            {bidang.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.nama_bidang}</td>
                <td>{item.kepanjangan_bidang}</td>
                <td className="table-cta">
                  <div className="table-cta-container">
                    <button onClick={() => { setShowBidangForm(true); setSelectedData(item); }} className="section-edit-btn">Edit</button>
                    <button onClick={() => deleteBidang(item._id)} className="section-delete-btn"><Delete /></button>
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
