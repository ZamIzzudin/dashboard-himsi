import axios from 'axios'

const api = (() => {

    const baseUrl = 'base url'

    async function getSomething() {
        const url = baseUrl + '/endpoint'

        const response = await axios.get(url)

        return response
    }
    return {
        getSomething
    }
})()

export default api