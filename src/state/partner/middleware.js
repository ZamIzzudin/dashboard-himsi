import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllPartnerAction, CreatePartnerAction, EditPartnerAction, RemovePartnerAction } from './action'

function AsyncGetAllPartner() {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.GetPatrner()
            dispatch(GetAllPartnerAction(response))
        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}

function AsyncCreatePartner(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.CreatePartner(data)

            const response = await api.GetPatrner()
            dispatch(CreatePartnerAction(response))
        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}

function AsyncEditPartner(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.EditPartner(data)

            const response = await api.GetPatrner()
            dispatch(EditPartnerAction(response))
        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}

function AsyncRemovePartner(id) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.RemovePartner(id)

            const response = await api.GetPatrner()
            dispatch(RemovePartnerAction(response))
        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}


export { AsyncGetAllPartner, AsyncCreatePartner, AsyncEditPartner, AsyncRemovePartner }