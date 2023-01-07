import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllPengurusAction, CreatePengurusAction, EditPengurusAction, RemovePengurusAction } from './action'

function AsyncGetAllPengurus(bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            const response = await api.GetPengurus(bidang)
            dispatch(GetAllPengurusAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading());
    }
}

function AsyncCreatePengurus(data, bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.CreatePengurus(data)

            const response = await api.GetPengurus(bidang)
            dispatch(CreatePengurusAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading());
    }
}

function AsyncEditPengurus(data, bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.EditPengurus(data)

            const response = await api.GetPengurus(bidang)
            dispatch(EditPengurusAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading());
    }
}

function AsyncRemovePengurus(id, bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.RemovePengurus(id)

            const response = await api.GetPengurus(bidang)
            dispatch(RemovePengurusAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading());
    }
}

export { AsyncGetAllPengurus, AsyncCreatePengurus, AsyncEditPengurus, AsyncRemovePengurus }