import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { GetAllSliderAction, CreateSliderAction, EditSliderAction, RemoveSliderAction } from './action'

function AsyncGetAllSlider() {
    return async dispatch => {
        dispatch(showLoading())
        try {
            const response = await api.GetSlider()
            dispatch(GetAllSliderAction(response))
        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}

function AsyncCreateSlider(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.CreateSlider(data)

            const response = await api.GetSlider()
            dispatch(CreateSliderAction(response))
        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}

function AsyncEditSlider(data) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.EditSlider(data)

            const response = await api.GetSlider()
            dispatch(EditSliderAction(response))
        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}

function AsyncRemoveSlider(id) {
    return async dispatch => {
        dispatch(showLoading())
        try {
            await api.RemoveSlider(id)

            const response = await api.GetSlider()
            dispatch(RemoveSliderAction(response))
        } catch (err) {
            alert(err.message)
        }
        dispatch(hideLoading())
    }
}


export { AsyncGetAllSlider, AsyncCreateSlider, AsyncEditSlider, AsyncRemoveSlider }