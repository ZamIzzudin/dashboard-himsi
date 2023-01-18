import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllTautanAction, CreateTautanAction, EditTautanAction, RemoveTautanAction } from './action'
import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function AsyncGetAllTautan() {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.GetTautan()
            dispatch(GetAllTautanAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Get Tautan'))
        }
        dispatch(hideLoading())
    }
}

function AsyncCreateTautan(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.CreateLink(data);
            dispatch(ShowSuccess('Success Create Tautan'))

            const response = await api.GetTautan();
            dispatch(CreateTautanAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Create Tautan'))
        }
        dispatch(hideLoading())
    }
}

function AsyncEditTautan(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.EditLink(data);
            dispatch(ShowSuccess('Success Edit Tautan'))

            const response = await api.GetTautan();
            dispatch(EditTautanAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Edit Tautan'))
        }
        dispatch(hideLoading())
    }
}

function AsyncRemoveTautan(id) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.RemoveLink(id);
            dispatch(ShowSuccess('Success Remove Tautan'))

            const response = await api.GetTautan();
            dispatch(RemoveTautanAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Remove Tautan'))
        }
        dispatch(hideLoading())
    }
}

export { AsyncGetAllTautan, AsyncCreateTautan, AsyncEditTautan, AsyncRemoveTautan }