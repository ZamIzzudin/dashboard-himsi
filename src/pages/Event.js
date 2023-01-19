/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { AsyncGetAllEvent, AsyncRemoveEvent } from '../state/event/middleware'
import { AsyncGetAllDivisi } from '../state/divisi/middleware'
import { HideError } from '../state/error/middleware'
import { HideSuccess } from '../state/success/middleware'

import FormManageEvent from "../components/Event/FormManageEvent";
import InfoModal from '../components/InfoModal'

import HIMSI_LOGO from '../assets/HIMSI_LOGO.webp'
import { ReactComponent as Delete } from '../assets/icons/Delete.svg'

export default function Event() {
  const dispatch = useDispatch()
  const { event = [], bidang = [], divisi = [], success, error } = useSelector(states => states)
  const { namaBidang } = useParams();

  const [showManageEventForm, setShowManageEventForm] = useState(false)

  const [drafted, setDrafted] = useState(false)
  const [displayedEvent, setDisplayedEvent] = useState([])
  const [detailBidang, setDetailBidang] = useState(null)
  const [selectedDivisi, setSelectedDivisi] = useState(null)

  const [selectedData, setSelectedData] = useState(null)

  function handleModal() {
    dispatch(HideError())
    dispatch(HideSuccess())
  }

  function deleteEvent(idProker) {
    dispatch(AsyncRemoveEvent(idProker, namaBidang))
  }

  function deleteDraft(title) {
    const listDraft = localStorage.getItem('draft_berita')
    const draft = JSON.parse(listDraft)

    const newDraftList = draft.filter((item) => title !== item.judul_event)
    localStorage.setItem('draft_event', JSON.stringify(newDraftList))
    setupDisplayEventEachDivisi()
  }

  function getDetailBidang() {
    const detail = bidang.filter(item => item.nama_bidang === namaBidang)
    setDetailBidang(detail[0])
  }

  function setupDisplayEventEachDivisi() {
    const listDraft = localStorage.getItem('draft_event')
    const draft = JSON.parse(listDraft)

    const pre = divisi.map(item => {
      return {
        ...item,
        event: event.filter(each => item.nama_divisi === each.divisi),
        draft: draft?.filter(each => item._id === each.id_divisi) || []
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
    setupDisplayEventEachDivisi()
    if (showManageEventForm === false) {
      setSelectedData(null);
      setDrafted(false)
    }
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
            <FormManageEvent drafted={drafted} namaBidang={namaBidang} idDivisi={selectedDivisi} showForm={setShowManageEventForm} currentData={selectedData} />
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

            <h3 className="org-text mb-4">Draft</h3>
            <table>
              <tr>
                <th>No.</th>
                <th>Nama Event</th>
                <th className="text-center">Action</th>
              </tr>
              {item.draft.map((acara, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{acara.judul_event}</td>
                  <td className="table-cta">
                    <div className="table-cta-container">
                      <button onClick={() => { setDrafted(true); setShowManageEventForm(true); setSelectedData(acara); setSelectedDivisi(item._id); }} className="section-edit-btn">Edit</button>
                      <button onClick={() => deleteDraft(acara.judul_event)} className="section-delete-btn"><Delete /></button>
                    </div>
                  </td>
                </tr>
              )
              )}
            </table>
          </div>
        </section >
      ))}

      {/* Error Modal */}
      <InfoModal show={error.status} setShow={handleModal} value={error.message} type="error" />
      {/* Success Draft*/}
      <InfoModal show={success.status} setShow={handleModal} value={success.message} type="success" />
    </main>
  );
};
