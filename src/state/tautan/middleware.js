import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllTautanAction, CreateTautanAction, EditTautanAction, RemoveTautanAction } from './action'

function AsyncGetAllTautan() {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.GetTautan()
            dispatch(GetAllTautanAction(response))


        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}

function AsyncCreateTautan(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.CreateLink(data);

            const response = await api.GetTautan();
            dispatch(CreateTautanAction(response))
        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}

function AsyncEditTautan(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.EditLink(data);

            const response = await api.GetTautan();
            dispatch(EditTautanAction(response))
        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}

function AsyncRemoveTautan(id) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.RemoveLink(id);

            const response = await api.GetTautan();
            dispatch(RemoveTautanAction(response))
        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}

export { AsyncGetAllTautan, AsyncCreateTautan, AsyncEditTautan, AsyncRemoveTautan }