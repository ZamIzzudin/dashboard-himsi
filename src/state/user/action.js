const ActionType = {
    GET_ALL_USER: 'GET_ALL_USER',
    EDIT_ACCESS_USER: 'EDIT_ACCESS_USER',
    MAKE_NEW_USER_ACCESS: 'MAKE_NEW_USER_ACCESS,',
    REMOVE_USER_ACCESS: 'REMOVE_USER_ACCESS',
}

function GetAllUsersAction(users) {
    return {
        type: ActionType.GET_ALL_USER,
        payload: {
            users
        }
    }
}

function EditAccessAction(users) {
    return {
        type: ActionType.EDIT_ACCESS_USER,
        payload: {
            users
        }
    }
}

function MakeAccessAction(users) {
    return {
        type: ActionType.GET_ALL_USER,
        payload: {
            users
        }
    }
}

function RemoveAccessAction(users) {
    return {
        type: ActionType.REMOVE_USER_ACCESS,
        payload: {
            users
        }
    }
}

export { ActionType, GetAllUsersAction, EditAccessAction, MakeAccessAction, RemoveAccessAction }