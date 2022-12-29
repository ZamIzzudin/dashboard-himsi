import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllBeritaAction, CreateBeritaAction, EditBeritaAction, RemoveBeritaAction } from './action'

function AsyncGetAllBerita() {
    return async dispatch => {
        try {
            dispatch(showLoading())

            const response = await api.GetAllBerita()
            dispatch(GetAllBeritaAction(response))

            dispatch(hideLoading())
        } catch (err) {
            alert(err.message)
        }
    }
}

function AsyncCreateBerita(data) {
    return async dispatch => {
        try {
            dispatch(showLoading())

            await api.CreateBerita(data);

            const response = await api.GetAllBerita();
            dispatch(CreateBeritaAction(response))

            dispatch(hideLoading())
        } catch (err) {
            alert(err.message)
        }
    }
}

function AsyncEditBerita(data) {
    return async dispatch => {
        try {
            dispatch(showLoading())

            await api.EditBerita(data);

            const response = await api.GetAllBerita();
            dispatch(EditBeritaAction(response))

            dispatch(hideLoading())
        } catch (err) {
            alert(err.message)
        }
    }
}

function AsyncRemoveBerita(id) {
    return async dispatch => {
        try {
            dispatch(showLoading())

            await api.RemoveBerita(id);

            const response = await api.GetAllBerita();
            dispatch(RemoveBeritaAction(response))

            dispatch(hideLoading())
        } catch (err) {
            alert(err.message)
        }
    }
}

export { AsyncGetAllBerita, AsyncCreateBerita, AsyncEditBerita, AsyncRemoveBerita }