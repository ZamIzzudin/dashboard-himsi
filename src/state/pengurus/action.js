const ActionType = {
    GET_ALL_PENGURUS: 'GET_ALL_PENGURUS',
    CREATE_PENGURUS: 'CREATE_PENGURUS',
    EDIT_PENGURUS: 'EDIT_PENGURUS',
    REMOVE_PENGURUS: 'REMOVE_PENGURUS'
}

function GetAllPengurusAction(pengurus) {
    return {
        type: ActionType.GET_ALL_PENGURUS,
        payload: {
            pengurus
        }
    }
}

function CreatePengurusAction(pengurus) {
    return {
        type: ActionType.CREATE_PENGURUS,
        payload: {
            pengurus
        }
    }
}

function EditPengurusAction(pengurus) {
    return {
        type: ActionType.EDIT_PENGURUS,
        payload: {
            pengurus
        }
    }
}

function RemovePengurusAction(pengurus) {
    return {
        type: ActionType.REMOVE_PENGURUS,
        payload: {
            pengurus
        }
    }
}

export { ActionType, GetAllPengurusAction, CreatePengurusAction, EditPengurusAction, RemovePengurusAction }