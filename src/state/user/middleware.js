import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllUsersAction, MakeAccessAction, EditAccessAction, RemoveAccessAction } from './action'

function AsyncGetAllUser() {
    return async dispatch => {
        try {
            dispatch(showLoading())

            const response = await api.GetAllUser()
            dispatch(GetAllUsersAction(response))

            dispatch(hideLoading())
        } catch (err) {
            alert(err.message)
        }
    }
}

function AsyncCreateUser(data) {
    return async dispatch => {
        try {
            dispatch(showLoading())
            await api.CreateUser(data)

            const response = await api.GetAllUser()
            dispatch(MakeAccessAction(response))

            dispatch(hideLoading())
        } catch (err) {
            alert(err.message)
        }
    }
}

function AsyncEditUser(data) {
    return async dispatch => {
        try {
            dispatch(showLoading())
            await api.EditUser(data)

            const response = await api.GetAllUser()
            dispatch(EditAccessAction(response))

            dispatch(hideLoading())
        } catch (err) {
            alert(err.message)
        }
    }
}

function AsyncRemoveUser(id) {
    return async dispatch => {
        try {
            dispatch(showLoading())
            await api.RemoveUser(id)

            const response = await api.GetAllUser()
            dispatch(RemoveAccessAction(response))

            dispatch(hideLoading())
        } catch (err) {
            alert(err.message)
        }
    }
}


export { AsyncGetAllUser, AsyncCreateUser, AsyncEditUser, AsyncRemoveUser }