import axios from 'axios'

const api = (() => {

    const baseUrl = process.env.REACT_APP_API_ENDPOINT

    axios.defaults.withCredentials = true

    // Auth
    async function Login(username, password) {
        const url = baseUrl + '/login'

        const data = {
            username, password
        }

        const response = await axios.post(url, data)

        return response

    }

    async function Refresh() {
        const url = baseUrl + '/refresh'

        try {
            const response = await axios.get(url, {
                credentials: "include"
            })
            return response
        } catch (err) {
            console.log(err)
        }

    }

    // FAQ
    async function GetAllFAQ() {
        const url = baseUrl + '/faq'

        const response = await axios.get(url)
        return response.data.data
    }

    async function CreateFAQ(data) {
        const url = baseUrl + '/faq'

        const response = await axios.post(url, data)
        return response.data.data
    }

    async function EditFAQ(data) {
        const url = baseUrl + '/faq/' + data._id

        const response = await axios.put(url, data)
        return response.data.data
    }

    async function RemoveFAQ(_id) {
        const url = baseUrl + '/faq/' + _id

        const response = await axios.delete(url)
        return response.data.data
    }

    // Link (Layanan Mahasiswa)
    async function GetAllLink() {
        const url = baseUrl + '/link'

        const response = await axios.get(url)
        return response.data.data
    }

    async function CreateLink(data) {
        const url = baseUrl + '/link'

        const response = await axios.post(url, data)
        return response.data.data
    }

    async function EditLink(data) {
        const url = baseUrl + '/link/' + data._id

        const response = await axios.put(url, data)
        return response.data.data
    }

    async function RemoveLink(_id) {
        const url = baseUrl + '/link/' + _id

        const response = await axios.delete(url)
        return response.data.data
    }

    // Berita
    async function GetAllBerita() {
        const url = baseUrl + '/berita'

        const response = await axios.get(url)
        return response.data.data
    }

    async function CreateBerita(data) {
        const url = baseUrl + '/berita'
        const form = new FormData()

        form.append('judul_berita', data.judul_berita)
        form.append('penulis_berita', data.penulis_berita)
        form.append('tanggal_berita', data.tanggal_berita)
        form.append('isi_berita', data.isi_berita)
        form.append('link_berita', data.link_berita)
        form.append('header_berita', data.header_berita.file)
        form.append('gambar_berita', data.gambar_berita.file)

        const response = await axios.post(url, form)
        return response.data.data
    }

    async function EditBerita(data) {
        const url = baseUrl + '/berita/' + data._id

        const form = new FormData()

        form.append('judul_berita', data.judul_berita)
        form.append('penulis_berita', data.penulis_berita)
        form.append('tanggal_berita', data.tanggal_berita)
        form.append('isi_berita', data.isi_berita)
        form.append('link_berita', data.link_berita)
        form.append('header_berita', data.header_berita.file || data.header_berita)
        form.append('gambar_berita', data.gambar_berita.file || data.gambar_berita)

        const response = await axios.put(url, form)
        return response.data.data
    }

    async function RemoveBerita(_id) {
        const url = baseUrl + '/berita/' + _id

        const response = await axios.delete(url)
        return response.data.data
    }

    // User
    async function GetAllUser() {
        const url = baseUrl + '/admin'

        try {
            const response = await axios.get(url)
            return response.data.data
        } catch (err) {
            console.log(err)
        }

    }

    async function CreateUser(data) {
        const url = baseUrl + '/admin'

        const response = await axios.post(url, data)
        return response.data.data
    }

    async function EditUser(data) {
        const url = baseUrl + '/admin/' + data._id

        const response = await axios.put(url, data)
        return response.data.data
    }

    async function RemoveUser(_id) {
        const url = baseUrl + '/admin/' + _id

        const response = await axios.delete(url)
        return response.data.data
    }

    // Himpunan
    async function GetDataHimpunan() {
        const url = baseUrl + '/himpunan'

        try {
            const response = await axios.get(url)
            return response.data.data
        } catch (err) {
            console.log(err)
        }

    }

    async function EditDataHimpunan(data) {
        const url = baseUrl + '/himpunan'

        const form = new FormData()

        form.append('nama_himpunan', data.nama_himpunan)
        form.append('nama_universitas', data.nama_universitas.file)
        form.append('logo_himpunan', data.logo_himpunan.file)
        form.append('gambar_struktur', data.gambar_struktur.file)

        const response = await axios.put(url, form)
        return response.data.data

    }

    // Visi Misi
    async function GetVisiMisi() {
        const url = baseUrl + '/visi'

        try {
            const response = await axios.get(url)
            return response.data.data
        } catch (err) {
            console.log(err)
        }

    }

    async function EditVisiMisi(data) {
        const url = baseUrl + '/visi'

        const response = await axios.put(url, data)
        return response.data.data
    }

    // Contact
    async function GetContact() {
        const url = baseUrl + '/contact'

        try {
            const response = await axios.get(url)
            return response.data.data
        } catch (err) {
            console.log(err)
        }

    }

    async function CreateContact(data) {
        const url = baseUrl + '/contact'

        const response = await axios.post(url, data)
        return response.data.data
    }

    async function EditContact(data) {
        const url = baseUrl + '/contact/' + data._id

        const response = await axios.put(url, data)
        return response.data.data
    }

    async function RemoveContact(_id) {
        const url = baseUrl + '/contact/' + _id

        const response = await axios.delete(url)
        return response.data.data
    }

    // Social Media
    async function GetSocmed() {
        const url = baseUrl + '/socmed'

        try {
            const response = await axios.get(url)
            return response.data.data
        } catch (err) {
            console.log(err)
        }

    }

    async function EditSocmed(data) {
        const url = baseUrl + '/socmed/' + data._id

        const response = await axios.put(url, data)
        return response.data.data
    }

    // Bidang
    // Divisi
    // Anggota
    // Program Kerja / Events
    // Partners
    // Upcoming Event
    // Slider Information

    return {
        Login,
        Refresh,
        GetAllFAQ,
        CreateFAQ,
        EditFAQ,
        RemoveFAQ,
        GetAllLink,
        CreateLink,
        EditLink,
        RemoveLink,
        GetAllBerita,
        CreateBerita,
        EditBerita,
        RemoveBerita,
        GetAllUser,
        CreateUser,
        EditUser,
        RemoveUser,
        GetDataHimpunan,
        EditDataHimpunan,
        GetVisiMisi,
        EditVisiMisi,
        GetContact,
        CreateContact,
        EditContact,
        RemoveContact,
        GetSocmed,
        EditSocmed
    }
})()

export default api