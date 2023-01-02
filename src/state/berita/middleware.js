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
        dispatch(showLoading())
        try {
            await api.CreateBerita(data);

            const response = await api.GetAllBerita();
            dispatch(CreateBeritaAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading())
    }
}

function AsyncEditBerita(data) {
    return async dispatch => {
        dispatch(showLoading())

        try {
            await api.EditBerita(data);

            const response = await api.GetAllBerita();
            dispatch(EditBeritaAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading())
    }
}

function AsyncRemoveBerita(id) {
    return async dispatch => {
        dispatch(showLoading())

        try {
            await api.RemoveBerita(id);

            const response = await api.GetAllBerita();
            dispatch(RemoveBeritaAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading())
    }
}

export { AsyncGetAllBerita, AsyncCreateBerita, AsyncEditBerita, AsyncRemoveBerita }