import { Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { AsyncCreateBerita, AsyncEditBerita } from '../../state/berita/middleware'

import { ReactComponent as Linking } from '../../assets/icons/Link.svg'
import Editor from '../Editor'
import KategoriFilterForm from '../KategoriFilterForm'
import InfoModal from '../InfoModal'
import CTAModal from '../CTAModal'
import InputImage from '../InputImage'

import '../../styles/components/FormLayout.css'

export default function FormEditBerita({ currentData, showForm, drafted }) {
    const dispatch = useDispatch()

    const [judulBerita, setJudulBerita] = useState(currentData?.judul_berita)
    const [penulisBerita, setPenulisBerita] = useState(currentData?.penulis_berita)
    const [kategoriBerita, setKategoriBerita] = useState(currentData?.kategori_berita || [])
    const [isiBerita, setIsiBerita] = useState(currentData?.isi_berita)
    const [linkPDF, setLinkPDF] = useState(currentData?.link_pdf || '')
    const [linkBerita, setLinkBerita] = useState(currentData?.link_berita || '')
    const [gambarHeadingBerita, setGambarHeadingBerita] = useState(currentData?.header_berita?.url || null)
    const [uploadFileBerita, setUploadFileBerita] = useState(currentData?.gambar_berita?.url || null)

    const [draft, setDraft] = useState([])
    const [makeDraft, setMakeDraft] = useState(false)
    const [successDraft, setSuccessDraft] = useState(false)
    const [error, setError] = useState(false)

    const timestamp = new Date(Date.now())

    function handleManageBerita(e) {
        e.preventDefault()
        if (drafted) {
            if (uploadFileBerita !== null && gambarHeadingBerita !== null) {
                dispatch(AsyncCreateBerita({
                    header_berita: gambarHeadingBerita,
                    penulis_berita: penulisBerita,
                    kategori_berita: kategoriBerita,
                    judul_berita: judulBerita,
                    isi_berita: isiBerita,
                    gambar_berita: uploadFileBerita,
                    link_berita: linkBerita,
                    link_pdf: linkPDF
                }))
                showForm(false)
            } else {
                setError(true)
            }
        } else {
            if (currentData !== null) {
                dispatch(AsyncEditBerita({
                    _id: currentData._id,
                    penulis_berita: penulisBerita,
                    kategori_berita: kategoriBerita,
                    judul_berita: judulBerita,
                    isi_berita: isiBerita,
                    gambar_berita: uploadFileBerita || currentData?.gambar_berita.url,
                    header_berita: gambarHeadingBerita || currentData?.header_berita.url,
                    link_berita: linkBerita,
                    link_pdf: linkPDF
                }))
                showForm(false)
            } else {
                if (uploadFileBerita !== null && gambarHeadingBerita !== null) {
                    dispatch(AsyncCreateBerita({
                        header_berita: gambarHeadingBerita,
                        penulis_berita: penulisBerita,
                        kategori_berita: kategoriBerita,
                        judul_berita: judulBerita,
                        isi_berita: isiBerita,
                        gambar_berita: uploadFileBerita,
                        link_berita: linkBerita,
                        link_pdf: linkPDF
                    }))
                    showForm(false)
                } else {
                    setError(true)
                }
            }
        }
    }

    function getDraft() {
        const listDraft = localStorage.getItem('draft_berita')
        setDraft(JSON.parse(listDraft))
    }

    function handleCreateDraft() {
        const data = {
            penulis_berita: penulisBerita,
            kategori_berita: kategoriBerita,
            tanggal_berita: timestamp.toISOString(),
            judul_berita: judulBerita,
            isi_berita: isiBerita,
            link_berita: linkBerita,
            link_pdf: linkPDF
        }

        if (draft === null) {
            const listDraft = [data]
            localStorage.setItem('draft_berita', JSON.stringify(listDraft))
            getDraft()
        } else {
            const listDraft = [...draft, data]
            localStorage.setItem('draft_berita', JSON.stringify(listDraft))
            getDraft()
        }
        setMakeDraft(false)
        setSuccessDraft(true)

        setTimeout(() => {
            showForm(false)
        }, 2000);
    }

    useEffect(() => {
        getDraft()
    }, [])

    return (
        <Form onSubmit={(e) => handleManageBerita(e)}>
            <Form.Group>
                <InputImage getData={setGambarHeadingBerita} label="Upload Gambar Heading" currentData={gambarHeadingBerita} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Judul <span className="required">*</span></Form.Label>
                <Form.Control placeholder='Judul Artikel' required value={judulBerita} onChange={(e) => setJudulBerita(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Penulis <span className="required">*</span></Form.Label>
                <Form.Control placeholder='Nama Penulis Artikel' required value={penulisBerita} onChange={(e) => setPenulisBerita(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Kategori <span className="required">*</span></Form.Label>
                <KategoriFilterForm currentData={kategoriBerita} setData={setKategoriBerita} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Isi <span className="required">*</span></Form.Label>
                <Editor defaultData={isiBerita} setData={setIsiBerita} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Upload File</Form.Label>
                <InputImage getData={setUploadFileBerita} label="Upload Foto Preview (Poster) *" currentData={uploadFileBerita} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Link PDF / Booklet<Linking /> (opsional)</Form.Label>
                <Form.Control placeholder="Link Google Drive" value={linkPDF} onChange={(e) => setLinkPDF(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Link Pendaftaran<Linking /> <span className="required">*</span></Form.Label>
                <Form.Control placeholder="https://" value={linkBerita} onChange={(e) => setLinkBerita(e.target.value)} />
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