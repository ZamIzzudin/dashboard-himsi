import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { GetInfoFooterAction, EditInfoFooterAction } from './action'
import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function asyncGetInfoFooter() {
    return async dispatch => {
        dispatch(showLoading())

        try {
            const response = await api.GetFooter()
            dispatch(GetInfoFooterAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Get Footer Data'))
        }

        dispatch(hideLoading())
    }
}

function asyncEditInfoFooter(data) {
    return async dispatch => {
        dispatch(showLoading())

        try {
            await api.EditFooter(data)
            dispatch(ShowSuccess('Success Edit Footer Data'))

            const response = await api.GetFooter()
            dispatch(EditInfoFooterAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Edit Footer Data'))
        }

        dispatch(hideLoading())
    }
}


export { asyncGetInfoFooter, asyncEditInfoFooter }

