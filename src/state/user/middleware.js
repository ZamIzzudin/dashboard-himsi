import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllUsersAction, MakeAccessAction, EditAccessAction, RemoveAccessAction } from './action'
import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function AsyncGetAllUser() {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.GetAllUser()
            dispatch(GetAllUsersAction(response))

        } catch (err) {
            dispatch(ShowError('Cannot Get User'))
        }
        dispatch(hideLoading())
    }
}

function AsyncCreateUser(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.CreateUser(data)
            dispatch(ShowSuccess('Success Create User'))

            const response = await api.GetAllUser()
            dispatch(MakeAccessAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Create User'))
        }
        dispatch(hideLoading())
    }
}

function AsyncEditUser(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.EditUser(data)
            dispatch(ShowSuccess('Success Edit User'))

            const response = await api.GetAllUser()
            dispatch(EditAccessAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Edit User'))
        }
        dispatch(hideLoading())
    }
}

function AsyncRemoveUser(id) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.RemoveUser(id)
            dispatch(ShowSuccess('Success Remove User'))

            const response = await api.GetAllUser()
            dispatch(RemoveAccessAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Remove User'))
        }
        dispatch(hideLoading())
    }
}


export { AsyncGetAllUser, AsyncCreateUser, AsyncEditUser, AsyncRemoveUser }