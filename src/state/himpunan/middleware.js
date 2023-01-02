import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { GetDataHimpunanAction } from './action'
// import { EditDataHimpunanAction } from './action'

function asyncGetDataHimpunan() {
    return async dispatch => {
        dispatch(showLoading())

        try {
            const response = await api.GetDataHimpunan()
            dispatch(GetDataHimpunanAction(response))
        } catch (err) {
            alert(err.message)
        }

        dispatch(hideLoading())
    }
}

export { asyncGetDataHimpunan }

