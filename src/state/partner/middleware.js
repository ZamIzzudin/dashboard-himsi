import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllPartnerAction, CreatePartnerAction, EditPartnerAction, RemovePartnerAction } from './action'
import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function AsyncGetAllPartner() {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.GetPatrner()
            dispatch(GetAllPartnerAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Get Partner'))
        }
        dispatch(hideLoading())
    }
}

function AsyncCreatePartner(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.CreatePartner(data)
            dispatch(ShowSuccess('Success Create Partner'))


            const response = await api.GetPatrner()
            dispatch(CreatePartnerAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Create Partner'))
        }
        dispatch(hideLoading())
    }
}

function AsyncEditPartner(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.EditPartner(data)
            dispatch(ShowSuccess('Success Edit Partner'))


            const response = await api.GetPatrner()
            dispatch(EditPartnerAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Edit Partner'))
        }
        dispatch(hideLoading())
    }
}

function AsyncRemovePartner(id) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.RemovePartner(id)
            dispatch(ShowSuccess('Success Remove Partner'))


            const response = await api.GetPatrner()
            dispatch(RemovePartnerAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Remove Partner'))
        }
        dispatch(hideLoading())
    }
}


export { AsyncGetAllPartner, AsyncCreatePartner, AsyncEditPartner, AsyncRemovePartner }