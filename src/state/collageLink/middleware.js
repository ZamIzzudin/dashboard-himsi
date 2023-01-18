import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllLinkAction, CreateLinkAction, EditLinkAction, RemoveLinkAction } from './action'
import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function AsyncGetAllLink() {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.GetAllLink()
            dispatch(GetAllLinkAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Get Link'))
        }
        dispatch(hideLoading())
    }
}

function AsyncCreateLink(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.CreateLink(data);
            dispatch(ShowSuccess('Success Create Link'))

            const response = await api.GetAllLink();
            dispatch(CreateLinkAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Create Link'))
        }
        dispatch(hideLoading())
    }
}

function AsyncEditLink(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.EditLink(data);
            dispatch(ShowSuccess('Success Edit Link'))

            const response = await api.GetAllLink();
            dispatch(EditLinkAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Edit Link'))
        }
        dispatch(hideLoading())
    }
}

function AsyncRemoveLink(id) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.RemoveLink(id);
            dispatch(ShowSuccess('Success Remove Link'))

            const response = await api.GetAllLink();
            dispatch(RemoveLinkAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Remove Link'))
        }
        dispatch(hideLoading())
    }
}

export { AsyncGetAllLink, AsyncCreateLink, AsyncEditLink, AsyncRemoveLink }