import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllEventAction, CreateEventAction, EditEventAction, RemoveEventAction } from './action'
import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function AsyncGetAllEvent(bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            const response = await api.GetEvent(bidang)
            dispatch(GetAllEventAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Get Event'))
        }

        dispatch(hideLoading());
    }
}

function AsyncCreateEvent(data, bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.CreateEvent(data)
            dispatch(ShowSuccess('Success Create Event'))

            const response = await api.GetEvent(bidang)
            dispatch(CreateEventAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Create Event'))
        }

        dispatch(hideLoading());
    }
}

function AsyncEditEvent(data, bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.EditEvent(data)
            dispatch(ShowSuccess('Success Edit Event'))

            const response = await api.GetEvent(bidang)
            dispatch(EditEventAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Edit Event'))
        }

        dispatch(hideLoading());
    }
}

function AsyncRemoveEvent(id, bidang) {
    return async dispatch => {
        dispatch(showLoading());

        try {
            await api.RemoveEvent(id)
            dispatch(ShowSuccess('Success Remove Event'))

            const response = await api.GetEvent(bidang)
            dispatch(RemoveEventAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Remove Event'))
        }

        dispatch(hideLoading());
    }
}

export { AsyncGetAllEvent, AsyncCreateEvent, AsyncEditEvent, AsyncRemoveEvent }