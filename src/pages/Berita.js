import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AsyncRemoveBerita } from '../state/berita/middleware'
import { HideError } from '../state/error/middleware'
import { HideSuccess } from '../state/success/middleware'

import FormEditBerita from "../components/Berita/FormEditBerita";
import InfoModal from '../components/InfoModal'

import { ReactComponent as Delete } from '../assets/icons/Delete.svg'

const Berita = () => {
  const { berita = [], success, error } = useSelector(states => states)
  const dispatch = useDispatch()

  const [showEditBeritaForm, setShowEditBeritaForm] = useState(false);

  const [drafted, setDrafted] = useState(false)
  const [selectedData, setSelectedData] = useState(null)
  const [draft, setDraft] = useState([])


  function handleModal() {
    dispatch(HideError())
    dispatch(HideSuccess())
  }


  function handleDeleteBerita(id) {
    dispatch(AsyncRemoveBerita(id))
  }

  function getDraft() {
    const listDraft = localStorage.getItem('draft_berita')
    setDraft(JSON.parse(listDraft))
  }

  function deleteDraft(idx) {
    const newDraftList = draft.filter((item, index) => idx !== index)
    localStorage.setItem('draft_berita', JSON.stringify(newDraftList))
    getDraft()
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getDraft()
    if (!showEditBeritaForm) {
      setSelectedData(null);
      setDrafted(false)
    }
  }, [showEditBeritaForm]);

  if (showEditBeritaForm) {
    return (
      <main>
        <h1 className="page-header">Manage Article</h1>
        <section className="content-section">
          <div className="section-header-container">
            <h4 className="section-header">Manage Article</h4>
            <button onClick={() => setShowEditBeritaForm(false)} className="section-add-btn">-</button>
          </div>
          <div className="section-body">
            <FormEditBerita drafted={drafted} showForm={setShowEditBeritaForm} currentData={selectedData} />
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <h1 className="page-header">Articles</h1>
      <section className="content-section mb-5">
        <div className="section-header-container">
          <h4 className="section-header">Articles</h4>
          <button onClick={() => { setShowEditBeritaForm(true); setSelectedData(null) }} className="section-add-btn">+</button>
        </div>
        <div className="section-body">
          <table>
            <tr>
              <th>No.</th>
              <th>Tanggal</th>
              <th>Judul</th>
              <th className="text-center">Action</th>
            </tr>
            {berita?.map((data, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{data.tanggal_berita.slice(0, 10)}</td>
                <td>{data.judul_berita}</td>
                <td className="table-cta">
                  <div className="table-cta-container">
                    <button onClick={() => { setShowEditBeritaForm(true); setSelectedData(data) }} className="section-edit-btn">Edit</button>
                    <button onClick={() => handleDeleteBerita(data._id)} className="section-delete-btn"><Delete /></button>
                  </div>
                </td>
              </tr>
            ))}
          </table>

          <h3 className="org-text mb-4">Draft</h3>
          <table>
            <tr>
              <th>No.</th>
              <th>Tanggal</th>
              <th>Judul</th>
              <th className="text-center">Action</th>
            </tr>
            {draft?.map((data, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{data.tanggal_berita.slice(0, 10)}</td>
                <td>{data.judul_berita}</td>
                <td className="table-cta">
                  <div className="table-cta-container">
                    <button onClick={() => { setShowEditBeritaForm(true); setSelectedData(data); setDrafted(true); }} className="section-edit-btn">Edit</button>
                    <button onClick={() => deleteDraft(index)} className="section-delete-btn"><Delete /></button>
                  </div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section>

      {/* Error Modal */}
      <InfoModal show={error.status} setShow={handleModal} value={error.message} type="error" />
      {/* Success Draft*/}
      <InfoModal show={success.status} setShow={handleModal} value={success.message} type="success" />
    </main>
  );
}

export default Berita;
