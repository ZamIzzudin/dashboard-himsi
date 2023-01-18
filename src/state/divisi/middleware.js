import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllDivisiAction, CreateDivisiAction, EditDivisiAction, RemoveDivisiAction } from './action'
import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function AsyncGetAllDivisi(bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            const response = await api.GetDivisi(bidang)
            dispatch(GetAllDivisiAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Get Divisi'))
        }

        dispatch(hideLoading());
    }
}

function AsyncCreateDivisi(data, bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.CreateDivisi(data)
            dispatch(ShowSuccess('Success Create Divisi'))

            const response = await api.GetDivisi(bidang)
            dispatch(CreateDivisiAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Create Divisi'))
        }

        dispatch(hideLoading());
    }
}

function AsyncEditDivisi(data, bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.EditDivisi(data)
            dispatch(ShowSuccess('Success Edit Divisi'))

            const response = await api.GetDivisi(bidang)
            dispatch(EditDivisiAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Edit Divisi'))
        }

        dispatch(hideLoading());
    }
}

function AsyncRemoveDivisi(id, bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.RemoveDivisi(id)
            dispatch(ShowSuccess('Success Remove Divisi'))

            const response = await api.GetDivisi(bidang)
            dispatch(RemoveDivisiAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Remove Divisi'))
        }

        dispatch(hideLoading());
    }
}

export { AsyncGetAllDivisi, AsyncCreateDivisi, AsyncEditDivisi, AsyncRemoveDivisi }