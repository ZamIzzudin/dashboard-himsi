import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { GetVisiMisiAction, EditVisiMisiAction } from './action'
import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function AsyncGetVisiMisi() {
    return async dispatch => {
        dispatch(showLoading())

        try {
            const response = await api.GetVisiMisi()
            dispatch(GetVisiMisiAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Get Visi Misi'))
        }

        dispatch(hideLoading())
    }
}

function AsyncEditVisiMisi(data) {
    return async dispatch => {
        dispatch(showLoading())

        try {
            await api.EditVisiMisi(data)
            dispatch(ShowSuccess('Success Edit Visi Misi'))

            const response = await api.GetVisiMisi()
            dispatch(EditVisiMisiAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Edit Visi Misi'))
        }

        dispatch(hideLoading())
    }
}

export { AsyncGetVisiMisi, AsyncEditVisiMisi }