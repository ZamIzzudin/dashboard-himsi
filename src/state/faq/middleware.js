import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllFAQAction, CreateFAQAction, EditFAQAction, RemoveFAQAction } from './action'

function AsyncGetAllFAQ() {
    return async dispatch => {
        dispatch(showLoading())

        try {
            const response = await api.GetAllFAQ();
            dispatch(GetAllFAQAction(response))

        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading())
    }
}

function AsyncCreateFAQ(data) {
    return async dispatch => {
        dispatch(showLoading())

        try {
            await api.CreateFAQ(data);

            const response = await api.GetAllFAQ();
            dispatch(CreateFAQAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading())
    }
}

function AsyncEditFAQ(id) {
    return async dispatch => {
        dispatch(showLoading())

        try {
            await api.EditFAQ(id);

            const response = await api.GetAllFAQ();
            dispatch(EditFAQAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading())
    }
}

function AsyncRemoveFAQ(_id) {
    return async dispatch => {
        dispatch(showLoading())

        try {
            await api.RemoveFAQ(_id);

            const response = await api.GetAllFAQ();
            dispatch(RemoveFAQAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading())
    }
}

export { AsyncGetAllFAQ, AsyncCreateFAQ, AsyncEditFAQ, AsyncRemoveFAQ }