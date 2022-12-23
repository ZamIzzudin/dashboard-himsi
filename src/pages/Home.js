import { useState, useEffect } from "react";

import { ReactComponent as Delete } from '../assets/icons/Delete.svg'
import FormSlider from "../components/Home/FormSlider";
import FormUpcoming from "../components/Home/FormUpcoming";
import FormPartner from "../components/Home/FormPartner";
import FormSocmed from "../components/Home/FormSocmed";

export default function Home() {
  const [showSliderForm, setSliderForm] = useState(false)
  const [showUpcomingForm, setUpcomingForm] = useState(false)
  const [showPartnerForm, setPartnerForm] = useState(false)
  const [showSocmedForm, setSocmedForm] = useState(false)

  const listSocmed = [
    {
      id: 3423234,
      name: 'Instagram',
      url: '/asjasjas',
    },
    {
      id: 3233234,
      name: 'Facebook',
      url: '/asjasjas',
    },
    {
      id: 3423214,
      name: 'Twitter',
      url: '/asjasjas',
    },
    {
      id: 3123244,
      name: 'Discord',
      url: '/asjasjas',
    },
    {
      id: 1433234,
      name: 'Tiktok',
      url: '/asjasjas',
    },
    {
      id: 1323214,
      name: 'Youtube',
      url: '/asjasjas',
    },
    {
      id: 1223214,
      name: 'Linkedin',
      url: '/asjasjas',
    }
  ]

  const [listUpcomingData, setListUpcomingData] = useState([])
  const [listSliderData, setListSliderData] = useState([])
  const [listPartnerData, setListPartnerData] = useState([])
  const [listSocmedData, setListSocmedData] = useState(listSocmed)

  const [selectedData, setSelectedData] = useState(null)

  // Add Function
  function handleAddSlider(data) {
    setListSliderData([...listSliderData, data])
    setSliderForm(false)
  }

  function handleAddUpcoming(data) {
    setListUpcomingData([...listUpcomingData, data])
    setUpcomingForm(false)
  }

  function handleAddPartner(data) {
    setListPartnerData([...listPartnerData, data])
    setPartnerForm(false)
  }

  // Edit Function
  function handleEditSlider(data) {
    const newData = listSliderData.map((slider) => {
      if (slider.id === data.id) {
        return data
      }
      return slider
    })
    setListSliderData(newData)
    setSelectedData(null)
    setSliderForm(false)
  }

  function handleEditUpcoming(data) {
    const newData = listUpcomingData.map((upcoming) => {
      if (upcoming.id === data.id) {
        return data
      }
      return upcoming
    })
    setListUpcomingData(newData)
    setSelectedData(null)
    setUpcomingForm(false)
  }

  function handleEditPartner(data) {
    const newData = listPartnerData.map((partner) => {
      if (partner.id === data.id) {
        return data
      }
      return partner
    })
    setListPartnerData(newData)
    setSelectedData(null)
    setPartnerForm(false)
  }

  function handleEditSocmed(data) {
    const newData = listSocmedData.map((socmed) => {
      if (socmed.id === data.id) {
        return data
      }
      return socmed
    })
    setListSocmedData(newData)
    setSelectedData(null)
    setSocmedForm(false)
  }

  // Delete Function
  function handleDeleteSlider(id) {
    const newData = listSliderData.filter((slider) => slider.id !== id)
    setListSliderData(newData)
  }

  function handleDeleteUpcoming(id) {
    const newData = listUpcomingData.filter((upcoming) => upcoming.id !== id)
    setListUpcomingData(newData)
  }

  function handleDeletePartner(id) {
    const newData = listPartnerData.filter((partner) => partner.id !== id)
    setListPartnerData(newData)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [showSliderForm, showUpcomingForm, showPartnerForm, showSocmedForm]);

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
            <FormSlider addData={handleAddSlider} editData={handleEditSlider} currentData={selectedData} />
          </div>
        </section>
      </main>
    )
  }

  // Upcoming Form
  if (showUpcomingForm) {
    return (
      <main>
        <h1 className="page-header">Home</h1>
        <section className="content-section">
          <div className="section-header-container">
            <h4 className="section-header">Manage Upcoming Events</h4>
            <button onClick={() => setUpcomingForm(false)} className="section-add-btn">-</button>
          </div>
          <div className="section-body">
            <FormUpcoming addData={handleAddUpcoming} editData={handleEditUpcoming} currentData={selectedData} />
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
            <FormPartner addData={handleAddPartner} editData={handleEditPartner} currentData={selectedData} />
          </div>
        </section>
      </main>
    )
  }

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
            <FormSocmed getData={handleEditSocmed} currentData={selectedData} />
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
              <th>Link</th>
              <th className="text-center">Action</th>
            </tr>
            {listSliderData?.map((slider, index) => (
              <tr key={`${index} slider`}>
                <td>{index + 1}</td>
                <td>{slider.title}</td>
                <td>{slider.url}</td>
                <td className="table-cta">
                  <div className="table-cta-container">
                    <button onClick={() => { setSliderForm(true); setSelectedData(slider) }} className="section-edit-btn">Edit</button>
                    <button onClick={() => handleDeleteSlider(slider.id)} className="section-delete-btn"><Delete /></button>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section >

      {/* Upcoming Event Display */}
      <section className="content-section mb-5">
        <div className="section-header-container">
          <h4 className="section-header">Upcoming Event</h4>
          <button onClick={() => { setUpcomingForm(true); setSelectedData(null); }} className="section-add-btn">+</button>
        </div>
        <div className="section-body">
          <table>
            <tr>
              <th>No.</th>
              <th>Judul</th>
              <th className="text-center">Action</th>
            </tr>
            {listUpcomingData.map((upcoming, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{upcoming.title}</td>
                <td className="table-cta">
                  <div className="table-cta-container">
                    <button onClick={() => { setUpcomingForm(true); setSelectedData(upcoming) }} className="section-edit-btn">Edit</button>
                    <button onClick={() => handleDeleteUpcoming(upcoming.id)} className="section-delete-btn"><Delete /></button>
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
              <th>Nama</th>
              <th className="text-center">Action</th>
            </tr>
            {listPartnerData.map((partner, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{partner.name}</td>
                <td className="table-cta">
                  <div className="table-cta-container">
                    <button onClick={() => { setPartnerForm(true); setSelectedData(partner) }} className="section-edit-btn">Edit</button>
                    <button onClick={() => handleDeletePartner(partner.id)} className="section-delete-btn"><Delete /></button>
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
              <th>Nama</th>
              <th>Link</th>
              <th className="text-center">Action</th>
            </tr>
            {listSocmedData.map((socmed, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{socmed.name}</td>
                <td>{socmed.url}</td>
                <td className="table-cta">
                  <div className="table-cta-container">
                    <button onClick={() => { setSocmedForm(true); setSelectedData(socmed) }} className="section-edit-btn">Edit</button>
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
