const ActionType = {
    GET_ALL_TAUTAN: 'GET_ALL_TAUTAN',
    CREATE_NEW_TAUTAN: 'CREATE_NEW_TAUTAN',
    EDIT_TAUTAN: 'EDIT_TAUTAN',
    REMOVE_TAUTAN: 'REMOVE_TAUTAN'
}

function GetAllTautanAction(link) {
    return {
        type: ActionType.GET_ALL_TAUTAN,
        payload: { link }
    }
}

function CreateTautanAction(link) {
    return {
        type: ActionType.CREATE_NEW_TAUTAN,
        payload: { link }
    }
}
function EditTautanAction(link) {
    return {
        type: ActionType.EDIT_TAUTAN,
        payload: { link }
    }
}
function RemoveTautanAction(link) {
    return {
        type: ActionType.REMOVE_TAUTAN,
        payload: { link }
    }
}

export { ActionType, GetAllTautanAction, CreateTautanAction, EditTautanAction, RemoveTautanAction }