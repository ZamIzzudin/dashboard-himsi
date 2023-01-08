import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllSocmedAction, EditSocmedAction } from './action'

function AsyncGetAllSocmed() {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.GetSocmed()
            dispatch(GetAllSocmedAction(response))
        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}

function AsyncEditSocmed(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.EditSocmed(data)

            const response = await api.GetSocmed()
            dispatch(EditSocmedAction(response))
        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}

export { AsyncGetAllSocmed, AsyncEditSocmed }
