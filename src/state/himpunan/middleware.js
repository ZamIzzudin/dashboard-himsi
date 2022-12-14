import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { GetDataHimpunanAction, EditDataHimpunanAction } from './action'

function asyncGetDataHimpunan() {
    return async dispatch => {
        dispatch(showLoading())

        try {
            const response = await api.GetDataHimpunan()
            dispatch(GetDataHimpunanAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading())
    }
}

function asyncEditDataHimpunan(data) {
    return async dispatch => {
        dispatch(showLoading())

        try {
            await api.EditDataHimpunan(data)

            const response = await api.GetDataHimpunan()
            dispatch(EditDataHimpunanAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading())
    }
}


export { asyncGetDataHimpunan, asyncEditDataHimpunan }

