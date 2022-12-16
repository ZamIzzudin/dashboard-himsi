import FormSlider from "../components/Home/FormSlider";
import FormUpcoming from "../components/Home/FormUpcoming";
import FormPartner from "../components/Home/FormPartner";
import FormSocmed from "../components/Home/FormSocmed";
import { useState } from "react";

import "../styles/pages/Home.css";

export default function Home() {
  const [showSliderForm, setSliderForm] = useState(false)
  const [showUpcomingForm, setUpcomingForm] = useState(false)
  const [showPartnerForm, setPartnerForm] = useState(false)
  const [showSocmedForm, setSocmedForm] = useState(false)

  const listSlider = [
    {
      id: 3423234,
      title: 'MeetUp 13.0',
      img: 'gambar.png',
      url: '///'
    },
    {
      id: 3233234,
      title: 'Lomba Milad Himsi',
      img: 'gambar.png',
      url: '///'
    },
    {
      id: 3423214,
      title: 'PBAK',
      img: 'gambar.png',
      url: '///'
    }
  ]

  const upcomingEvent = [
    {
      id: 3423234,
      title: 'MeetUp 13.0',
      img: 'gambar.png',
      description: 'loremd sdfljsldkfj sdlfksdklf sldfsldkf slkdflskdjfls sldkfjsdlf',
      url: '///'
    },
    {
      id: 3233234,
      title: 'Lomba Milad Himsi',
      img: 'gambar.png',
      description: 'loremd sdfljsldkfj sdlfksdklf sldfsldkf slkdflskdjfls sldkfjsdlf',
      url: '///'
    },
    {
      id: 3423214,
      title: 'PBAK',
      img: 'gambar.png',
      description: 'loremd sdfljsldkfj sdlfksdklf sldfsldkf slkdflskdjfls sldkfjsdlf',
      url: '///'
    }
  ]

  const listPartner = [
    {
      id: 3423234,
      name: 'Gojek',
      img: 'gambar.png',
    },
    {
      id: 3233234,
      name: 'Kominfo',
      img: 'gambar.png',
    },
    {
      id: 3423214,
      name: 'Tokopedia',
      img: 'gambar.png',
    }
  ]

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

  const [listUpcomingData, setListUpcomingData] = useState(upcomingEvent)
  const [listSliderData, setListSliderData] = useState(listSlider)
  const [listPartnerData, setListPartnerData] = useState(listPartner)
  const [listSocmedData, setListSocmedData] = useState(listSocmed)

  const [selectedData, setSelectedData] = useState(null)

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

  // Slider Information Form
  if (showSliderForm) {
    return (
      <main>
        <h1 className="page-header">Home</h1>
        <section className="content-section">
          <div className="section-header-container">
            <h4 className="section-header">Tambah Slider Information</h4>
            <button onClick={() => setSliderForm(false)} className="section-add-btn">-</button>
          </div>
          <div className="section-body">
            <FormSlider getData={handleAddSlider} />
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
            <h4 className="section-header">Tambah Upcoming Events</h4>
            <button onClick={() => setUpcomingForm(false)} className="section-add-btn">-</button>
          </div>
          <div className="section-body">
            <FormUpcoming getData={handleAddUpcoming} />
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
            <button onClick={() => setPartnerForm(false)} className="section-add-btn">-</button>
          </div>
          <div className="section-body">
            <FormPartner getData={handleAddPartner} />
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
          <button onClick={() => setSliderForm(true)} className="section-add-btn">+</button>
        </div>
        <div className="section-body">
          <table>
            <tr>
              <th>No.</th>
              <th>Judul</th>
              <th className="text-center">Action</th>
            </tr>
            {listSliderData.map((slider, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{slider.title}</td>
                <td className="table-cta">
                  <div className="table-cta-container">
                    <button onClick={() => handleDeleteSlider(slider.id)} className="section-delete-btn">Delete</button>
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
          <button onClick={() => setUpcomingForm(true)} className="section-add-btn">+</button>
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
                    <button onClick={() => handleDeleteUpcoming(upcoming.id)} className="section-delete-btn">Delete</button>
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
          <button onClick={() => setPartnerForm(true)} className="section-add-btn">+</button>
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
                    <button onClick={() => handleDeletePartner(partner.id)} className="section-delete-btn">Delete</button>
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
