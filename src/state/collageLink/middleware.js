import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllLinkAction, CreateLinkAction, EditLinkAction, RemoveLinkAction } from './action'

function AsyncGetAllLink() {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.GetAllLink()
            dispatch(GetAllLinkAction(response))


        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}

function AsyncCreateLink(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.CreateLink(data);

            const response = await api.GetAllLink();
            dispatch(CreateLinkAction(response))
        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}

function AsyncEditLink(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.EditLink(data);

            const response = await api.GetAllLink();
            dispatch(EditLinkAction(response))
        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}

function AsyncRemoveLink(id) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.RemoveLink(id);

            const response = await api.GetAllLink();
            dispatch(RemoveLinkAction(response))
        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}

export { AsyncGetAllLink, AsyncCreateLink, AsyncEditLink, AsyncRemoveLink }