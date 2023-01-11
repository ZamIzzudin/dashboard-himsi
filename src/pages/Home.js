// eslint-disable-next-line
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { AsyncRemovePartner } from '../state/partner/middleware'
import { AsyncRemoveSlider } from '../state/slider/middleware'

import FormSlider from "../components/Home/FormSlider";
import FormPartner from "../components/Home/FormPartner";
import FormSocmed from "../components/Home/FormSocmed";

import { ReactComponent as Delete } from '../assets/icons/Delete.svg'
import { ReactComponent as Linking } from '../assets/icons/Link.svg'

export default function Home() {
  const { socmed = [], partner = [], slider = [] } = useSelector(states => states)
  const dispatch = useDispatch()

  const [showSliderForm, setSliderForm] = useState(false)
  const [showPartnerForm, setPartnerForm] = useState(false)
  const [showSocmedForm, setSocmedForm] = useState(false)

  const [selectedData, setSelectedData] = useState(null)

  // Delete Function
  function handleDeleteSlider(id) {
    dispatch(AsyncRemoveSlider(id))
  }

  function handleDeletePartner(id) {
    dispatch(AsyncRemovePartner(id))
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [showSliderForm, showPartnerForm, showSocmedForm]);

  // Slider Information Form
  if (showSliderForm) {
    return (
      <main>
        <h1 className="page-header">Home</h1>
        <section className="content-section">
          <div className="section-header-container">
            <h4 className="section-header">Manage Slider Information</h4>
            <button onClick={() => setSliderForm(false)} className="section-add-btn">-</button>
          </div>
          <div className="section-body">
            <FormSlider showForm={setSliderForm} currentData={selectedData} />
          </div>
        </section>
      </main>
    )
  }

  // Partner Form
  if (showPartnerForm) {
    return (
      <main>
        <h1 className="page-header">Home</h1>
        <section className="content-section">
          <div className="section-header-container">
            <h4 className="section-header">Tambah Partner</h4>
            <button onClick={() => { setPartnerForm(false); setSelectedData(null); }} className="section-add-btn">-</button>
          </div>
          <div className="section-body">
            <FormPartner showForm={setPartnerForm} currentData={selectedData} />
          </div>
        </section>
      </main>
    )
  }

  // Social Media Form
  if (showSocmedForm) {
    return (
      <main>
        <h1 className="page-header">Home</h1>
        <section className="content-section">
          <div className="section-header-container">
            <h4 className="section-header">Edit Social Media</h4>
            <button onClick={() => setSocmedForm(false)} className="section-add-btn">-</button>
          </div>
          <div className="section-body">
            <FormSocmed showForm={setSocmedForm} currentData={selectedData} />
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <h1 className="page-header">Home</h1>
      {/* Slider Display */}
      <section className="content-section mb-5">
        <div className="section-header-container">
          <h4 className="section-header">Slider Information</h4>
          <button onClick={() => { setSliderForm(true); setSelectedData(null) }} className="section-add-btn">+</button>
        </div>
        <div className="section-body">
          <table>
            <tr>
              <th>No.</th>
              <th>Judul</th>
              <th className="text-center">Action</th>
            </tr>
            {slider?.map((item, index) => (
              <tr key={`${index} slider`}>
                <td>{index + 1}</td>
                <td>{item.judul_slider}</td>
                <td className="table-cta">
                  <div className="table-cta-container">
                    <button onClick={() => { setSliderForm(true); setSelectedData(item) }} className="section-edit-btn">Edit</button>
                    <button onClick={() => handleDeleteSlider(item._id)} className="section-delete-btn"><Delete /></button>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section >

      {/* Partner Display */}
      <section className="content-section mb-5">
        <div className="section-header-container">
          <h4 className="section-header">Partners</h4>
          <button onClick={() => { setPartnerForm(true); setSelectedData(null); }} className="section-add-btn">+</button>
        </div>
        <div className="section-body">
          <table>
            <tr>
              <th>No.</th>
              <th>Nama Partner</th>
              <th className="text-center">Action</th>
            </tr>
            {partner?.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.nama_partner}</td>
                <td className="table-cta">
                  <div className="table-cta-container">
                    <button onClick={() => { setPartnerForm(true); setSelectedData(item) }} className="section-edit-btn">Edit</button>
                    <button onClick={() => handleDeletePartner(item._id)} className="section-delete-btn"><Delete /></button>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section >

      {/* Socmed Display */}
      <section className="content-section mb-5">
        <div className="section-header-container">
          <h4 className="section-header">Social Media</h4>
          <button className="section-add-btn hidden">+</button>
        </div>
        <div className="section-body">
          <table>
            <tr>
              <th>No.</th>
              <th>Social Media</th>
              <th>Link</th>
              <th className="text-center">Action</th>
            </tr>
            {socmed?.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.nama_link}</td>
                <td><Linking /> {item.url}</td>
                <td className="table-cta">
                  <div className="table-cta-container">
                    <button onClick={() => { setSocmedForm(true); setSelectedData(item) }} className="section-edit-btn">Edit</button>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section >
    </main>
  );
}
