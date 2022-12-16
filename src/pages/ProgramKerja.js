import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import FormAddProker from "../components/ProgramKerja/FormAddProker";

import HIMSI_LOGO from '../assets/HIMSI_LOGO.png'
import HIMSI from '../utils/HIMSIdummy'

export default function ProgramKerja() {
  const [showAddProkerForm, setShowAddProkerForm] = useState(false)
  const { bidang } = useParams();

  const [detailBidang, setDetailBidang] = useState(null)
  const [selectedDivisi, setSelectedDivisi] = useState(null)
  // const [selectedProker, setSelectedProker] = useState(null)

  useEffect(() => {
    HIMSI.forEach(HIMSIbidang => {
      if (HIMSIbidang.bidang === bidang) {
        setDetailBidang(HIMSIbidang)
        setShowAddProkerForm(false)
      }
    })
  }, [bidang])

  function addProker(data, idDivisi) {
    const newData = detailBidang.divisi.map(divisi => {
      if (divisi.id === idDivisi) {
        return {
          ...divisi,
          proker: [
            ...divisi.proker,
            data
          ]
        }
      }
      return divisi
    })
    setDetailBidang({ ...detailBidang, divisi: newData })
    setShowAddProkerForm(false)
  }

  function deleteProker(idProker, idDivisi) {
    const newData = detailBidang.divisi.map((divisi) => {
      if (divisi.id === idDivisi) {
        return {
          ...divisi,
          proker: divisi.proker.filter((proker) => proker.id !== idProker)
        }
      } else {
        return divisi
      }
    })
    setDetailBidang({ ...detailBidang, divisi: newData })
  }

  if (showAddProkerForm) {
    return (
      <main>
        <h1 className="page-header">Program Kerja</h1>
        <section className="page-header-group">
          <img src={HIMSI_LOGO} alt="logo bidang" width="100" />
          <div>
            <h2 className="page-subheader">{detailBidang?.bidang}</h2>
            <h3 className="page-additionalheader">{detailBidang?.kepanjangan}</h3>
          </div>
        </section>
        <section className="content-section">
          <div className="section-header-container">
            <h4 className="section-header">Tambah FAQ</h4>
            <button onClick={() => setShowAddProkerForm(false)} className="section-add-btn">-</button>
          </div>
          <div className="section-body">
            <FormAddProker getData={addProker} idDivisi={selectedDivisi} />
          </div>
        </section>
      </main>
    )
  }

  return (
    <main>
      <h1 className="page-header">Program Kerja</h1>
      <section className="page-header-group">
        <img src={HIMSI_LOGO} alt="logo bidang" width="100" />
        <div>
          <h2 className="page-subheader">{detailBidang?.bidang}</h2>
          <h3 className="page-additionalheader">{detailBidang?.kepanjangan}</h3>
        </div>
      </section>

      {/* Display Divisi */}
      {detailBidang?.divisi.map(divisi => (
        <section className="content-section mb-5">
          <div className="section-header-container">
            <h4 className="section-header">Divisi {divisi.nama}</h4>
            <button onClick={() => { setShowAddProkerForm(true); setSelectedDivisi(divisi.id); }} className="section-add-btn">+</button>
          </div>
          <div className="section-body">
            {/* Display Program Kerja per Divisi */}
            <table>
              <tr>
                <th>No.</th>
                <th>Nama Program Kerja</th>
                <th className="text-center">Action</th>
              </tr>
              {divisi.proker.map((proker, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{proker.nama}</td>
                  <td className="table-cta">
                    <div className="table-cta-container">
                      <button onClick={() => deleteProker(proker.id, divisi.id)} className="section-delete-btn">Delete</button>
                      <button className="section-edit-btn">Edit</button>
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </section >
      ))}
    </main>
  );
};
