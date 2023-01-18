import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllSocmedAction, EditSocmedAction } from './action'
import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function AsyncGetAllSocmed() {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.GetSocmed()
            dispatch(GetAllSocmedAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Get Socmed'))
        }
        dispatch(hideLoading())
    }
}

function AsyncEditSocmed(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.EditSocmed(data)
            dispatch(ShowSuccess('Success Edit Socmed'))

            const response = await api.GetSocmed()
            dispatch(EditSocmedAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Edit Socmed'))
        }
        dispatch(hideLoading())
    }
}

export { AsyncGetAllSocmed, AsyncEditSocmed }
