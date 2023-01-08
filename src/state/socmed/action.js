const ActionType = {
    GET_ALL_SOCMED: 'GET_ALL_SOCMED',
    EDIT_SOCMED: 'EDIT_SOCMED'
}

function GetAllSocmedAction(socmed) {
    return {
        type: ActionType.GET_ALL_SOCMED,
        payload: {
            socmed
        }
    }
}

function EditSocmedAction(socmed) {
    return {
        type: ActionType.EDIT_SOCMED,
        payload: {
            socmed
        }
    }
}


export { ActionType, GetAllSocmedAction, EditSocmedAction }