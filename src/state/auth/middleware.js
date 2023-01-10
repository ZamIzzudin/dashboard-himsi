import { LoginAction, RefreshTokenAction, LogoutAction } from './action'
import { ShowError, HideError } from '../error/middleware'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import axios from 'axios'
import api from '../../utils/api'
import cookies from '../../utils/cookies'

function asyncLogin(email, password) {
    return async dispatch => {
        dispatch(showLoading())

        try {
            // Fetch Login
            const response = await api.Login(email, password)

            //Setup Cookies 
            cookies.remove('refreshToken')
            cookies.add('refreshToken', response.data.accessToken, 7)

            const data = {
                role: response.data.role,
                token: response.data.accessToken,
            }

            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`
            localStorage.setItem('dashboard_himsi_login', JSON.stringify(data))

            // Pass to Action
            dispatch(LoginAction(data))
            dispatch(HideError())
        } catch (err) {
            dispatch(ShowError('Cannot Login'))
        }

        dispatch(hideLoading())
    }
}

function asyncCheckLogin() {
    return async dispatch => {
        dispatch(showLoading())

        try {
            // Get From Local Storage
            let auth_data = JSON.parse(localStorage.getItem('dashboard_himsi_login'));

            //Setup Cookies 
            cookies.remove('refreshToken')
            cookies.add('refreshToken', auth_data.token, 7)

            axios.defaults.headers.common['Authorization'] = `Bearer ${auth_data.token}`
            localStorage.setItem('dashboard_himsi_login', JSON.stringify(auth_data))

            // Pass to Action
            dispatch(LoginAction(auth_data))
            dispatch(HideError())
        } catch (err) {
            // Do Nothing
        }

        dispatch(hideLoading())
    }
}

function asyncRefreshToken() {
    return async dispatch => {
        try {
            const response = await api.Refresh()

            cookies.remove('refreshToken')
            cookies.add('refreshToken', response.data.accessToken, 7)

            let auth_data = JSON.parse(localStorage.getItem('dashboard_himsi_login'));
            auth_data.token = response.data.accessToken

            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.accessToken}`
            localStorage.setItem('dashboard_himsi_login', JSON.stringify(auth_data))

            dispatch(RefreshTokenAction(response.data.accessToken))
        } catch (err) {
            dispatch(LogoutAction())
            cookies.remove('refreshToken')
            localStorage.clear()

            // Set Route to default
            window.location.assign("/")
        }
    }
}

function asyncLogout() {
    return dispatch => {
        dispatch(showLoading())

        try {
            dispatch(LogoutAction())
            cookies.remove('refreshToken')
            localStorage.clear()
            delete axios.defaults.headers.common['Authorization']

            // Set Route to default
            window.location.assign("/")
        } catch (err) {
            console.log(err)
        }

        dispatch(hideLoading())
    }
}

export { asyncLogin, asyncCheckLogin, asyncRefreshToken, asyncLogout }