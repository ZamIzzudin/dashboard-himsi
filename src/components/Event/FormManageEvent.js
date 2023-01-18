import { Form, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AsyncCreateEvent, AsyncEditEvent } from '../../state/event/middleware'

import { ReactComponent as Linking } from '../../assets/icons/Link.svg'
import Editor from '../Editor'
import InfoModal from '../InfoModal'
import CTAModal from '../CTAModal'
import InputImage from '../InputImage'
import InputManyImage from '../InputManyImage'

import '../../styles/components/FormLayout.css'

export default function FormManageEvent({ namaBidang, idDivisi, currentData, showForm, drafted }) {
    const dispatch = useDispatch()

    const [judulEvent, setJudulEvent] = useState(currentData?.judul_event)
    const [penulisEvent, setPenulisEvent] = useState(currentData?.penulis_event)
    const [tanggalMulaiEvent, setTanggalMulaiEvent] = useState(currentData?.tanggal_mulai_event)
    const [tanggalSelesaiEvent, setTanggalSelesaiEvent] = useState(currentData?.tanggal_selesai_event || null)
    const [isiEvent, setIsiEvent] = useState(currentData?.isi_event)
    const [kategoriEvent, setKategoriEvent] = useState(currentData?.kategori_event || 'Internal HIMSI')
    const [statusEvent, setStatusEvent] = useState(currentData?.status_event || 'Upcoming')
    const [headerEvent, setHeaderEvent] = useState(currentData?.header_event?.url || null)
    const [gambarEvent, setGambarEvent] = useState(currentData?.gambar_event?.url || null)
    const [dokumentasiEvent, setDokumentasiEvent] = useState(currentData?.dokumentasi_event || [])
    const [linkEvent, setLinkEvent] = useState(currentData?.link_pdf || '')
    const [linkPendaftaran, setLinkPendaftaran] = useState(currentData?.link_pendaftaran)

    const [durasi, setDurasi] = useState(true)
    const [draft, setDraft] = useState([])
    const [makeDraft, setMakeDraft] = useState(false)
    const [successDraft, setSuccessDraft] = useState(false)
    const [error, setError] = useState(false)

    function handleAddProker(e) {
        e.preventDefault();
        if (drafted) {
            if (headerEvent !== null && gambarEvent !== null) {
                dispatch(AsyncCreateEvent({
                    judul_event: judulEvent,
                    penulis_event: penulisEvent,
                    tanggal_mulai_event: tanggalMulaiEvent,
                    tanggal_selesai_event: tanggalSelesaiEvent,
                    isi_event: isiEvent,
                    kategori_event: kategoriEvent,
                    status_event: statusEvent,
                    header_event: headerEvent,
                    gambar_event: gambarEvent,
                    dokumentasi_event: dokumentasiEvent,
                    link_pdf: linkEvent,
                    link_pendaftaran: linkPendaftaran,
                    id_divisi: idDivisi
                }, namaBidang))
                showForm(false)
            } else {
                setError(true)
            }
        } else {
            if (currentData !== null) {
                dispatch(AsyncEditEvent({
                    _id: currentData._id,
                    judul_event: judulEvent,
                    penulis_event: penulisEvent,
                    tanggal_mulai_event: tanggalMulaiEvent,
                    tanggal_selesai_event: tanggalSelesaiEvent,
                    isi_event: isiEvent,
                    kategori_event: kategoriEvent,
                    status_event: statusEvent,
                    header_event: headerEvent || currentData?.header_event.url,
                    gambar_event: gambarEvent || currentData?.gambar_event.url,
                    dokumentasi_event: dokumentasiEvent,
                    link_pdf: linkEvent,
                    link_pendaftaran: linkPendaftaran,
                    id_divisi: idDivisi
                }, namaBidang))

                showForm(false)
            } else {
                if (headerEvent !== null && gambarEvent !== null) {
                    dispatch(AsyncCreateEvent({
                        judul_event: judulEvent,
                        penulis_event: penulisEvent,
                        tanggal_mulai_event: tanggalMulaiEvent,
                        tanggal_selesai_event: tanggalSelesaiEvent,
                        isi_event: isiEvent,
                        kategori_event: kategoriEvent,
                        status_event: statusEvent,
                        header_event: headerEvent,
                        gambar_event: gambarEvent,
                        dokumentasi_event: dokumentasiEvent,
                        link_pdf: linkEvent,
                        link_pendaftaran: linkPendaftaran,
                        id_divisi: idDivisi
                    }, namaBidang))
                    showForm(false)
                } else {
                    setError(true)
                }
            }
        }

    }

    function getDraft() {
        const listDraft = localStorage.getItem('draft_event')
        setDraft(JSON.parse(listDraft))
    }

    function handleCreateDraft() {
        const data = {
            judul_event: judulEvent,
            penulis_event: penulisEvent,
            tanggal_mulai_event: tanggalMulaiEvent,
            tanggal_selesai_event: tanggalSelesaiEvent,
            isi_event: isiEvent,
            kategori_event: kategoriEvent,
            status_event: statusEvent,
            link_pdf: linkEvent,
            link_pendaftaran: linkPendaftaran,
            nama_bidang: namaBidang,
            id_divisi: idDivisi
        }

        if (draft === null) {
            const listDraft = [data]
            localStorage.setItem('draft_event', JSON.stringify(listDraft))
            getDraft()
        } else {
            const listDraft = [...draft, data]
            localStorage.setItem('draft_event', JSON.stringify(listDraft))
            getDraft()
        }
        setMakeDraft(false)
        setSuccessDraft(true)

        setTimeout(() => {
            showForm(false)
        }, 2000);
    }

    // Check if event is one day or not
    useEffect(() => {
        if (currentData?.tanggal_selesai_event === null || currentData?.tanggal_selesai_event === undefined) {
            setDurasi(true)
        } else {
            setDurasi(false)
        }
    }, [currentData])

    useEffect(() => {
        getDraft()
    }, [])

    return (
        <Form onSubmit={(e) => handleAddProker(e)}>
            <InputImage getData={setHeaderEvent} label="Upload Gambar Heading *" currentData={headerEvent} />
            <Form.Group>
                <Form.Label>Judul <span className="required">*</span></Form.Label>
                <Form.Control placeholder='Nama Program' required value={judulEvent} onChange={(e) => setJudulEvent(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Penulis <span className="required">*</span></Form.Label>
                <Form.Control placeholder='Penulis Laporan Program' required value={penulisEvent} onChange={(e) => setPenulisEvent(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-4">
                <Form.Label>Durasi Waktu <span className="required">*</span></Form.Label>
                <Form.Check
                    onChange={() => setDurasi(true)}
                    label="1 Hari"
                    name="group1"
                    type={'radio'}
                />
                <Form.Check
                    onChange={() => setDurasi(false)}
                    label="> 1 Hari"
                    name="group1"
                    type={'radio'}
                />
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Tanggal Mulai <span className="required">*</span></Form.Label>
                        <Form.Control type="date" required value={tanggalMulaiEvent?.toString().substring(0, 10)} onChange={(e) => setTanggalMulaiEvent(e.target.value)} />
                    </Form.Group>
                </Col>
                {!durasi && (
                    <Col>
                        <Form.Label>Tanggal Selesai <span className="required">*</span></Form.Label>
                        <Form.Control type="date" required value={tanggalSelesaiEvent?.toString().substring(0, 10)} onChange={(e) => setTanggalSelesaiEvent(e.target.value)} />
                    </Col>
                )}
            </Row>
            <Form.Group>
                <Row>
                    <Col>
                        <Form.Label>Status <span className="required">*</span></Form.Label>
                        <Form.Select value={statusEvent} onChange={(e) => setStatusEvent(e.target.value)}>
                            <option value="Upcoming">Upcoming</option>
                            <option value="On Going">On Going</option>
                            <option value="Done">Done</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Label>Kategori <span className="required">*</span></Form.Label>
                        <Form.Select value={kategoriEvent} onChange={(e) => setKategoriEvent(e.target.value)}>
                            <option value="Internal HIMSI">Internal</option>
                            <option value="Eksternal HIMSI">Eksternal</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Form.Group>
            <Form.Group>
                <Form.Label>Isi <span className="required">*</span></Form.Label>
                <Editor defaultData={isiEvent} setData={setIsiEvent} />
            </Form.Group>
            <InputImage getData={setGambarEvent} label="Upload Foto Preview (Poster) *" currentData={gambarEvent} />
            <InputManyImage getData={setDokumentasiEvent} currentData={dokumentasiEvent} label="Upload Foto Dokumentasi (opsional)" />
            <Form.Group>
                <Form.Label>Link Booklet (PDF) <Linking /> <span className="required">(Opsional)</span></Form.Label>
                <Form.Control placeholder='https://drive.google.com/' value={linkEvent} onChange={(e) => setLinkEvent(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Link Pendaftaran <Linking /> <span className="required">*</span></Form.Label>
                <Form.Control placeholder='https://' required value={linkPendaftaran} onChange={(e) => setLinkPendaftaran(e.target.value)} />
            </Form.Group>
            <div className="form-cta gap-3">
                <button onClick={() => setMakeDraft(true)} className="form-cancel-button" type="button">Hapus</button>
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
            {/* Error Modal */}
            <InfoModal show={error} setShow={setError} value="Error! Image Cannot Empty" type="error" />
            {/* Success Draft Modal */}
            <InfoModal show={successDraft} setShow={setSuccessDraft} value="Draft has been created" type="draft" />
            {/* CTA Modal */}
            <CTAModal show={makeDraft} setShow={setMakeDraft} value="Are you sure to delete this Article?" action1={showForm} action2={handleCreateDraft} />
        </Form>
    )
}