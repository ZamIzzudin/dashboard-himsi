import axios from 'axios'
import cookies from './cookies'

const api = (() => {

    const baseUrl = 'https://himsi-website-be.vercel.app'

    axios.defaults.withCredentials = true

    async function Login(email, password) {
        const url = baseUrl + '/login'

        const data = {
            email,
            password
        }

        await axios.post(url, data).then(res => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
            cookies.remove('refreshToken')
            cookies.add('refreshToken', res.data.accessToken, 7)
        }).catch(err => {
            console.log(err)
        })

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

    return {
        Login,
        Refresh
    }
})()

export default api