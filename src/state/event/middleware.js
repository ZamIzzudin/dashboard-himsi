import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllEventAction, CreateEventAction, EditEventAction, RemoveEventAction } from './action'

function AsyncGetAllEvent(bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            const response = await api.GetEvent(bidang)
            dispatch(GetAllEventAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading());
    }
}

function AsyncCreateEvent(data, bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.CreateEvent(data)

            const response = await api.GetEvent(bidang)
            dispatch(CreateEventAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading());
    }
}

function AsyncEditEvent(data, bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.EditEvent(data)

            const response = await api.GetEvent(bidang)
            dispatch(EditEventAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading());
    }
}

function AsyncRemoveEvent(id, bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.RemoveEvent(id)

            const response = await api.GetEvent(bidang)
            dispatch(RemoveEventAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading());
    }
}

export { AsyncGetAllEvent, AsyncCreateEvent, AsyncEditEvent, AsyncRemoveEvent }