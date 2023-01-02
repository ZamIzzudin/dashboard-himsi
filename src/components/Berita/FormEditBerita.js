import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AsyncCreateBerita, AsyncEditBerita } from '../../state/berita/middleware'

import Editor from '../Editor'
import InputImage from '../InputImage'

import '../../styles/components/FormLayout.css'

export default function FormEditBerita({ currentData, showForm }) {
    const dispatch = useDispatch()

    const [judulBerita, setJudulBerita] = useState(currentData?.judul_berita)
    const [tanggalBerita, setTanggalBerita] = useState(currentData?.tanggal_berita)
    const [penulisBerita, setPenulisBerita] = useState(currentData?.penulis_berita)
    const [kategoriBerita, setKategoriBerita] = useState(currentData?.kategori_berita || 'Beasiswa')
    const [isiBerita, setIsiBerita] = useState(currentData?.isi_berita)
    const [linkBerita, setLinkBerita] = useState(currentData?.link_berita)
    const [gambarHeadingBerita, setGambarHeadingBerita] = useState(currentData?.header_berita.url)
    const [uploadFileBerita, setUploadFileBerita] = useState(currentData?.gambar_berita.url)

    function handleManageBerita(e) {
        e.preventDefault()
        if (currentData !== null) {
            dispatch(AsyncEditBerita({
                _id: currentData._id,
                tanggal_berita: tanggalBerita,
                penulis_berita: penulisBerita,
                kategori_berita: kategoriBerita,
                judul_berita: judulBerita,
                isi_berita: isiBerita,
                gambar_berita: uploadFileBerita || currentData?.gambar_berita.url,
                header_berita: gambarHeadingBerita || currentData?.header_berita.url,
                link_berita: linkBerita
            }))
            showForm(false)
        } else {
            dispatch(AsyncCreateBerita({
                header_berita: gambarHeadingBerita,
                tanggal_berita: tanggalBerita,
                penulis_berita: penulisBerita,
                kategori_berita: kategoriBerita,
                judul_berita: judulBerita,
                isi_berita: isiBerita,
                gambar_berita: uploadFileBerita,
                link_berita: linkBerita
            }))
            showForm(false)
        }
    }

    return (
        <Form onSubmit={(e) => handleManageBerita(e)}>
            <Form.Group>
                <InputImage getData={setGambarHeadingBerita} label="Upload Gambar Heading" currentData={gambarHeadingBerita} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Tanggal</Form.Label>
                <Form.Control required value={tanggalBerita?.toString().substring(0, 10)} type="date" onChange={(e) => setTanggalBerita(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Penulis</Form.Label>
                <Form.Control required value={penulisBerita} onChange={(e) => setPenulisBerita(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Kategori</Form.Label>
                <Form.Select value={kategoriBerita} onChange={(e) => setKategoriBerita(e.target.value)}>
                    <option value="Beasiswa">Beasiswa</option>
                    <option value="Beasiswa">Info Perkuliahan</option>
                    <option value="Beasiswa">Info Magang</option>
                    <option value="Beasiswa">Info Lomba</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Judul</Form.Label>
                <Form.Control required value={judulBerita} onChange={(e) => setJudulBerita(e.target.value)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Isi</Form.Label>
                <Editor defaultData={isiBerita} setData={setIsiBerita} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Upload File</Form.Label>
                <InputImage getData={setUploadFileBerita} label="Upload Gambar Berita" currentData={uploadFileBerita} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Link</Form.Label>
                <Form.Control required value={linkBerita} onChange={(e) => setLinkBerita(e.target.value)} />
            </Form.Group>
            <div className="form-cta">
                <button className="form-submit-button" type="submit">Simpan</button>
            </div>
        </Form>
    )
}