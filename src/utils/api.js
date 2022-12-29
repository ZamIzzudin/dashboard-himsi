import axios from 'axios'
// import cookies from './cookies'

const api = (() => {

    const baseUrl = 'https://himsi-website-be.vercel.app'
    // const form = new FormData()

    axios.defaults.withCredentials = true

    // Auth
    async function Login(email, password) {
        const url = baseUrl + '/login'

        const data = {
            email, password
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
        const url = baseUrl + '/college-link'

        const response = await axios.get(url)
        return response.data.data
    }

    async function CreateLink(data) {
        const url = baseUrl + '/college-link'

        const response = await axios.post(url, data)
        return response.data.data
    }

    async function EditLink(data) {
        const url = baseUrl + '/collage-link/' + data._id

        const response = await axios.put(url, data)
        return response.data.data
    }

    async function RemoveLink(_id) {
        const url = baseUrl + '/collage-link/' + _id

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

        const response = await axios.post(url, data)
        return response.data.data
    }

    async function EditBerita(data) {
        const url = baseUrl + '/berita/' + data._id

        const response = await axios.put(url, data)
        return response.data.data
    }

    async function RemoveBerita(_id) {
        const url = baseUrl + '/berita/' + _id

        const response = await axios.delete(url)
        return response.data.data
    }

    async function GetAllUser() {
        const url = baseUrl + '/admin'

        try {
            const response = await axios.get(url, {
                credentials: "include"
            })
            return response
        } catch (err) {
            console.log(err)
        }

    }

    return {
        Login,
        Refresh,
        GetAllUser,
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
        RemoveBerita
    }
})()

export default api