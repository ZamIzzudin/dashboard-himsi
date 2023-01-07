const ActionType = {
    GET_ALL_DIVISI: 'GET_ALL_DIVISI',
    CREATE_DIVISI: 'CREATE_DIVISI',
    EDIT_DIVISI: 'EDIT_DIVISI',
    REMOVE_DIVISI: 'REMOVE_DIVISI'
}

function GetAllDivisiAction(divisi) {
    return {
        type: ActionType.GET_ALL_DIVISI,
        payload: {
            divisi
        }
    }
}

function CreateDivisiAction(divisi) {
    return {
        type: ActionType.CREATE_DIVISI,
        payload: {
            divisi
        }
    }
}

function EditDivisiAction(divisi) {
    return {
        type: ActionType.EDIT_DIVISI,
        payload: {
            divisi
        }
    }
}

function RemoveDivisiAction(divisi) {
    return {
        type: ActionType.REMOVE_DIVISI,
        payload: {
            divisi
        }
    }
}

export { ActionType, GetAllDivisiAction, CreateDivisiAction, EditDivisiAction, RemoveDivisiAction }