import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllBeritaAction, CreateBeritaAction, EditBeritaAction, RemoveBeritaAction } from './action'
import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function AsyncGetAllBerita() {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.GetAllBerita()
            dispatch(GetAllBeritaAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Get Article'))
        }
        dispatch(hideLoading())
    }
}

function AsyncCreateBerita(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.CreateBerita(data);
            dispatch(ShowSuccess('Success Create Article'))

            const response = await api.GetAllBerita();
            dispatch(CreateBeritaAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Create Article'))
        }

        dispatch(hideLoading())
    }
}

function AsyncEditBerita(data) {
    return async dispatch => {
        dispatch(showLoading())

        try {
            await api.EditBerita(data);
            dispatch(ShowSuccess('Success Edit Article'))

            const response = await api.GetAllBerita();
            dispatch(EditBeritaAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Edit Article'))
        }

        dispatch(hideLoading())
    }
}

function AsyncRemoveBerita(id) {
    return async dispatch => {
        dispatch(showLoading())

        try {
            await api.RemoveBerita(id);
            dispatch(ShowSuccess('Success Remove Article'))

            const response = await api.GetAllBerita();
            dispatch(RemoveBeritaAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Remove Article'))
        }

        dispatch(hideLoading())
    }
}

export { AsyncGetAllBerita, AsyncCreateBerita, AsyncEditBerita, AsyncRemoveBerita }