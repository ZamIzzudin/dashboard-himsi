import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllBidangAction, CreateBidangAction, EditBidangAction, RemoveBidangAction } from './action'

function AsyncGetAllBidang() {
    return async dispatch => {
        dispatch(showLoading());

        try {
            const response = await api.GetBidang()
            dispatch(GetAllBidangAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading());
    }
}

function AsyncCreateBidang(data) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.CreateBidang(data)

            const response = await api.GetBidang()
            dispatch(CreateBidangAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading());
    }
}

function AsyncEditBidang(id, data) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.EditBidang(id, data)

            const response = await api.GetBidang()
            dispatch(EditBidangAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading());
    }
}

function AsyncRemoveBidang(id) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.RemoveBidang(id)

            const response = await api.GetBidang()
            dispatch(RemoveBidangAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading());
    }
}

export { AsyncGetAllBidang, AsyncCreateBidang, AsyncEditBidang, AsyncRemoveBidang }