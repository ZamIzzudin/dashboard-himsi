import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllSliderAction, CreateSliderAction, EditSliderAction, RemoveSliderAction } from './action'
import { ShowSuccess } from '../success/middleware';
import { ShowError } from '../error/middleware';

function AsyncGetAllSlider() {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.GetSlider()
            dispatch(GetAllSliderAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Get Slider'))
        }
        dispatch(hideLoading())
    }
}

function AsyncCreateSlider(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.CreateSlider(data)
            dispatch(ShowSuccess('Success Create Slider'))

            const response = await api.GetSlider()
            dispatch(CreateSliderAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Create Slider'))
        }
        dispatch(hideLoading())
    }
}

function AsyncEditSlider(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.EditSlider(data)
            dispatch(ShowSuccess('Success Edit Slider'))

            const response = await api.GetSlider()
            dispatch(EditSliderAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Edit Slider'))
        }
        dispatch(hideLoading())
    }
}

function AsyncRemoveSlider(id) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.RemoveSlider(id)
            dispatch(ShowSuccess('Success Remove Slider'))

            const response = await api.GetSlider()
            dispatch(RemoveSliderAction(response))
        } catch (err) {
            dispatch(ShowError('Cannot Remove Slider'))
        }
        dispatch(hideLoading())
    }
}


export { AsyncGetAllSlider, AsyncCreateSlider, AsyncEditSlider, AsyncRemoveSlider }