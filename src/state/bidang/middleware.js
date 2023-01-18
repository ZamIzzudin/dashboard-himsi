import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllBidangAction, CreateBidangAction, EditBidangAction, RemoveBidangAction } from './action'
import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function AsyncGetAllBidang() {
    return async dispatch => {
        dispatch(showLoading());

        try {
            const response = await api.GetBidang()
            dispatch(GetAllBidangAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Get Bidang'))
        }

        dispatch(hideLoading());
    }
}

function AsyncCreateBidang(data) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.CreateBidang(data)
            dispatch(ShowSuccess('Success Create Bidang'))

            const response = await api.GetBidang()
            dispatch(CreateBidangAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Create Bidang'))
        }

        dispatch(hideLoading());
    }
}

function AsyncEditBidang(id, data) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.EditBidang(id, data)
            dispatch(ShowSuccess('Success Edit Bidang'))

            const response = await api.GetBidang()
            dispatch(EditBidangAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Edit Bidang'))
        }

        dispatch(hideLoading());
    }
}

function AsyncRemoveBidang(id) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.RemoveBidang(id)
            dispatch(ShowSuccess('Success Remove Bidang'))

            const response = await api.GetBidang()
            dispatch(RemoveBidangAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Remove Bidang'))
        }

        dispatch(hideLoading());
    }
}

export { AsyncGetAllBidang, AsyncCreateBidang, AsyncEditBidang, AsyncRemoveBidang }