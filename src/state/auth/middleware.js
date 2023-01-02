import { LoginAction, RefreshTokenAction, LogoutAction } from './action'
import { ShowError, HideError } from '../error/middleware'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
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

            // Pass to Action
            dispatch(LoginAction(data))
            dispatch(HideError())
        } catch (err) {
            dispatch(ShowError('Cannot Login'))
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
            dispatch(RefreshTokenAction(response.data.accessToken))

        } catch (err) {
            console.log(err)
        }
    }
}

function asyncLogout() {
    return dispatch => {
        dispatch(showLoading())

        try {
            dispatch(LogoutAction())
            cookies.remove('refreshToken')

            // Set Route to default
            window.location.assign("/")
        } catch (err) {
            console.log(err)
        }

        dispatch(hideLoading())
    }
}

export { asyncLogin, asyncRefreshToken, asyncLogout }