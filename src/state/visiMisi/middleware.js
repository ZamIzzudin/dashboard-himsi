import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { GetVisiMisiAction, EditVisiMisiAction } from './action'

function AsyncGetVisiMisi() {
    return async dispatch => {
        dispatch(showLoading())

        try {
            const response = await api.GetVisiMisi()
            dispatch(GetVisiMisiAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading())
    }
}

function AsyncEditVisiMisi(data) {
    return async dispatch => {
        dispatch(showLoading())

        try {
            await api.EditVisiMisi(data)

            const response = await api.GetVisiMisi()
            dispatch(EditVisiMisiAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading())
    }
}

export { AsyncGetVisiMisi, AsyncEditVisiMisi }