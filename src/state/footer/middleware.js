import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { GetInfoFooterAction, EditInfoFooterAction } from './action'

function asyncGetInfoFooter() {
    return async dispatch => {
        dispatch(showLoading())

        try {
            const response = await api.GetFooter()
            dispatch(GetInfoFooterAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading())
    }
}

function asyncEditInfoFooter(data) {
    return async dispatch => {
        dispatch(showLoading())

        try {
            await api.EditFooter(data)

            const response = await api.GetFooter()
            dispatch(EditInfoFooterAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading())
    }
}


export { asyncGetInfoFooter, asyncEditInfoFooter }

