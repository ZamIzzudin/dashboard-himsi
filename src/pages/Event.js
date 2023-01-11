/* eslint-disable react-hooks/exhaustive-deps */

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { AsyncGetAllEvent, AsyncRemoveEvent } from '../state/event/middleware'
import { AsyncGetAllDivisi } from '../state/divisi/middleware'

import FormManageEvent from "../components/Event/FormManageEvent";
import HIMSI_LOGO from '../assets/HIMSI_LOGO.webp'
import { ReactComponent as Delete } from '../assets/icons/Delete.svg'

export default function Event() {
  const dispatch = useDispatch()
  const { event = [], bidang = [], divisi = [] } = useSelector(states => states)
  const { namaBidang } = useParams();

  const [showManageEventForm, setShowManageEventForm] = useState(false)

  const [displayedEvent, setDisplayedEvent] = useState([])
  const [detailBidang, setDetailBidang] = useState(null)
  const [selectedDivisi, setSelectedDivisi] = useState(null)

  const [selectedData, setSelectedData] = useState(null)

  function deleteEvent(idProker) {
    dispatch(AsyncRemoveEvent(idProker, namaBidang))
  }

  function getDetailBidang() {
    const detail = bidang.filter(item => item.nama_bidang === namaBidang)
    setDetailBidang(detail[0])
  }

  function setupDisplayEventEachDivisi() {
    const pre = divisi.map(item => {
      return {
        ...item,
        event: event.filter(each => item.nama_divisi === each.divisi)
      }
    })
    setDisplayedEvent(pre)
  }

  useEffect(() => {
    dispatch(AsyncGetAllEvent(namaBidang))
    dispatch(AsyncGetAllDivisi(namaBidang))
    getDetailBidang()
  }, [dispatch, namaBidang])

  useEffect(() => {
    setupDisplayEventEachDivisi()
  }, [dispatch, divisi, event])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [showManageEventForm]);

  if (showManageEventForm) {
    return (
      <main>
        <h1 className="page-header">Events</h1>
        <section className="page-header-group">
          <img src={detailBidang?.logo_bidang.url || HIMSI_LOGO} alt="logo bidang" width="100" />
          <div>
            <h2 className="page-subheader">{detailBidang?.nama_bidang}</h2>
            <h3 className="page-additionalheader">{detailBidang?.kepanjangan_bidang}</h3>
          </div>
        </section>
        <section className="content-section">
          <div className="section-header-container">
            <h4 className="section-header">Manage Event</h4>
            <button onClick={() => { setShowManageEventForm(false); setSelectedData(null); }} className="section-add-btn">-</button>
          </div>
          <div className="section-body">
            <FormManageEvent namaBidang={namaBidang} idDivisi={selectedDivisi} showForm={setShowManageEventForm} currentData={selectedData} />
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <h1 className="page-header">Events</h1>
      <section className="page-header-group">
        <img src={detailBidang?.logo_bidang.url || HIMSI_LOGO} alt="logo bidang" width="100" />
        <div>
          <h2 className="page-subheader">{detailBidang?.nama_bidang}</h2>
          <h3 className="page-additionalheader">{detailBidang?.kepanjangan_bidang}</h3>
        </div>
      </section>


      {/* Display Divisi */}
      {displayedEvent.map(item => (
        <section className="content-section mb-5">
          <div className="section-header-container">
            <h4 className="section-header">Divisi {item.nama_divisi}</h4>
            <button onClick={() => { setShowManageEventForm(true); setSelectedData(null); setSelectedDivisi(item._id); }} className="section-add-btn">+</button>
          </div>
          <div className="section-body">
            {/* Display Program Kerja per Divisi */}
            <table>
              <tr>
                <th>No.</th>
                <th>Nama Event</th>
                <th className="text-center">Action</th>
              </tr>
              {item.event.map((acara, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{acara.judul_event}</td>
                  <td className="table-cta">
                    <div className="table-cta-container">
                      <button onClick={() => { setShowManageEventForm(true); setSelectedData(acara); setSelectedDivisi(item._id); }} className="section-edit-btn">Edit</button>
                      <button onClick={() => deleteEvent(acara._id)} className="section-delete-btn"><Delete /></button>
                    </div>
                  </td>
                </tr>
              )
              )}
            </table>
          </div>
        </section >
      ))}

    </main>
  );
};
