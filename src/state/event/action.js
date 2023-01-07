const ActionType = {
    GET_ALL_EVENT: 'GET_ALL_EVENT',
    CREATE_EVENT: 'CREATE_EVENT',
    EDIT_EVENT: 'EDIT_EVENT',
    REMOVE_EVENT: 'REMOVE_EVENT'
}

function GetAllEventAction(event) {
    return {
        type: ActionType.GET_ALL_EVENT,
        payload: {
            event
        }
    }
}

function CreateEventAction(event) {
    return {
        type: ActionType.CREATE_EVENT,
        payload: {
            event
        }
    }
}

function EditEventAction(event) {
    return {
        type: ActionType.EDIT_EVENT,
        payload: {
            event
        }
    }
}

function RemoveEventAction(event) {
    return {
        type: ActionType.REMOVE_EVENT,
        payload: {
            event
        }
    }
}

export { ActionType, GetAllEventAction, CreateEventAction, EditEventAction, RemoveEventAction }