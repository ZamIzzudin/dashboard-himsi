import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllLinkAction, CreateLinkAction, EditLinkAction, RemoveLinkAction } from './action'

function AsyncGetAllLink() {
    return async dispatch => {
        try {
            dispatch(showLoading())

            const response = await api.GetAllLink()
            dispatch(GetAllLinkAction(response))

            dispatch(hideLoading())
        } catch (err) {
            alert(err.message)
        }
    }
}

function AsyncCreateLink(data) {
    return async dispatch => {
        try {
            dispatch(showLoading())

            await api.CreateLink(data);

            const response = await api.GetAllLink();
            dispatch(CreateLinkAction(response))

            dispatch(hideLoading())
        } catch (err) {
            alert(err.message)
        }
    }
}

function AsyncEditLink(data) {
    return async dispatch => {
        try {
            dispatch(showLoading())

            await api.EditLink(data);

            const response = await api.GetAllLink();
            dispatch(EditLinkAction(response))

            dispatch(hideLoading())
        } catch (err) {
            alert(err.message)
        }
    }
}

function AsyncRemoveLink(id) {
    return async dispatch => {
        try {
            dispatch(showLoading())

            await api.RemoveLink(id);

            const response = await api.GetAllFAQ();
            dispatch(RemoveLinkAction(response))

            dispatch(hideLoading())
        } catch (err) {
            alert(err.message)
        }
    }
}

export { AsyncGetAllLink, AsyncCreateLink, AsyncEditLink, AsyncRemoveLink }