import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllFAQAction, CreateFAQAction, EditFAQAction, RemoveFAQAction } from './action'

function AsyncGetAllFAQ() {
    return async dispatch => {
        try {
            dispatch(showLoading())

            const response = await api.GetAllFAQ();
            dispatch(GetAllFAQAction(response))

            dispatch(hideLoading())
        } catch (err) {
            alert(err.message)
        }
    }
}

function AsyncCreateFAQ(data) {
    return async dispatch => {
        try {
            dispatch(showLoading())

            await api.CreateFAQ(data);

            const response = await api.GetAllFAQ();
            dispatch(CreateFAQAction(response))

            dispatch(hideLoading())
        } catch (err) {
            alert(err.message)
        }
    }
}

function AsyncEditFAQ(id) {
    return async dispatch => {
        try {
            dispatch(showLoading())

            await api.EditFAQ(id);

            const response = await api.GetAllFAQ();
            dispatch(EditFAQAction(response))

            dispatch(hideLoading())
        } catch (err) {
            alert(err.message)
        }
    }
}

function AsyncRemoveFAQ(_id) {
    return async dispatch => {
        try {
            dispatch(showLoading())

            await api.RemoveFAQ(_id);

            const response = await api.GetAllFAQ();
            dispatch(RemoveFAQAction(response))

            dispatch(hideLoading())
        } catch (err) {
            alert(err.message)
        }
    }
}

export { AsyncGetAllFAQ, AsyncCreateFAQ, AsyncEditFAQ, AsyncRemoveFAQ }