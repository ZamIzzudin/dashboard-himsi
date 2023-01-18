import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllFAQAction, CreateFAQAction, EditFAQAction, RemoveFAQAction } from './action'
import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function AsyncGetAllFAQ() {
    return async dispatch => {
        dispatch(showLoading())

        try {
            const response = await api.GetAllFAQ();
            dispatch(GetAllFAQAction(response))

        } catch (err) {
            dispatch(ShowError('Cannot Get FAQ'))
        }

        dispatch(hideLoading())
    }
}

function AsyncCreateFAQ(data) {
    return async dispatch => {
        dispatch(showLoading())

        try {
            await api.CreateFAQ(data);
            dispatch(ShowSuccess('Success Create FAQ'))

            const response = await api.GetAllFAQ();
            dispatch(CreateFAQAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Create FAQ'))
        }

        dispatch(hideLoading())
    }
}

function AsyncEditFAQ(id) {
    return async dispatch => {
        dispatch(showLoading())

        try {
            await api.EditFAQ(id);
            dispatch(ShowSuccess('Success Edit FAQ'))

            const response = await api.GetAllFAQ();
            dispatch(EditFAQAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Edit FAQ'))
        }

        dispatch(hideLoading())
    }
}

function AsyncRemoveFAQ(_id) {
    return async dispatch => {
        dispatch(showLoading())

        try {
            await api.RemoveFAQ(_id);
            dispatch(ShowSuccess('Success Remove FAQ'))

            const response = await api.GetAllFAQ();
            dispatch(RemoveFAQAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Remove FAQ'))
        }

        dispatch(hideLoading())
    }
}

export { AsyncGetAllFAQ, AsyncCreateFAQ, AsyncEditFAQ, AsyncRemoveFAQ }