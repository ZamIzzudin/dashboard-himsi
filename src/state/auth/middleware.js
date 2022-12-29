import { LoginAction, RefreshTokenAction, LogoutAction } from './action'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api'
import cookies from '../../utils/cookies'

function asyncLogin(email, password) {
    return async dispatch => {
        try {
            dispatch(showLoading())

            const response = await api.Login(email, password)

            cookies.remove('refreshToken')
            cookies.add('refreshToken', response.data.accessToken, 7)

            const data = {
                role: 'Super Admin',
                token: response.data.accessToken,
            }

            dispatch(LoginAction(data))

            dispatch(hideLoading())

        } catch (err) {
            console.log(err)
        }
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
        try {
            dispatch(showLoading())

            dispatch(LogoutAction())
            window.location.assign("/")
            cookies.remove('refreshToken')

            dispatch(hideLoading())
        } catch (err) {
            console.log(err)
        }
    }
}

export { asyncLogin, asyncRefreshToken, asyncLogout }