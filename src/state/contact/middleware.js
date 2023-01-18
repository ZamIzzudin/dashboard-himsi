import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetContactAction, CreateContactAction, EditContactAction, RemoveContactAction } from './action'
import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function AsyncGetContact() {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.GetContact()
            dispatch(GetContactAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Get Contact'))
        }
        dispatch(hideLoading())
    }
}

function AsyncCreateContact(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.CreateLink(data);
            dispatch(ShowSuccess('Success Create Contact'))

            const response = await api.GetContact();
            dispatch(CreateContactAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Create Contact'))
        }
        dispatch(hideLoading())
    }
}

function AsyncEditContact(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.EditLink(data);
            dispatch(ShowSuccess('Success Edit Contact'))

            const response = await api.GetContact();
            dispatch(EditContactAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Edit Contact'))
        }
        dispatch(hideLoading())
    }
}

function AsyncRemoveContact(id) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.RemoveLink(id);
            dispatch(ShowSuccess('Success Remove Contact'))

            const response = await api.GetContact();
            dispatch(RemoveContactAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Remove Contact'))
        }
        dispatch(hideLoading())
    }
}

export { AsyncGetContact, AsyncCreateContact, AsyncEditContact, AsyncRemoveContact }