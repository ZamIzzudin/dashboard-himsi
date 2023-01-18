import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { GetDataHimpunanAction, EditDataHimpunanAction } from './action'
import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function asyncGetDataHimpunan() {
    return async dispatch => {
        dispatch(showLoading())

        try {
            const response = await api.GetDataHimpunan()
            dispatch(GetDataHimpunanAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Get Himpunan Data'))
        }

        dispatch(hideLoading())
    }
}

function asyncEditDataHimpunan(data) {
    return async dispatch => {
        dispatch(showLoading())

        try {
            await api.EditDataHimpunan(data)
            dispatch(ShowSuccess('Success Edit Himpunan Data'))

            const response = await api.GetDataHimpunan()
            dispatch(EditDataHimpunanAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Edit Himpunan Data'))
        }

        dispatch(hideLoading())
    }
}


export { asyncGetDataHimpunan, asyncEditDataHimpunan }

