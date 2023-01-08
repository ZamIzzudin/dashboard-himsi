import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetContactAction, CreateContactAction, EditContactAction, RemoveContactAction } from './action'

function AsyncGetContact() {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.GetContact()
            dispatch(GetContactAction(response))


        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}

function AsyncCreateContact(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.CreateLink(data);

            const response = await api.GetContact();
            dispatch(CreateContactAction(response))
        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}

function AsyncEditContact(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.EditLink(data);

            const response = await api.GetContact();
            dispatch(EditContactAction(response))
        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}

function AsyncRemoveContact(id) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.RemoveLink(id);

            const response = await api.GetContact();
            dispatch(RemoveContactAction(response))
        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}

export { AsyncGetContact, AsyncCreateContact, AsyncEditContact, AsyncRemoveContact }