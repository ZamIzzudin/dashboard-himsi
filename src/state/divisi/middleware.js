import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllDivisiAction, CreateDivisiAction, EditDivisiAction, RemoveDivisiAction } from './action'

function AsyncGetAllDivisi(bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            const response = await api.GetDivisi(bidang)
            dispatch(GetAllDivisiAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading());
    }
}

function AsyncCreateDivisi(data, bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.CreateDivisi(data)

            const response = await api.GetDivisi(bidang)
            dispatch(CreateDivisiAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading());
    }
}

function AsyncEditDivisi(data, bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.EditDivisi(data)

            const response = await api.GetDivisi(bidang)
            dispatch(EditDivisiAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading());
    }
}

function AsyncRemoveDivisi(id, bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.RemoveDivisi(id)

            const response = await api.GetDivisi(bidang)
            dispatch(RemoveDivisiAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading());
    }
}

export { AsyncGetAllDivisi, AsyncCreateDivisi, AsyncEditDivisi, AsyncRemoveDivisi }