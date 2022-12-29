import api from '../../utils/api'
// import { GetAllUsersAction, EditAccessAction, MakeAccessAction, RemoveAccessAction } from './action'

function AsyncGetAllUser() {
    return async dispatch => {
        try {
            const response = await api.GetAllUser()
            console.log(response)
            // dispatch(getAllUsersAction())
        } catch (err) {
            console.log(err)
        }
    }
}

export { AsyncGetAllUser }