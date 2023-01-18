import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllPengurusAction, CreatePengurusAction, EditPengurusAction, RemovePengurusAction } from './action'
import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function AsyncGetAllPengurus(bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            const response = await api.GetPengurus(bidang)
            dispatch(GetAllPengurusAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Get Pengurus'))
        }

        dispatch(hideLoading());
    }
}

function AsyncCreatePengurus(data, bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.CreatePengurus(data)
            dispatch(ShowSuccess('Success Create Pengurus'))

            const response = await api.GetPengurus(bidang)
            dispatch(CreatePengurusAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Create Pengurus'))
        }

        dispatch(hideLoading());
    }
}

function AsyncEditPengurus(data, bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.EditPengurus(data)
            dispatch(ShowSuccess('Success Edit Pengurus'))

            const response = await api.GetPengurus(bidang)
            dispatch(EditPengurusAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Edit Pengurus'))
        }

        dispatch(hideLoading());
    }
}

function AsyncRemovePengurus(id, bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.RemovePengurus(id)
            dispatch(ShowSuccess('Success Remove Pengurus'))

            const response = await api.GetPengurus(bidang)
            dispatch(RemovePengurusAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Remove Pengurus'))
        }

        dispatch(hideLoading());
    }
}

export { AsyncGetAllPengurus, AsyncCreatePengurus, AsyncEditPengurus, AsyncRemovePengurus }